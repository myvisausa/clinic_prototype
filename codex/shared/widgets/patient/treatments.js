import { button } from "../../ui.js";
export function treatments(sub) {
  if (sub === "Estimates") return `<div class="patient-empty" role="status">Presupuestos de facturación del paciente. Las propuestas clínicas y sus precios se conservan en Planes.</div>`;
  const card = (saved) => `<div class="plan-card"><div><strong>Active Treatment Plan</strong><p>19 de sept de 2026</p>${saved ? `<p>Presentado el: 19 de sept de 2026, 1:10 p. m.</p><p>Firmado el: 19 de sept de 2026, 1:10 p. m.</p>` : ""}</div><span class="plan-status">${saved ? "Guardado" : "Activo"}</span>${button("Enviar por WhatsApp")}</div>`;
  return `<section class="patient-section"><div class="row between"><h2>Planes de tratamiento</h2>${button("Nuevo plan", true)}</div><h3>Activo</h3>${card(false)}<h3>Inactivo</h3><p class="patient-empty">Este paciente aún no tiene planes de tratamiento.</p><h3>Guardados</h3>${card(true)}</section>`;
}
