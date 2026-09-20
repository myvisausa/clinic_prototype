import { nav } from "./routes.js";
import { patientId } from "./fixture.js";
import { button } from "./ui.js";
import { directory } from "./pages/patients.js";
import { patientPanel } from "./pages/patient.js";
import { summaryAlert } from "./widgets/summary/alert.js";
import { treatments } from "./widgets/patient/treatments.js";
import { schedule } from "./pages/schedule.js";
import { reference } from "./pages/reference.js";
import { setup } from "./pages/setup.js";
import { services } from "./pages/services.js";
import { invoices } from "./pages/invoices.js";
import { insurers } from "./pages/insurers.js";

const patientLinks = [
  ["Resumen", "Summary"], ["Odontograma", "Dental chart"], ["Planes de tratamiento", "Treatments", "Plans"],
  ["Evoluciones", "Notes"], ["Periodoncia", "Perio"], ["Fórmulas", "Prescriptions"],
  ["Documentos", "Documents"], ["Presupuestos", "Treatments", "Estimates"], ["Cuenta", "Account"],
];
const clinicLinks = [
  ["Hoja del día", "schedule", "Day sheet"], ["Calendario", "schedule", "Calendar"],
  ["Pacientes", "patients"], ["Facturas", "invoices"],
  ["Horario y disponibilidad", "schedule", "Team schedule"], ["Profesionales", "setup", "Providers"],
  ["Tipos de cita", "setup", "Appointment types"], ["Servicios y paquetes", "services", "Services"],
  ["Códigos clínicos", "reference", "Codes"], ["Medicamentos", "reference", "Formulas"],
  ["Plantillas de documentos", "reference", "Documents"], ["Aseguradoras", "insurers"],
  ["Configuración clínica", "setup", "Clinic"],
];
function resolvedPatient(tab, sub) {
  if (tab === "Clinical") return {Plans:["Treatments","Plans"],Perio:["Perio",""],Notes:["Notes",""]}[sub] || ["Dental chart","Enter"];
  if (tab === "Documentation") return sub === "Documents" ? ["Documents",""] : ["Prescriptions",""];
  if (tab === "Account" && sub === "Estimates") return ["Treatments","Estimates"];
  return [tab || "Summary", sub || ""];
}
function patientHref(tab, sub = "") { return nav("patients", tab, true, sub); }
function row(label, href, active) {
  return `<div class="side-row"><a href="${href}" class="${active ? "active" : ""}"${active ? ' aria-current="page"' : ""}><span>${label}</span></a></div>`;
}
export function contextualSidebar(page, tab, sub, person) {
  if (page === "patients" && person === patientId) {
    const [activeTab, activeSub] = resolvedPatient(tab, sub);
    return `<aside class="side contextual-side"><div class="sidehead"><h2>Clínica · Ana García</h2><button type="button" data-inert aria-label="Contraer barra">☷</button></div><nav aria-label="Historia clínica de Ana García">${row("← Volver a pacientes",nav("patients"),false)}${patientLinks.map(([label,key,nested])=>row(label,patientHref(key,nested),(key === activeTab && (key !== "Treatments" || nested === (activeSub || "Plans"))))).join("")}</nav></aside>`;
  }
  const active = (key, wantedTab) => page === key && (key === "services" || wantedTab === undefined || tab === wantedTab);
  const item = (label,key,wantedTab) => row(label,nav(key,wantedTab || ""),active(key,wantedTab));
  const settingsActive = (page === "setup" && ["Clinic","Chart preferences"].includes(tab)) || (page === "reference" && ["Priorities","Prognoses"].includes(tab));
  return `<aside class="side contextual-side"><div class="sidehead"><h2>Clínica</h2><button type="button" data-inert aria-label="Contraer barra">☷</button></div><nav aria-label="Páginas de Clínica"><div class="contextual-nav-group">${clinicLinks.slice(0,4).map(([label,key,t])=>item(label,key,t)).join("")}</div><section class="contextual-nav-group"><h3>Equipo</h3>${clinicLinks.slice(4,7).map(([label,key,t])=>item(label,key,t)).join("")}</section><section class="contextual-nav-group"><h3>Catálogos</h3>${clinicLinks.slice(7,12).map(([label,key,t])=>item(label,key,t)).join("")}</section><section class="contextual-nav-group">${row("Configuración clínica",nav("setup","Clinic"),settingsActive)}</section></nav><button type="button" class="browse" data-all-pages>Ver todas las páginas</button></aside>`;
}
export function contextualAllPages(pinned, person) {
  const item = (label, href, pinKey = "") => `<div class="all-pages-row" data-page-name="${label.toLocaleLowerCase("es")}"><a href="${href}">${label}</a>${pinKey ? `<button type="button" data-pin="${pinKey}" aria-label="${pinned.has(pinKey) ? "Desfijar" : "Fijar"} ${label}" aria-pressed="${pinned.has(pinKey)}">${pinned.has(pinKey) ? "●" : "○"}</button>` : ""}</div>`;
  const clinic = clinicLinks.map(([label,key,tab]) => item(label,nav(key,tab || ""),["invoices","patients","insurers"].includes(key) ? key : "")).join("");
  const patient = person === patientId ? `<section class="all-pages-group"><h3>Paciente · Ana García</h3>${patientLinks.map(([label,tab,sub])=>item(label,patientHref(tab,sub))).join("")}</section>` : "";
  return `<section class="all-pages-group"><h3>Clínica</h3>${clinic}</section>${patient}`;
}
function tabs(items, current) {
  return `<nav class="contextual-tabs" aria-label="Vistas de ${current}">${items.map(([label,href,selected])=>`<a href="${href}" class="${selected ? "active" : ""}"${selected ? ' aria-current="page"' : ""}>${label}</a>`).join("")}</nav>`;
}
function surface(title, body, navigation = "") { return `<div class="contextual-surface"><header class="contextual-heading"><h1>${title}</h1>${navigation}</header>${body}</div>`; }
export function contextualPatient(tab, sub) {
  const [key, nested] = resolvedPatient(tab, sub);
  const content = key === "Treatments" ? treatments(nested === "Estimates" ? "Estimates" : "Plans") : patientPanel(key, nested || (key === "Dental chart" ? "Enter" : ""), "dense");
  return `<div class="patient-view dense-patient-view contextual-patient"><div class="dense-patient-header"><div class="patienttop"><div><strong>Ana García</strong><div class="muted small">Ana García · ID 0001</div></div><div class="row"><a class="btn" href="${nav("patients")}">Directorio de pacientes</a>${button("PDF")}${button("Excel")}<a class="btn" href="${patientHref("Account")}">Cobrar paciente</a></div></div>${summaryAlert()}</div><div class="patientbody">${content}</div></div>`;
}
export function contextualContent(page, tab, sub, person) {
  if (page === "patients") return person === patientId ? contextualPatient(tab,sub) : directory("dense");
  if (page === "schedule") {
    if (tab === "Calendar") return surface("Calendario",schedule("Calendar",sub,"dense"));
    if (tab === "Team schedule") {
      const availability = new URLSearchParams(location.hash.slice(1)).has("availability");
      return surface("Horario y disponibilidad",schedule("Team schedule",sub,"dense"),tabs([["Horario",nav("schedule","Team schedule"),!availability],["Disponibilidad",`${nav("schedule","Team schedule")}&availability=weekly`,availability]],"Horario y disponibilidad"));
    }
    return `<div class="contextual-surface contextual-day">${schedule("Day sheet",sub,"dense")}</div>`;
  }
  if (page === "invoices") return surface("Facturas",invoices());
  if (page === "insurers") return surface("Aseguradoras",insurers());
  if (page === "services") return surface("Servicios y paquetes",services(tab || "Services"),tabs([["Servicios",nav("services","Services"),tab === "Services"],["Categorías",nav("services","Categories"),tab === "Categories"],["Paquetes",nav("services","Offerings"),tab === "Offerings"]],"Servicios y paquetes"));
  if (page === "reference" && ["Priorities","Prognoses"].includes(tab)) return clinicalSettings(page,tab);
  if (page === "reference") return surface({Codes:"Códigos clínicos",Formulas:"Medicamentos",Documents:"Plantillas de documentos"}[tab] || "Códigos clínicos",reference(tab || "Codes"));
  if (page === "setup" && ["Clinic","Chart preferences"].includes(tab)) return clinicalSettings(page,tab);
  if (page === "setup") return surface(tab === "Providers" ? "Profesionales" : "Tipos de cita",setup(tab || "Providers"));
  return surface("Clínica",`<a href="${nav("schedule","Day sheet")}">Ir a Hoja del día</a>`);
}
function clinicalSettings(page, tab) {
  const current = page === "reference" ? tab : tab || "Clinic";
  const items = [["Consultorio","setup","Clinic"],["Preferencias del odontograma","setup","Chart preferences"],["Prioridades","reference","Priorities"],["Pronósticos","reference","Prognoses"]];
  return surface("Configuración clínica",page === "reference" ? reference(current) : setup(current),tabs(items.map(([label,key,t])=>[label,nav(key,t),current===t]),"Configuración clínica"));
}
