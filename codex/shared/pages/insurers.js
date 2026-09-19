import { adminPage, adminTable, action, heading, input, select } from "../widgets/clinical-admin/primitives.js";
import { insurerNames } from "../data/clinical-admin/captured.js";
const colors = [["Azul", "#3b82f6"], ["Verde", "#22c55e"], ["Rojo", "#ef4444"], ["Morado", "#a855f7"], ["Naranja", "#f97316"], ["Cian", "#06b6d4"], ["Índigo", "#6366f1"], ["Rosa", "#ec4899"]];
export function insurers() {
  const rows = insurerNames.map((name) => [`<div class="ca-name-cell"><strong>${name}</strong>${action("Renombrar")}</div>`, name === "PARTICULAR" ? "Particular" : "Aseguradora", '<label class="ca-switch"><input type="checkbox" role="switch" aria-label="Activo" checked><span></span></label>']);
  const form = `<section class="ca-card ca-insurer-form"><h3>Agregar aseguradora</h3><div class="ca-form-grid">${input("Nombre")}${select("Tipo de identificación", [""])}${input("Número de identificación")}${select("Tipo", ["Aseguradora", "Particular"])}</div><p>Color</p><div class="ca-swatches">${colors.map(([name, color]) => `<button type="button" aria-label="${name}" title="${name}" style="--swatch:${color}" data-inert></button>`).join("")}</div>${action("Agregar aseguradora", true)}</section>`;
  return adminPage("insurers", "Aseguradoras", "", `<section class="ca-card">${heading("Directorio")}${adminTable(["Nombre", "Tipo", "Activo"], rows)}</section>${form}`, "Aseguradoras y opciones particulares que factura la clínica. Se asigna una por paciente y por cita.");
}
