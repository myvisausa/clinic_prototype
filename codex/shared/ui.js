export const button = (label, primary = false) =>
  `<button type="button" class="btn ${primary ? "primary" : ""}" data-inert title="Static prototype: this action does not save or submit">${label}</button>`;
export const field = (name, value) =>
  `<div class="field"><b>${name}</b><span>${value}</span></div>`;
export const table = (heads, rows) =>
  `<div class="tablewrap"><table><thead><tr>${heads.map((x) => `<th>${x}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const tabLabels = {
  "Summary": "Resumen", "Dental chart": "Odontograma", "Perio": "Periodoncia", "Notes": "Notas", "Treatments": "Tratamientos", "Prescriptions": "Recetas", "Documents": "Documentos", "Account": "Cuenta",
  "Day sheet": "Hoja del día", "Team schedule": "Agenda de equipo", "Calendar": "Calendario",
  "Enter": "Registrar", "Progress notes": "Notas de evolución", "Tooth initials": "Iniciales dentales", "Plans": "Planes", "Estimates": "Presupuestos",
  "Codes": "Códigos", "Formulas": "Fórmulas", "Priorities": "Prioridades", "Prognoses": "Pronósticos",
  "Clinic": "Consultorio", "Providers": "Profesionales", "Appointment types": "Tipos de cita", "Chart preferences": "Preferencias del odontograma",
  "Categories": "Categorías", "Services": "Servicios", "Offerings": "Ofertas",
  "Spanish": "Español", "English": "Inglés", "Cards": "Tarjetas", "Table": "Tabla", "All": "Todos", "Brand": "Marca", "Marketing": "Marketing", "Promotional": "Promocional", "Stickers": "Stickers",
  "WhatsApp API": "API de WhatsApp", "Contact": "Contacto", "User": "Usuario", "Products": "Productos", "Rules": "Reglas", "Groups": "Grupos", "Promos": "Promociones", "Assignment": "Asignación", "Chatbot": "Chatbot",
};
export const tabs = (items, active, base, cls = "tabs", key = "tab") =>
  `<nav class="${cls}" aria-label="Pestañas de página">${items.map((t) => `<a href="${base}&${key}=${encodeURIComponent(t)}" class="${t === active ? "active" : ""}">${tabLabels[t] || t}</a>`).join("")}</nav>`;
export const page = (title, body, subtitle = "") =>
  `<div class="page">${title ? `<h1>${title}</h1>` : ""}${subtitle ? `<p class="muted">${subtitle}</p>` : ""}${body}</div>`;
