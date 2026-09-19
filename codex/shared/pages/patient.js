import { button } from "../ui.js";
import { patientId } from "../fixture.js";
import { patientTabs, pageTabs, nav } from "../routes.js";
import { summary } from "../widgets/summary/index.js";
import { summaryAlert } from "../widgets/summary/alert.js";
import { chartPanel } from "../widgets/patient/chart-panel.js";
import { treatments } from "../widgets/patient/treatments.js";
import { perio, notes, prescriptions, documents, account } from "../widgets/patient/other-tabs.js";
const labels = { Summary: "Resumen", "Dental chart": "Odontograma", Perio: "Periodoncia", Notes: "Evoluciones", Treatments: "Tratamientos", Prescriptions: "Fórmulas", Documents: "Documentos", Account: "Cuenta", Plans: "Planes", Estimates: "Presupuestos" };
export function patientPanel(tab, sub, variant) {
  if (tab === "Summary") return summary(variant);
  if (tab === "Dental chart") return chartPanel(sub, variant);
  if (tab === "Perio") return perio();
  if (tab === "Notes") return notes();
  if (tab === "Treatments") return `<nav class="tabs subtabs" aria-label="Tratamientos">${pageTabs.Treatments.map((key) => `<a class="${sub === key ? "active" : ""}" href="#page=patients&patient=${patientId}&tab=Treatments&sub=${encodeURIComponent(key)}">${labels[key]}</a>`).join("")}</nav>${treatments(sub)}`;
  if (tab === "Prescriptions") return prescriptions();
  if (tab === "Documents") return documents();
  return account();
}
export function patient(tab, sub, variant) {
  if (!sub) sub = tab === "Dental chart" ? "Enter" : tab === "Treatments" ? "Plans" : sub;
  if (variant === "dense") return `<div class="patient-view dense-patient-view"><div class="dense-patient-header"><div class="patienttop"><div><strong>Ana García</strong><div class="muted small">Ana García · ID 0001</div></div><div class="row"><a class="btn" href="${nav("patients")}">Directorio de pacientes</a>${button("PDF")}${button("Excel")}<a class="btn" href="${nav("patients", "Account", true)}">Cobrar paciente</a></div></div>${summaryAlert()}<nav class="tabs" aria-label="Historia clínica">${patientTabs.map((key) => `<a class="${tab === key ? "active" : ""}" href="#page=patients&patient=${patientId}&tab=${encodeURIComponent(key)}">${labels[key]}</a>`).join("")}</nav></div><div class="patientbody">${patientPanel(tab, sub, variant)}</div></div>`;
  return `<div class="patient-view ${variant === "care" ? "care-variant" : "baseline-variant"}"><div class="patienttop"><div><strong>Ana García</strong><div class="muted small">Ana García · ID 0001</div></div><div class="row"><a class="btn" href="${nav("patients")}">Directorio de pacientes</a>${button("PDF")}${button("Excel")}<a class="btn" href="${nav("patients", "Account", true)}">Cobrar paciente</a></div></div><div class="patientbody"><nav class="tabs" aria-label="Historia clínica">${patientTabs.map((key) => `<a class="${tab === key ? "active" : ""}" href="#page=patients&patient=${patientId}&tab=${encodeURIComponent(key)}">${labels[key]}</a>`).join("")}</nav>${patientPanel(tab, sub, variant)}</div></div>`;
}
