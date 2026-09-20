# Clinic prototype parity previews

This folder contains six navigable, static clinic previews and three frozen Summary sketches. The navigable previews use the saved [September 19 reference captures](reference-captures/2026-09-19/) for visible labels, routes, layouts, and fixture states. They make no product API requests and do not save or submit data.

## Open locally

```sh
cd /Users/austinibele/Projects/crm/apps/clinic_prototype/codex
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/`. The [gallery](index.html) offers the [current Clinic baseline](dynamic-baseline/), [Care proposal](care-draft/), [dense Care draft](care-dense/), [grouped Care](care-grouped/), [Patient workspace](patient-workspace/), and [Contextual Clinic](contextual-clinic/) with Fit, 1366 × 768, and 1024 × 576 preview sizes. Hash links retain page, tab, and nested view across reloads and Back/Forward. The comparison links carry the current hash among the six navigable variants.

The current baseline places Agenda and Pacientes in Clínica. The Care proposal places them in Atención, leaving Referencia clínica, Configuración clínica, Servicios y precios, Facturas, and Aseguradoras in Clínica. All six share the same underlying patient widgets and fictional data. Care deliberately puts allergy and appointment cards early in the patient Summary. The dense Care draft keeps the same Care membership and implements compact patient and schedule layouts. It places the fictional Penicilina/Nunca note beneath the patient identity across all eight tabs and keeps Edit as a static visual control, following the two approved A decisions. Inicio, Conecta, Más, and Ajustes remain available in all six variants. Más and Ver todas las páginas open the searchable page list, including Biblioteca. Home shows the captured pinned Facturas, Bandeja, and WhatsApp shortcuts.

## Coverage and limits

The navigable previews cover the captured Home and Contactos pages; Agenda day sheet, team, calendar, and availability views; the patient directory and record sections; five clinical administration pages; Conecta inbox, templates, WhatsApp, and forms; twelve Ajustes pages; and Biblioteca categories. Visible interface copy is Spanish while internal hash route and tab keys stay stable in English. The fixture values shown for Ana García and related records are fictional and explicitly authorized for this prototype. Their provenance is the local reference captures and fixture files, not a live medical record fetch.

The dense patient directory shows all captured cards; its card links currently lead to the single Ana García fixture record. This is a view-only comparison. Pin state is local to the open page and resets on reload. Buttons for clinical edits, uploads, connections, and settings changes are visual controls. The tooth chart uses a static four-row anatomy view with local tooth and occlusal SVG assets; it does not reproduce the interactive chart engine. Some long or nested views use representative layout where the saved captures do not show every state. Dates and records without observed capture data are explicitly marked as such. The originals were captured at 90% browser zoom; their blank margins are not a whitespace target. This prototype does not claim pixel-perfect parity at every viewport.

The six `clinic-*.html` sketches remain frozen. The two original baseline source hashes are:

```text
28366ee745cbae327b414dd3afb8229c5c9efc0e72134088baf698d24e8a36eb  clinic-live-baseline.html
8996f3ebca75119b0b02a2d686e7919622beac5d15c608deeb8a7ec31e52c3b0  clinic-live-baseline-browser.html
```

The ownership, route contracts, and acceptance gates for this parity pass are recorded in [the plan](../../../docs/plans-completed/2026-09-19_2200_clinic-prototype-parity.md).

The dense layout scope and the two approved A decisions are documented in [the dense design plan](../../../docs/plans-completed/2026-09-19_care-dense-design.md).

The two organization comparisons keep every existing patient widget and static action. [Grouped Care](care-grouped/) keeps the record in Atención with four destinations: Resumen, Clínica, Documentación, and Cuenta. [Patient workspace](patient-workspace/) puts those same four destinations in a dedicated outer Paciente workspace after a record is explicitly selected. Its Paciente button opens the directory when no patient is selected, and the directory link clears selection. Legacy eight-tab patient hashes map to their new group and section, including all three chart modes and the separate treatment-plan and estimate views. The grouped section links stay visible beneath the patient header while the record scrolls. The original baseline, Care draft, and Care Dense previews retain their existing routes and rendered content. These variants are organizational comparisons; the notes table remains separate from the chart and no encounter editor is added. The scope and validation gates are in [the organization plan](../../../docs/plans-completed/2026-09-19_clinical-organization-variations.md).

[Contextual Clinic](contextual-clinic/) keeps the original Home/Clinic/Conecta/Más outer rail and existing Ajustes/Profile controls. The Clinic inner sidebar has Day Sheet, Calendar, Patients, Invoices, Team, Catalogs, and Clinical Settings. Opening the fictional Ana record replaces that sidebar with nine patient destinations while Clinic stays selected; returning to Patients clears the selected record. Chart modes, schedule/calendar modes, provider exceptions, service tabs, and clinical settings remain navigable. The contextual All Pages search lists the promoted Clinic destinations and, when Ana is selected, her patient sections. The patient view reuses existing widgets without the redundant eight-tab row or parent treatment tab strip. An unknown patient ID shows the directory. This is a view-only navigation study based on [the selected Contextual Clinic proposal](navigation-studies/02-contextual-clinic.md) and [the implementation plan](../../../docs/plans-completed/2026-09-19_2300_contextual-clinic.md).
