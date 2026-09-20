# Recorrido piloto — cobertura y límites

Static illustrated walkthrough for the authorized local AP Estudio Odontológico account at `localhost:3000`, captured on 2026-09-20. The available narrative captures use a clearly fake test patient. Business and staff identities may remain where they are part of the clinic workspace. Privacy-sensitive Inicio, profile, and consent captures were not saved and remain pending a masking method.

The page distinguishes recorded success, blocked requested flows, and pending evidence. It does not claim that a booking, calendar appointment, arrival status, invoice, fiscal submission, outbound message, or WhatsApp connection succeeded unless a screenshot supports that claim.

Images live in `images/` and are named by walkthrough step. The HTML uses relative, clickable image references and lazy image loading, matching the sibling comparison page conventions.

`manifest.json` and the walkthrough HTML reference 32 narrative captures. The `images/` folder contains 34 files: 33 app captures are baseline JPEG at 1686×948 despite the `.png` filename extension, and `walkthrough-preview.png` is a baseline JPEG at 1265×712. The preview is for artifact review, not a narrative capture. `04-paciente-no-encontrado-01.png` is retained as unreferenced supporting evidence that the inline appointment patient was not found after the cancelled appointment. Neither extra was deleted or transformed.
