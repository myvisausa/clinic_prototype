import { adminPage, action, heading, status } from "../widgets/clinical-admin/primitives.js";
export function invoices() {
  return adminPage("invoices", "Facturas clínicas", "", `<div class="ca-align-right ca-invoice-action">${action("Nueva factura", true)}</div><section class="ca-card">${heading("Facturas del paciente", "Borradores y facturas emitidas del paciente seleccionado.")}${status("<p>Seleccione un paciente para iniciar una factura.</p><p>Use Nueva factura para elegir un paciente y empezar un borrador.</p>")}</section>`);
}
