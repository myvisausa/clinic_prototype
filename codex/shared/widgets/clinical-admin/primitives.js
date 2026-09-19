import { pageTabs } from "../../routes.js";

const labels = {
  Codes: "Códigos", Formulas: "Fórmulas", Documents: "Documentos", Priorities: "Prioridades", Prognoses: "Pronósticos",
  Clinic: "Consultorio", Providers: "Profesionales", "Appointment types": "Tipos de cita", "Chart preferences": "Preferencias del odontograma",
  Categories: "Categorías", Services: "Servicios", Offerings: "Paquetes",
};
export const action = (label, primary = false, disabled = false) => `<button type="button" class="ca-button${primary ? " ca-primary" : ""}" data-inert title="Prototipo visual: esta acción no guarda datos"${disabled ? " disabled" : ""}>${label}</button>`;
export const iconAction = (label, symbol = "⋯") => `<button type="button" class="ca-icon-button" aria-label="${label}" title="${label}" data-inert>${symbol}</button>`;
export const heading = (title, description = "", actions = "") => `<div class="ca-section-head"><div><h2>${title}</h2>${description ? `<p>${description}</p>` : ""}</div>${actions ? `<div class="ca-actions">${actions}</div>` : ""}</div>`;
export const adminPage = (section, title, tab, content, subtitle = "") => `<div class="page clinical-admin"><header class="ca-page-head"><h1>${title}</h1>${pageTabs[section] ? `<nav class="ca-tabs" aria-label="Pestañas de ${title}">${pageTabs[section].map((key) => `<a href="#page=${section}&tab=${encodeURIComponent(key)}" class="${key === tab ? "active" : ""}"${key === tab ? ' aria-current="page"' : ""}>${labels[key]}</a>`).join("")}</nav>` : ""}</header>${subtitle ? `<p class="ca-subtitle">${subtitle}</p>` : ""}<div class="ca-content">${content}</div></div>`;
export const adminTable = (heads, rows, className = "") => `<div class="ca-table-wrap"><table class="ca-table ${className}"><thead><tr>${heads.map((x) => `<th>${x}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
export const input = (label, value = "", type = "text") => `<label class="ca-field"><span>${label}</span><input type="${type}" aria-label="${label}" value="${value}"></label>`;
export const select = (label, options) => `<label class="ca-field"><span>${label}</span><select aria-label="${label}">${options.map((option) => `<option>${option}</option>`).join("")}</select></label>`;
export const status = (text) => `<div class="ca-status" role="status">${text}</div>`;
