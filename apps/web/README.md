# Next.js (`web`)

Static export of the clinic prototype app. Development:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). `next build` writes `out/` (`output: 'export'`, `trailingSlash`). There is no `next start`.

Hosted from the public S3 website bucket in **dev** (HTTP only; no CloudFront). Next is `/`; Storybook is `/storybook/`. Prerequisites and the website URL are in [../../infra/README.md](../../infra/README.md). GitHub Actions deploys on `main`; disconnect the old Vercel project `clinic-prototype-web` after cutover.
