import { params, pageTabs, nav } from "./routes.js";
import { asset, patientId } from "./fixture.js";
import { schedule } from "./pages/schedule.js";
import { directory } from "./pages/patients.js";
import { patient } from "./pages/patient.js";
import { reference } from "./pages/reference.js";
import { setup } from "./pages/setup.js";
import { services } from "./pages/services.js";
import { invoices } from "./pages/invoices.js";
import { insurers } from "./pages/insurers.js";
import { landing } from "./pages/landing.js";
import { settings } from "./pages/settings.js";
import { groupedPatient, groupedTabs, patientGroup, patientTarget, groupLink } from "./grouped-patient.js";
import { contextualSidebar, contextualContent, contextualAllPages } from "./contextual-clinic.js";

const groups = {
  Home: { label: "Inicio", icon: "⌂", entries: [["Resumen", "home", "⌂"], ["Contactos", "contacts", "♧"]] },
  Patient: { label: "Paciente", icon: "♧", entries: [] },
  Care: { label: "Atención", icon: "♧", entries: [["Agenda", "schedule", "▦"], ["Pacientes", "patients", "♧"]] },
  Clinic: { label: "Clínica", icon: "▤", entries: [["Agenda", "schedule", "▦"], ["Pacientes", "patients", "♧"], ["Referencia clínica", "reference", "▤"], ["Configuración clínica", "setup", "⚙"], ["Servicios y precios", "services", "☷"], ["Facturas", "invoices", "$"], ["Aseguradoras", "insurers", "▣"]] },
  Engage: { label: "Conecta", icon: "☏", entries: [["Bandeja", "engage", "✉"], ["Plantillas", "message-templates", "▤"], ["WhatsApp", "whatsapp", "☏"], ["Formularios", "forms", "▤"]] },
  More: { label: "Más", icon: "•••", entries: [["Biblioteca", "library", "▧"]] },
  Setup: { label: "Ajustes", icon: "⚙", entries: [["Primeros pasos", "get-started", "◉"], ["Mi perfil", "profile", "◉"], ["Organización", "organization", "▣"], ["Etiquetas", "tags", "◇"], ["Plantillas", "task-templates", "▤"], ["Facturación", "fiscal", "$"], ["Precios", "prices", "◈"], ["Equipo", "team", "♧"], ["Metas de ventas", "sales-goals", "◎"], ["Integraciones", "integrations", "⌘"], ["Legal", "legal", "§"], ["Automatización", "automation", "⚙"]] },
};
const pinned = new Set(["invoices", "engage", "whatsapp"]);
const settingsPages = new Set(groups.Setup.entries.map((entry) => entry[1]));
const landingPages = new Set([...groups.Home.entries, ...groups.Engage.entries, ...groups.More.entries].map((entry) => entry[1]));
const carePages = new Set(groups.Care.entries.map((entry) => entry[1]));
const destination = { Home: "home", Care: "schedule", Patient: "patients", Clinic: "reference", Engage: "engage", Setup: "get-started" };
const settingsSections = [["Primeros pasos", ["get-started"]], ["Cuenta", ["profile", "organization", "tags", "task-templates"]], ["Finanzas", ["fiscal", "prices"]], ["Equipo", ["team", "sales-goals"]], ["Integraciones", ["integrations"]], ["Legal", ["legal"]], ["Automatización", ["automation"]]];

function workspace(page, variant, person) {
  if (variant === "contextual-clinic" && !settingsPages.has(page) && page !== "library" && !groups.Engage.entries.some((entry) => entry[1] === page) && !groups.Home.entries.some((entry) => entry[1] === page)) return "Clinic";
  if (variant === "patient-workspace" && page === "patients" && person === patientId) return "Patient";
  if (settingsPages.has(page)) return "Setup";
  if (page === "library") return "More";
  if (groups.Engage.entries.some((entry) => entry[1] === page)) return "Engage";
  if (groups.Home.entries.some((entry) => entry[1] === page)) return "Home";
  if (variant !== "baseline" && carePages.has(page)) return "Care";
  return "Clinic";
}
function entriesFor(work, variant) {
  if (work === "Clinic" && variant !== "baseline") return groups.Clinic.entries.slice(2);
  return groups[work].entries;
}
function rail(work, variant, selectedPatient) {
  const labels = variant === "baseline" || variant === "contextual-clinic" ? ["Home", "Clinic", "Engage", "More"] : variant === "patient-workspace" ? ["Home", "Care", "Patient", "Clinic", "Engage", "More"] : ["Home", "Care", "Clinic", "Engage", "More"];
  const link = (key) => key === "More" ? `<button type="button" data-all-pages aria-label="Más"><span class="ico">${groups[key].icon}</span><span>Más</span></button>` : `<a href="${nav(key === "Clinic" && (variant === "baseline" || variant === "contextual-clinic") ? "schedule" : destination[key], key === "Patient" && selectedPatient ? "Summary" : "", key === "Patient" && Boolean(selectedPatient))}" class="${work === key ? "active" : ""}"><span class="ico">${groups[key].icon}</span>${key === "Home" || key === "Engage" ? '<span class="badge">3</span>' : ""}<span>${groups[key].label}</span></a>`;
  return `<nav class="rail" aria-label="Navegación de la aplicación"><a class="logo" href="${nav("organization")}"><img src="${asset("ap-estudio-logo.webp")}" alt="Dental Implant Clinic Demo"></a>${labels.map(link).join("")}<div class="bottom">${link("Setup")}<button type="button" data-inert aria-label="Perfil"><span class="ico">◉</span>Perfil</button></div></nav>`;
}
function contentFor(page, tab, sub, person, variant) {
  if (variant === "contextual-clinic" && ["schedule","patients","reference","setup","services","invoices","insurers"].includes(page)) return contextualContent(page, tab, sub, person);
  if (page === "patients" && person === patientId) return variant === "care-grouped" || variant === "patient-workspace" ? groupedPatient(tab, sub, variant) : patient(tab, sub, variant);
  switch (page) {
    case "schedule": return schedule(tab, sub, variant === "care-grouped" || variant === "patient-workspace" ? "dense" : variant);
    case "patients": return directory(variant === "care-grouped" || variant === "patient-workspace" ? "dense" : variant);
    case "reference": return reference(tab, sub);
    case "setup": return setup(tab, sub);
    case "services": return services(tab, sub);
    case "invoices": return invoices(tab, sub);
    case "insurers": return insurers(tab, sub);
    default:
      if (settingsPages.has(page)) return settings(page, tab, sub);
      if (landingPages.has(page)) return landing(page, tab, sub);
      return `<div class="page"><h1>Página no disponible</h1><a href="${nav("home")}">Volver al resumen</a></div>`;
  }
}
function sidebar(work, page, variant, tab, sub, person) {
  if (variant === "contextual-clinic" && work === "Clinic") return contextualSidebar(page,tab,sub,person);
  if (work === "Patient") return `<aside class="side"><div class="sidehead"><h2>Paciente</h2><button type="button" class="side-collapse" data-inert aria-label="Contraer barra">☷</button></div><nav aria-label="Secciones del paciente">${groupedTabs.map(([key,label])=>`<div class="side-row"><a href="${groupLink(key)}" class="${patientGroup(tab,sub) === key ? "active" : ""}"><span class="side-icon">▤</span><span>${label}</span></a></div>`).join("")}</nav><a class="browse" href="${nav("patients")}">Directorio de pacientes</a></aside>`;
  const entry = ([name, key, icon]) => `<div class="side-row"><a href="${nav(key)}" class="${page === key ? "active" : ""}"><span class="side-icon">${icon}</span><span>${name}</span>${key === "engage" ? '<span class="side-badge">3</span>' : ""}</a><button type="button" class="side-options" data-inert aria-label="Más opciones para ${name}" title="Más opciones para ${name}">⋯</button></div>`;
  const entries = entriesFor(work, variant);
  const content = work === "Setup"
    ? settingsSections.map(([heading, keys]) => `<section class="side-section"><h3>${heading}</h3>${entries.filter((item) => keys.includes(item[1])).map(entry).join("")}</section>`).join("")
    : `${entries.map(entry).join("")}${work === "Home" ? `<section class="side-section side-pinned"><h3>Fijados</h3>${["invoices", "engage", "whatsapp"].filter((key) => pinned.has(key)).map((key) => entry(Object.values(groups).flatMap((group) => group.entries).find((item) => item[1] === key))).join("")}</section>` : ""}`;
  return `<aside class="side"><div class="sidehead"><h2>${groups[work].label}</h2><button type="button" class="side-collapse" data-inert aria-label="Contraer barra">☷</button></div><nav aria-label="Páginas de ${groups[work].label}">${content}</nav><button type="button" class="browse" data-all-pages>Ver todas las páginas</button></aside>`;
}
function allPages(variant, person) {
  return `<div class="all-pages-backdrop" data-close-all-pages><section class="all-pages" role="dialog" aria-modal="true" aria-label="Todas las páginas"><div class="all-pages-title"><div><h2>Todas las páginas</h2><p>Busca una página o agrégala a tus accesos fijados.</p></div><button type="button" data-close-all-pages aria-label="Cerrar">✕</button></div><input type="search" class="all-pages-search" placeholder="Buscar páginas…" aria-label="Buscar páginas…"><div class="all-pages-list">${["Home", "Care", "Clinic", "Engage", "More", "Setup"].filter((group) => group !== "Care").map((group) => group === "Clinic" && variant === "contextual-clinic" ? contextualAllPages(pinned, person) : `<section class="all-pages-group"><h3>${groups[group].label}</h3>${groups[group].entries.map(([name, key]) => `<div class="all-pages-row" data-page-name="${name.toLocaleLowerCase("es")}"><a href="${nav(key)}">${name}</a><button type="button" data-pin="${key}" aria-label="${pinned.has(key) ? "Desfijar" : "Fijar"} ${name}" aria-pressed="${pinned.has(key)}">${pinned.has(key) ? "●" : "○"}</button></div>`).join("")}</section>`).join("")}</div><button type="button" class="btn" data-close-all-pages>Cerrar</button></section></div>`;
}
export function start(variant = "baseline") {
  if (variant !== "baseline" && variant !== "patient-workspace" && variant !== "contextual-clinic" && !location.hash) history.replaceState(null, "", nav("patients", "Summary", true));
  let selectedPatient = null;
  let headerObserver = null;
  const render = () => {
    const query = params();
    const page = query.get("page") || "schedule";
    const person = query.get("patient");
    if (page === "patients") selectedPatient = person === patientId ? patientId : null;
    const tab = query.get("tab") || (variant === "contextual-clinic" && page === "services" ? "Services" : page === "patients" && person === patientId ? "Summary" : pageTabs[page]?.[0] || "");
    const sub = query.get("sub") || (tab === "Dental chart" ? "Enter" : tab === "Treatments" ? "Plans" : "");
    const work = workspace(page, variant, person);
    document.querySelector("#app").innerHTML = `<div class="shell${variant === "dense" || variant === "care-grouped" || variant === "patient-workspace" ? " dense-variant" : ""}${variant === "care-grouped" || variant === "patient-workspace" ? " organization-variant" : ""}${variant === "contextual-clinic" ? " contextual-variant dense-variant" : ""}"><header class="top"><button type="button" data-inert aria-label="Menú">☷</button><button type="button" id="back" aria-label="Atrás">←</button><button type="button" id="forward" aria-label="Adelante">→</button><button type="button" data-inert aria-label="Historial">◷</button><span>Dental Implant Clinic Demo</span><button class="search" type="button" data-all-pages>⌕ &nbsp; Buscar una página… &nbsp; ⌘/Ctrl K</button><button type="button" data-inert aria-label="Ayuda">ⓘ</button><button type="button" data-inert aria-label="Notificaciones">♧</button></header><div class="frame">${rail(work, variant, selectedPatient)}${sidebar(work, page, variant, tab, sub, person)}<main class="main">${contentFor(page, tab, sub, person, variant)}<div class="footnote">Prototipo navegable · Los controles de datos no guardan ni envían.</div></main></div></div><a class="compare" style="bottom:70px" href="../" target="_top">← Galería</a><a class="compare" href="${variant === "care" ? "../dynamic-baseline/" : variant === "care-grouped" ? "../patient-workspace/" : variant === "patient-workspace" ? "../care-grouped/" : variant === "contextual-clinic" ? "../care-dense/" : "../care-draft/"}${location.hash}">${variant === "care" ? "Ver versión actual ↗" : variant === "care-grouped" ? "Ver propuesta Paciente ↗" : variant === "patient-workspace" ? "Ver Atención agrupada ↗" : variant === "contextual-clinic" ? "Ver Atención compacta ↗" : "Ver propuesta Atención ↗"}</a><div class="scope">Prototipo · solo lectura</div>${allPages(variant, person)}`;
    document.querySelector("#back").onclick = () => history.back();
    document.querySelector("#forward").onclick = () => history.forward();
    headerObserver?.disconnect();
    if ((variant === "care-grouped" || variant === "patient-workspace") && page === "patients" && person === patientId) {
      const header = document.querySelector(".grouped-patient .dense-patient-header");
      const root = document.querySelector(".organization-variant");
      if (header?.getBoundingClientRect && root?.style) {
        const updateOffset = () => root.style.setProperty("--group-header-height", `${header.getBoundingClientRect().height}px`);
        updateOffset();
        if (typeof ResizeObserver !== "undefined") {
          headerObserver = new ResizeObserver(updateOffset);
          headerObserver.observe(header);
        }
      }
    }
    if ((variant === "care-grouped" || variant === "patient-workspace") && page === "patients" && person === patientId) { const target = patientTarget(tab,sub); if (target) requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView({block:"start"})); }
    document.querySelectorAll("[data-inert]").forEach((el) => el.addEventListener("click", (event) => event.preventDefault()));
    document.querySelectorAll("[data-all-pages]").forEach((el) => el.addEventListener("click", () => { document.querySelector(".all-pages-backdrop").classList.add("open"); document.querySelector(".all-pages-search").focus(); }));
    document.querySelectorAll("[data-close-all-pages]").forEach((el) => el.addEventListener("click", (event) => { if (event.target === el) document.querySelector(".all-pages-backdrop").classList.remove("open"); }));
    document.querySelector(".all-pages-search").addEventListener("input", (event) => { const value = event.target.value.toLocaleLowerCase("es"); document.querySelectorAll(".all-pages-row").forEach((row) => { row.hidden = !row.dataset.pageName.includes(value); }); });
    document.querySelectorAll("[data-pin]").forEach((el) => el.addEventListener("click", () => { const key = el.dataset.pin; const wasOpen = document.querySelector(".all-pages-backdrop").classList.contains("open"); if (pinned.has(key)) pinned.delete(key); else pinned.add(key); render(); if (wasOpen) document.querySelector(".all-pages-backdrop").classList.add("open"); }));
  };
  addEventListener("hashchange", render);
  addEventListener("popstate", render);
  addEventListener("keydown", (event) => { if (event.key === "Escape") document.querySelector(".all-pages-backdrop")?.classList.remove("open"); if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); document.querySelector("[data-all-pages]")?.click(); } });
  render();
}
