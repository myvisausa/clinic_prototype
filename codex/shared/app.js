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

const groups = {
  Home: { label: "Inicio", icon: "⌂", entries: [["Resumen", "home", "⌂"], ["Contactos", "contacts", "♧"]] },
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
const destination = { Home: "home", Care: "schedule", Clinic: "reference", Engage: "engage", Setup: "get-started" };
const settingsSections = [["Primeros pasos", ["get-started"]], ["Cuenta", ["profile", "organization", "tags", "task-templates"]], ["Finanzas", ["fiscal", "prices"]], ["Equipo", ["team", "sales-goals"]], ["Integraciones", ["integrations"]], ["Legal", ["legal"]], ["Automatización", ["automation"]]];

function workspace(page, variant) {
  if (settingsPages.has(page)) return "Setup";
  if (page === "library") return "More";
  if (groups.Engage.entries.some((entry) => entry[1] === page)) return "Engage";
  if (groups.Home.entries.some((entry) => entry[1] === page)) return "Home";
  if ((variant === "care" || variant === "dense") && carePages.has(page)) return "Care";
  return "Clinic";
}
function entriesFor(work, variant) {
  if (work === "Clinic" && (variant === "care" || variant === "dense")) return groups.Clinic.entries.slice(2);
  return groups[work].entries;
}
function rail(work, variant) {
  const labels = (variant === "care" || variant === "dense") ? ["Home", "Care", "Clinic", "Engage", "More"] : ["Home", "Clinic", "Engage", "More"];
  const link = (key) => key === "More" ? `<button type="button" data-all-pages aria-label="Más"><span class="ico">${groups[key].icon}</span><span>Más</span></button>` : `<a href="${nav(key === "Clinic" && variant === "baseline" ? "schedule" : destination[key])}" class="${work === key ? "active" : ""}"><span class="ico">${groups[key].icon}</span>${key === "Home" || key === "Engage" ? '<span class="badge">3</span>' : ""}<span>${groups[key].label}</span></a>`;
  return `<nav class="rail" aria-label="Navegación de la aplicación"><a class="logo" href="${nav("organization")}"><img src="${asset("ap-estudio-logo.webp")}" alt="Dental Implant Clinic Demo"></a>${labels.map(link).join("")}<div class="bottom">${link("Setup")}<button type="button" data-inert aria-label="Perfil"><span class="ico">◉</span>Perfil</button></div></nav>`;
}
function contentFor(page, tab, sub, person, variant) {
  if (page === "patients" && person === patientId) return patient(tab, sub, variant);
  switch (page) {
    case "schedule": return schedule(tab, sub, variant);
    case "patients": return directory(variant);
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
function sidebar(work, page, variant) {
  const entry = ([name, key, icon]) => `<div class="side-row"><a href="${nav(key)}" class="${page === key ? "active" : ""}"><span class="side-icon">${icon}</span><span>${name}</span>${key === "engage" ? '<span class="side-badge">3</span>' : ""}</a><button type="button" class="side-options" data-inert aria-label="Más opciones para ${name}" title="Más opciones para ${name}">⋯</button></div>`;
  const entries = entriesFor(work, variant);
  const content = work === "Setup"
    ? settingsSections.map(([heading, keys]) => `<section class="side-section"><h3>${heading}</h3>${entries.filter((item) => keys.includes(item[1])).map(entry).join("")}</section>`).join("")
    : `${entries.map(entry).join("")}${work === "Home" ? `<section class="side-section side-pinned"><h3>Fijados</h3>${["invoices", "engage", "whatsapp"].filter((key) => pinned.has(key)).map((key) => entry(Object.values(groups).flatMap((group) => group.entries).find((item) => item[1] === key))).join("")}</section>` : ""}`;
  return `<aside class="side"><div class="sidehead"><h2>${groups[work].label}</h2><button type="button" class="side-collapse" data-inert aria-label="Contraer barra">☷</button></div><nav aria-label="Páginas de ${groups[work].label}">${content}</nav><button type="button" class="browse" data-all-pages>Ver todas las páginas</button></aside>`;
}
function allPages() {
  return `<div class="all-pages-backdrop" data-close-all-pages><section class="all-pages" role="dialog" aria-modal="true" aria-label="Todas las páginas"><div class="all-pages-title"><div><h2>Todas las páginas</h2><p>Busca una página o agrégala a tus accesos fijados.</p></div><button type="button" data-close-all-pages aria-label="Cerrar">✕</button></div><input type="search" class="all-pages-search" placeholder="Buscar páginas…" aria-label="Buscar páginas…"><div class="all-pages-list">${["Home", "Care", "Clinic", "Engage", "More", "Setup"].filter((group) => group !== "Care").map((group) => `<section class="all-pages-group"><h3>${groups[group].label}</h3>${groups[group].entries.map(([name, key]) => `<div class="all-pages-row" data-page-name="${name.toLocaleLowerCase("es")}"><a href="${nav(key)}">${name}</a><button type="button" data-pin="${key}" aria-label="${pinned.has(key) ? "Desfijar" : "Fijar"} ${name}" aria-pressed="${pinned.has(key)}">${pinned.has(key) ? "●" : "○"}</button></div>`).join("")}</section>`).join("")}</div><button type="button" class="btn" data-close-all-pages>Cerrar</button></section></div>`;
}
export function start(variant = "baseline") {
  if ((variant === "care" || variant === "dense") && !location.hash) history.replaceState(null, "", nav("patients", "Summary", true));
  const render = () => {
    const query = params();
    const page = query.get("page") || "schedule";
    const person = query.get("patient");
    const tab = query.get("tab") || (page === "patients" && person === patientId ? "Summary" : pageTabs[page]?.[0] || "");
    const sub = query.get("sub") || (tab === "Dental chart" ? "Enter" : tab === "Treatments" ? "Plans" : "");
    const work = workspace(page, variant);
    document.querySelector("#app").innerHTML = `<div class="shell${variant === "dense" ? " dense-variant" : ""}"><header class="top"><button type="button" data-inert aria-label="Menú">☷</button><button type="button" id="back" aria-label="Atrás">←</button><button type="button" id="forward" aria-label="Adelante">→</button><button type="button" data-inert aria-label="Historial">◷</button><span>Dental Implant Clinic Demo</span><button class="search" type="button" data-all-pages>⌕ &nbsp; Buscar una página… &nbsp; ⌘/Ctrl K</button><button type="button" data-inert aria-label="Ayuda">ⓘ</button><button type="button" data-inert aria-label="Notificaciones">♧</button></header><div class="frame">${rail(work, variant)}${sidebar(work, page, variant)}<main class="main">${contentFor(page, tab, sub, person, variant)}<div class="footnote">Prototipo navegable · Los controles de datos no guardan ni envían.</div></main></div></div><a class="compare" style="bottom:70px" href="../" target="_top">← Galería</a><a class="compare" href="${variant === "care" ? "../dynamic-baseline/" : "../care-draft/"}${location.hash}">${variant === "care" ? "Ver versión actual ↗" : "Ver propuesta Atención ↗"}</a><div class="scope">Prototipo · solo lectura</div>${allPages()}`;
    document.querySelector("#back").onclick = () => history.back();
    document.querySelector("#forward").onclick = () => history.forward();
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
