# Clinic prototype parity previews

This folder contains three navigable, static clinic previews and three frozen Summary sketches. The navigable previews use the saved [September 19 reference captures](reference-captures/2026-09-19/) for visible labels, routes, layouts, and fixture states. They make no product API requests and do not save or submit data.

## Open locally

```sh
cd /Users/austinibele/Projects/crm/apps/clinic_prototype/codex
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/`. The [gallery](index.html) offers the [current Clinic baseline](dynamic-baseline/), [Care proposal](care-draft/), and [dense Care draft](care-dense/) with Fit, 1366 × 768, and 1024 × 576 preview sizes. Hash links retain page, tab, and nested view across reloads and Back/Forward. The comparison links carry the current hash among the three navigable variants.

The current baseline places Agenda and Pacientes in Clínica. The Care proposal places them in Atención, leaving Referencia clínica, Configuración clínica, Servicios y precios, Facturas, and Aseguradoras in Clínica. All three share the same page modules and data. Care deliberately puts allergy and appointment cards early in the patient Summary. The dense Care draft keeps the same Care membership; its compact patient and schedule layouts are being developed separately. Inicio, Conecta, Más, and Ajustes remain available in all three variants. Más and Ver todas las páginas open the searchable page list, including Biblioteca. Home shows the captured pinned Facturas, Bandeja, and WhatsApp shortcuts.

## Coverage and limits

The navigable previews cover the captured Home and Contactos pages; Agenda day sheet, team, calendar, and availability views; the patient directory and record sections; five clinical administration pages; Conecta inbox, templates, WhatsApp, and forms; twelve Ajustes pages; and Biblioteca categories. Visible interface copy is Spanish while internal hash route and tab keys stay stable in English. The fixture values shown for Ana García and related records are fictional and explicitly authorized for this prototype. Their provenance is the local reference captures and fixture files, not a live medical record fetch.

This is a view-only comparison. Pin state is local to the open page and resets on reload. Buttons for clinical edits, uploads, connections, and settings changes are visual controls. The tooth chart uses a static four-row anatomy view with local tooth and occlusal SVG assets; it does not reproduce the interactive chart engine. Some long or nested views use representative layout where the saved captures do not show every state. Dates and records without observed capture data are explicitly marked as such. The originals were captured at 90% browser zoom; their blank margins are not a whitespace target. This prototype does not claim pixel-perfect parity at every viewport.

The six `clinic-*.html` sketches remain frozen. The two original baseline source hashes are:

```text
28366ee745cbae327b414dd3afb8229c5c9efc0e72134088baf698d24e8a36eb  clinic-live-baseline.html
8996f3ebca75119b0b02a2d686e7919622beac5d15c608deeb8a7ec31e52c3b0  clinic-live-baseline-browser.html
```

The ownership, route contracts, and acceptance gates for this parity pass are recorded in [the plan](../../../docs/plans-completed/2026-09-19_2200_clinic-prototype-parity.md).
