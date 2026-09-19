import { adminPage, adminTable, action, heading, status } from "../widgets/clinical-admin/primitives.js";
import { serviceCategories, serviceRows } from "../data/clinical-admin/captured.js";

function categories() {
  return heading("Categorías", "Categorías dentales compartidas y filas del consultorio que quedaron de antes de la lista compartida.") + adminTable(["Nombre", "Orden", "Categoría"], serviceCategories.map((name, index) => [name, (index + 1) * 10, "Compartidas"]));
}
function servicesContent() {
  return heading("Servicios", "Ítems con precio que agregas a facturas y planes de tratamiento.", action("Agregar desde plantillas") + action("Importar") + action("Exportar hoja de cálculo") + action("Nuevo servicio", true)) + `<div class="ca-toolbar"><input aria-label="Buscar servicios…" placeholder="Buscar servicios…"></div>` + adminTable(["Nombre", "Código de procedimiento (CUPS)", "Categoría", "Precio", "Servicio REPS", ""], serviceRows.map((row) => [...row, action("Editar")]));
}
function offerings() {
  return heading("Paquetes", "Paquetes con precio formados por servicios. El total de los componentes debe coincidir con el precio del paquete.", action("Nuevo paquete", true)) + status("Aún no hay paquetes.");
}
export function services(tab = "Categories") {
  const content = { Categories: categories, Services: servicesContent, Offerings: offerings }[tab]?.() ?? categories();
  return adminPage("services", "Servicios y precios", tab, `<section class="ca-card">${content}</section>`);
}
