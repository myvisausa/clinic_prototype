import { button } from "./ui.js";
import { nav } from "./routes.js";
import { summary } from "./widgets/summary/index.js";
import { summaryAlert } from "./widgets/summary/alert.js";
import { chartPanel } from "./widgets/patient/chart-panel.js";
import { treatments } from "./widgets/patient/treatments.js";
import { perio, notes, prescriptions, documents, account } from "./widgets/patient/other-tabs.js";

export const groupedTabs = [["Summary", "Resumen"], ["Clinical", "Clínica"], ["Documentation", "Documentación"], ["Account", "Cuenta"]];
export function patientGroup(tab, sub = "") {
  if (tab === "Dental chart" || tab === "Perio" || tab === "Notes" || tab === "Clinical" || (tab === "Treatments" && sub !== "Estimates")) return "Clinical";
  if (tab === "Prescriptions" || tab === "Documents" || tab === "Documentation") return "Documentation";
  if (tab === "Account" || (tab === "Treatments" && sub === "Estimates")) return "Account";
  return "Summary";
}
export function patientTarget(tab, sub = "") {
  if (tab === "Dental chart") return "clinical-chart";
  if (tab === "Perio") return "clinical-perio";
  if (tab === "Notes") return "clinical-notes";
  if (tab === "Treatments") return sub === "Estimates" ? "account-estimates" : "clinical-plans";
  if (tab === "Prescriptions") return "documentation-prescriptions";
  if (tab === "Documents") return "documentation-documents";
  if (tab === "Clinical") return {Chart:"clinical-chart",Plans:"clinical-plans",Perio:"clinical-perio",Notes:"clinical-notes"}[sub] || "";
  if (tab === "Documentation") return {Prescriptions:"documentation-prescriptions",Documents:"documentation-documents"}[sub] || "";
  if (tab === "Account") return sub === "Estimates" ? "account-estimates" : "";
  return "";
}
export function groupLink(group, sub = "") { return nav("patients", group, true, sub); }
const section = (id, title, content) => `<section class="grouped-section" id="${id}" aria-label="${title}">${id === "clinical-chart" ? `<div class="grouped-section-label"><h2>${title}</h2></div>` : ""}${content}</section>`;
function groupContent(group, tab, sub) {
  if (group === "Summary") return summary("dense");
  if (group === "Clinical") {
    const chartSub = tab === "Dental chart" ? sub || "Enter" : "Enter";
    return `<nav class="grouped-jumps" aria-label="Secciones clínicas">${[["clinical-chart","Odontograma","Chart"],["clinical-plans","Planes de tratamiento","Plans"],["clinical-perio","Periodoncia","Perio"],["clinical-notes","Evoluciones","Notes"]].map(([id,label,key])=>`<a href="${groupLink("Clinical",key)}">${label}</a>`).join("")}</nav>${section("clinical-chart","Odontograma",chartPanel(chartSub,"dense"))}${section("clinical-plans","Planes de tratamiento",treatments("Plans"))}${section("clinical-perio","Periodoncia",perio())}${section("clinical-notes","Evoluciones",notes())}`;
  }
  if (group === "Documentation") return `<nav class="grouped-jumps" aria-label="Secciones de documentación"><a href="${groupLink("Documentation","Prescriptions")}">Fórmulas</a><a href="${groupLink("Documentation","Documents")}">Documentos</a></nav>${section("documentation-prescriptions","Fórmulas",prescriptions())}${section("documentation-documents","Documentos",documents())}`;
  return `<nav class="grouped-jumps" aria-label="Secciones de cuenta"><a href="${groupLink("Account")}">Facturación</a><a href="${groupLink("Account","Estimates")}">Presupuestos</a></nav><section class="grouped-section" id="account-billing">${account()}</section><section class="grouped-section" id="account-estimates"><div class="grouped-section-label"><h2>Presupuestos</h2></div>${treatments("Estimates")}</section>`;
}
export function groupedPatient(tab, sub, variant) {
  const group = patientGroup(tab, sub);
  const tabs = variant === "care-grouped" ? `<nav class="tabs grouped-tabs" aria-label="Historia clínica agrupada">${groupedTabs.map(([key,label])=>`<a href="${groupLink(key)}" class="${group===key?"active":""}">${label}</a>`).join("")}</nav>` : "";
  return `<div class="patient-view dense-patient-view grouped-patient"><div class="dense-patient-header"><div class="patienttop"><div><strong>Ana García</strong><div class="muted small">Ana García · ID 0001</div></div><div class="row"><a class="btn" href="${nav("patients")}">Directorio de pacientes</a>${button("PDF")}${button("Excel")}<a class="btn" href="${groupLink("Account")}">Cobrar paciente</a></div></div>${summaryAlert()}${tabs}</div><div class="patientbody">${groupContent(group,tab,sub)}</div></div>`;
}
