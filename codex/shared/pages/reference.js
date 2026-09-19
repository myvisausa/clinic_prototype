import { adminPage, adminTable, action, iconAction, heading, input, status } from "../widgets/clinical-admin/primitives.js";
import { procedureRows, formulaRows } from "../data/clinical-admin/captured.js";

function codes() {
  const rows = procedureRows.map(([code, system, condition, description, specialties, painting, area, ripsGroup]) => [
    `<strong>${code}</strong><span class="ca-badge">${system}</span>${condition ? '<span class="ca-badge">Condición</span>' : ""}`,
    description, specialties, painting, area, ripsGroup, action("Agregar servicio con precio"),
  ]);
  return heading("Códigos de procedimiento", "Se incluyen los códigos ocultos.") +
    `<div class="ca-codes-controls"><input aria-label="Buscar por código, descripción o servicio…" placeholder="Buscar por código, descripción o servicio…"><div class="ca-toolbar"><select aria-label="Especialidad"><option>Todas las especialidades</option></select><select aria-label="Sistema"><option>Todos los sistemas</option></select><label class="ca-check"><input type="checkbox"> Condiciones</label>${iconAction("Recargar", "⟳")}${action("＋ Nuevo código del consultorio", true)}</div></div>` +
    `<p class="ca-count">284 registros</p>` + adminTable(["Código", "Descripción", "Especialidades", "Pintura", "Área", "Grupo RIPS", "Acciones"], rows, "ca-codes-table");
}
function formulas() {
  return heading("Productos de fórmulas") + `<div class="ca-toolbar"><input aria-label="Buscar producto, categoría o indicación..." placeholder="Buscar producto, categoría o indicación..."><label class="ca-check"><input type="checkbox"> Incluir inactivos</label>${action("Recargar")}${action("Categoría")}${action("Producto", true)}</div><p class="ca-count">2 registros</p>` +
    adminTable(["Producto", "Categoría", "Presentación", "Indicación", "Estado", "Acciones"], formulaRows.map((row) => [...row.slice(0, 4), `<span class="ca-state">${row[4]}</span>`, `${iconAction("Editar producto", "✎")}${iconAction("Desactivar producto", "○")}`])) +
    `<div class="ca-formula-category">${heading("Categorías de fórmula")}<p class="ca-count">1 registro</p><div class="ca-category-row"><strong>DEMO · Productos ficticios</strong><span class="ca-state">Activa</span>${iconAction("Editar categoría", "✎")}${iconAction("Desactivar categoría", "○")}</div></div>`;
}
function documents() {
  return heading("Plantillas de documentos") + `<div class="ca-toolbar"><input aria-label="Buscar plantilla o categoría…" placeholder="Buscar plantilla o categoría…"><label class="ca-check"><input type="checkbox"> Incluir inactivos</label>${action("Recargar")}${action("Nueva plantilla", true)}</div><p class="ca-count">1 registro</p>` +
    adminTable(["Título de la plantilla", "Categoría de documento", "Código de plantilla", "Estado", "Acciones"], [["DEMO · Constancia de recorrido", "Demostración", "dental_demo_walkthrough", '<span class="ca-state">Activa</span>', iconAction("Editar", "✎")]]);
}
function simpleList(name, singular) {
  return heading(name) + `<div class="ca-simple-list"><h3>Agregar ${singular}</h3><div class="ca-toolbar">${input("Nombre")}${input("Orden", "1", "number")}${action(`Agregar ${singular}`, true, true)}</div></div>` + status(`Aún no hay ${name.toLowerCase()}.`);
}
export function reference(tab = "Codes") {
  const content = { Codes: codes, Formulas: formulas, Documents: documents, Priorities: () => simpleList("Prioridades", "prioridad"), Prognoses: () => simpleList("Pronósticos", "pronóstico") }[tab]?.() ?? codes();
  return adminPage("reference", "Referencia clínica", tab, content);
}
