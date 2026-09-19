import { nav } from "../routes.js";
import { asset } from "../fixture.js";
import { contacts, dashboardRows } from "../data/workspaces/people.js";
import { inbox, conversationList } from "../widgets/workspaces/inbox.js";

const inert = (label, cls = "") => `<button type="button" data-inert class="ws-btn ${cls}" title="Vista de demostración: acción no disponible">${label}</button>`;
const link = (label, key) => `<a class="ws-btn" href="${nav(key)}">${label}</a>`;
const wrap = (content, cls = "") => `<div class="ws ${cls}">${content}</div>`;

function home() {
  const metrics = [["Citas hoy","15","schedule"],["Sin confirmar","4","schedule"],["En consultorio","6","schedule"],["Mensajes","3+","engage"],["Cobrado hoy","—","invoices"]];
  return wrap(`<div class="ws-home-head"><div><h1>Buenas noches, Dental 👋</h1><p>Sábado, 19 de sept de 2026</p></div><div class="ws-metrics">${metrics.map(([name,value,key]) => `<a href="${nav(key)}"><span>${name}</span><strong>${value}</strong></a>`).join("")}</div><div class="ws-quick"><b>Acciones rápidas</b><div>${link("✚ Cita","schedule")}${inert("✅ Marcar llegada")}${link("💳 Cobrar","invoices")}${link("⛔ Bloquear","schedule")}${link("🖨️ Hoja","schedule")}</div></div></div><div class="ws-home-body"><section class="ws-home-inbox"><h2>Bandeja</h2>${conversationList()}<p class="ws-error">No se pudieron cargar algunas conversaciones.</p>${inert("Reintentar carga")}<a href="${nav("engage")}">Abrir bandeja →</a></section><section class="ws-day"><div class="ws-day-doctors"><select aria-label="Doctores"><option>Todos los doctores</option></select><div>${["Isabel Quintero　Ortodoncia","Natalia Vélez　Periodoncia","Mateo Beltrán　Fisioterapia","Santiago Duque　Rehabilitación oral"].map(x=>`<span>${x}</span>`).join("")}</div></div><table><thead><tr>${["Hora","Hist.","Paciente","Teléfono","Entidad","Est","Dr","T","Llega","Entra","Sale"].map(x=>`<th>${x}</th>`).join("")}</tr></thead><tbody>${dashboardRows.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join("")}</tr>`).join("")}</tbody></table></section></div>`, "ws-home");
}
function contactPage() {
  const heads = ["","Nombre","Apellido","Tipo","Prioridad","Teléfono","Correo electrónico","Pago","Asignado a","Fecha de creación","Última revisión","Último mensaje","País","Tamaño del grupo","Destacado","Archivados",""];
  return wrap(`<div class="ws-contact-tools">${inert("⌕ Buscar")}${inert("▥ Columnas")}${inert("▽ Filtros")}<select aria-label="Orden"><option>Orden predeterminado</option></select>${inert("Mostrar contactos archivados")}${inert("Restablecer")}</div><div class="ws-contact-table"><table><thead><tr>${heads.map((x,i)=>`<th>${i===0?'<input type="checkbox" aria-label="Seleccionar todas las filas">':x}</th>`).join("")}</tr></thead><tbody>${contacts.map(([first,last,phone])=>`<tr><td><input type="checkbox" aria-label="Seleccionar fila"></td><td>${first}</td><td>${last}</td><td>CLIENT</td><td>—</td><td>${phone}</td><td>${first.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}.${last.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}@demo-dental.local</td><td>UNKNOWN</td><td></td><td>19/09/2026, 10:06</td><td></td><td></td><td></td><td></td><td>false</td><td></td><td>⋯</td></tr>`).join("")}</tbody></table></div><div class="ws-contact-footer"><span>0 de 36 fila(s) seleccionada(s).</span><select aria-label="Filas por página"><option>25 filas</option></select>${inert("Anterior")}${inert("Siguiente")}</div>`, "ws-contacts");
}
function templates(tab, sub) {
  const language = tab === "English" ? "English" : "Spanish", view = sub === "Table" ? "Table" : "Cards";
  return wrap(`<header class="ws-page-head"><div><h2>▤　Plantillas de WhatsApp</h2><p>Crea, organiza y administra las plantillas utilizadas para mensajes de WhatsApp.</p></div><div>${inert("⟳ Sincronizar")}${inert("Crear plantilla")}</div></header><div class="ws-template-nav"><nav role="tablist">${[["English","Inglés"],["Spanish","Español"]].map(([key,label])=>`<a role="tab" aria-selected="${language===key}" class="${language===key?'active':''}" href="${nav("message-templates",key,false,view)}">${label}</a>`).join("")}</nav><div>${[["Cards","▦ Tarjetas"],["Table","☷ Tabla"]].map(([key,label])=>`<a class="ws-btn ${view===key?'active':''}" href="${nav("message-templates",language,false,key)}">${label}</a>`).join("")}</div></div><div class="ws-template-empty" role="status">No hay plantillas disponibles para el idioma seleccionado.</div>`, "ws-templates");
}
function whatsapp() {
  return wrap(`<div class="ws-note">Paso 1: Agrega tus líneas telefónicas. Paso 2: Conéctalas. Paso 3: Establece líneas predeterminadas para tu equipo.</div><section class="ws-box"><header><div><h2>♧　Líneas</h2><p>Tus números de WhatsApp. Conecta una línea para empezar a enviar mensajes.</p></div><div><b>0 líneas</b> ${inert("Agregar Línea")}</div></header><div class="ws-api-error" role="alert">Something went wrong. Please try again.</div></section><section class="ws-box ws-half"><header><div><h2>♙　Predeterminados de Usuario</h2><p>Elige qué línea telefónica usa cada miembro del equipo por defecto.</p></div></header><div class="ws-api-error" role="alert">Something went wrong. Please try again.</div></section>`, "ws-whatsapp");
}
function forms() {
  return wrap(`<header class="ws-page-head"><div><h2>Formularios</h2><p>Crea formularios que tu equipo y tus clientes completan.</p></div>${inert("Nuevo Formulario","primary")}</header><div class="ws-empty"><div class="ws-empty-icon">▤</div><h3>Aún no hay formularios</h3><p>Crea tu primer formulario para comenzar</p>${inert("Crear Formulario","primary")}</div>`, "ws-forms");
}
function library(tab) {
  const options = [["All","Todos"],["Brand","Marca"],["Marketing","Marketing"],["Promotional","Promocional"],["Documents","Documentos"],["Stickers","Stickers"]];
  const selected = options.some(([key])=>key===tab) ? tab : "All", hasAsset = selected==="All" || selected==="Brand";
  return wrap(`<header class="ws-library-head"><h1>Biblioteca de medios</h1>${inert("↥ Subir","primary")}</header><div class="ws-drop" role="button" tabindex="0" aria-label="Arrastra y suelta archivos aqui o haz clic para buscarlos"><span>↥</span><b>Arrastra y suelta archivos aqui o haz clic para buscarlos</b></div><div class="ws-library-tools"><nav>${options.map(([key,label])=>`<a href="${nav("library",key)}" class="ws-btn ${selected===key?'active':''}">${label}</a>`).join("")}</nav><input aria-label="Buscar por nombre" placeholder="Buscar por nombre"></div>${hasAsset ? `<article class="ws-asset"><div class="ws-asset-preview"><img src="${asset("ap-estudio-logo.webp")}" alt="Asset a7e0d3b1-4c25-4f8a-9e61-2b0d8f5c1a96"></div><b>Asset a7e0d3b1-4c25-4f8a-9e61-2b0d8f5c1a96</b><small>Subido: Sep 19, 2026</small><dl><div><dt>Relación de aspecto</dt><dd>--</dd></div><div><dt>Tamaño de archivo</dt><dd>--</dd></div></dl>${inert("Ver")}</article>` : `<div class="ws-empty"><div class="ws-empty-icon">▧</div><h3>Todavía no hay activos</h3><p>Sube un archivo para que quede disponible aquí y puedas reutilizarlo.</p>${inert("Subir archivo","primary")}</div>`}`, "ws-library");
}
export function landing(kind, tab = "", sub = "") {
  if (kind==="home") return home();
  if (kind==="contacts") return contactPage();
  if (kind==="engage") return inbox(tab);
  if (kind==="message-templates") return templates(tab,sub);
  if (kind==="whatsapp") return whatsapp();
  if (kind==="forms") return forms();
  if (kind==="library") return library(tab);
  return "";
}
