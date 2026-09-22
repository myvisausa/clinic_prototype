# Clinic prototype S3 (dev)

Public S3 website bucket for the Next static export and Storybook. One environment: `dev` in account `349514606126`. No CloudFront and no custom domain.

The website endpoint is **HTTP only**:

`http://myvisausa-clinic-prototype-dev.s3-website-us-east-1.amazonaws.com`

Storybook is the `/storybook/` prefix of that same site.

## CI ownership

GitHub Actions (`.github/workflows/deploy.yml`) applies this stack and syncs `deploy/site/`. The `clinical-walkthrough/` and `clinical-walkthrough-staff/` prefixes are published by the CRM walkthrough workflow and are excluded from this sync. Local Terraform is `terraform fmt` / `terraform fmt -check -diff` only — do not `init`, `validate`, `plan`, or `apply`.

Required GitHub repository variable: `DEV_AWS_ACCOUNT_ID=349514606126`. Deploy uses GitHub OIDC roles `github-ci-clinic-prototype-terraform-dev` and `github-ci-clinic-prototype-deploy-dev` (issued from `infra-oidc`). No long-lived AWS keys.

Remote state: `s3://myvisausa-tf-states/clinic-prototype-dev` (`env/backend_s3_dev.hcl`).

## Rollout checks (cannot be guessed locally)

Before the first CI apply:

1. Account-level S3 Block Public Access in `349514606126` must leave `BlockPublicPolicy` and `RestrictPublicBuckets` disabled. If either is on, a public website URL is impossible without CloudFront.
2. The Terraform role must be able to read/write `s3://myvisausa-tf-states/clinic-prototype-dev`. An allowlisted state-bucket policy would block `terraform init`.

Disconnect the Vercel project `clinic-prototype-web` after the S3 site is live. Optionally archive Chromatic app `6aa462532553f63ea618f691`. Confirm GitHub Actions is enabled on `myvisausa/clinic_prototype`.

## Teardown

There is no destroy workflow. After explicit authorization, empty the bucket if needed and destroy this stack through an authorized remote process — do not run `terraform destroy` (or init/plan/apply) locally. `force_destroy` is on because this is a prototype. Vanilla HTML at the repo root stays on GitHub Pages and is not in this bucket.
