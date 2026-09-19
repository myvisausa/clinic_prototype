export const action = (label, primary = false) => `<button type="button" data-inert title="Vista de referencia; acción no disponible" class="st-action ${primary ? 'st-primary' : ''}">${label}</button>`;
export const input = (label, value = '', type = 'text') => `<label class="st-field"><span>${label}</span><input type="${type}" value="${value}" readonly aria-label="${label}"></label>`;
export const select = (label, value) => `<label class="st-field"><span>${label}</span><select aria-label="${label}" disabled><option>${value}</option></select></label>`;
export const switcher = (label, checked = false) => `<label class="st-switch"><span>${label}</span><input type="checkbox" role="switch" ${checked ? 'checked' : ''} disabled></label>`;
export const head = (title, subtitle = '', actionMarkup = '') => `<header class="st-head"><div><h2>${title}</h2>${subtitle ? `<p>${subtitle}</p>` : ''}</div>${actionMarkup}</header>`;
export const card = (content, cls = '') => `<section class="st-card ${cls}">${content}</section>`;
export const tabs = (page, entries, active) => `<nav class="st-tabs" aria-label="Pestañas de ${page}">${entries.map(([key,label]) => `<a class="${active === key ? 'active' : ''}" href="#page=${page}&tab=${key}">${label}</a>`).join('')}</nav>`;
