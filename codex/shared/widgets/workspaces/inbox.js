import { nav } from "../../routes.js";
const shared = [
  ["0d","Cliente","DD","María Hernández","","09:22 AM","Ok, ¿y el valor final queda en 180.000?"],
  ["0d","Cliente","GP","Ana García","","08:37 AM","Perfecto, Ana. La esperamos a las 9:00."],
  ["0d","Cliente","DD","Mateo Cruz","","Vie","Perdón, se me cruzó un viaje. ¿Hay cupo el jueves?"],
  ["1d","Lead","GP","Laura Jiménez","Google Orgánico","Jue","¿Eso incluye la corona?"],
  ["11d","Lead","GP","Manuela Ospina","Google Pagado","Mié","Si quiere, le reservamos un cupo el martes."]
];
const valentina = time => ["5d","Lead","GP","Valentina Acosta","Referencia",time,"Sí, mañana a las 15:00. Confirmado."];
const duarte = ["0d","Cliente","DD","Valentina Duarte","","09:37 AM","Claro. Cuando venga dejamos registrada la abonación en caja."];
const sofia = ["0d","Cliente","GP","Sofía Pérez","","Vie","Claro. Queda presentado; avísenos cuando decida."];
export const homeConversations = [valentina("09:52 AM"),duarte,shared[0],shared[1],sofia,...shared.slice(2)];
export const inboxConversations = [valentina("02:55 PM"),...shared.slice(0,4),
  ["0d","Cliente","","Andrés Flores","","","Sin conversación"],
  ["0d","Cliente","","Nicolás Gutierrez","","","Sin conversación"],
  ["14d","Lead","DD","Rafael Cifuentes","Cliente Existente","","Sin conversación"],
  ["0d","Cliente","","Felipe Ramírez","","","Sin conversación"],
  ["0d","Cliente","","Mariana Morales","","","Sin conversación"],
  ["0d","Cliente","","Adriana Mora","","","Sin conversación"]];
export const recentConversations = [duarte,sofia,shared[4]];
export function conversationList(items = homeConversations) {
  return items.map(([age, type, initials, name, source, time, preview], i) => `<a class="ws-conversation ${i<3?'highlight':''}" href="${nav("engage")}"><span class="ws-age">${age}</span><span class="ws-kind">${type}</span><strong>${name}</strong><time>${time}</time><span class="ws-avatar">${initials}</span><span class="ws-preview">${preview==="Sin conversación" ? preview : `✓✓ DEMO · ${preview}`}</span>${source ? `<small>${source}</small>` : ""}</a>`).join("");
}
const inert = (label, cls = "") => `<button type="button" data-inert class="ws-btn ${cls}" title="Vista de demostración: acción no disponible">${label}</button>`;
export function inbox(tab = "") {
  const channel = tab === "WhatsApp API" ? tab : "WhatsApp";
  return `<div class="ws ws-inbox"><aside class="ws-inbox-list"><div class="ws-inbox-controls"><div>${inert("Buscar en todos (36)")} <small>Orden:</small> <select aria-label="Orden"><option>Último mensaje</option></select></div><div><input placeholder="Buscar..." aria-label="Buscar"> ${inert("Todo el tiempo")} ${inert("Avanzado")}</div><div>${inert("Todas las etapas")} ${inert("Todas las etiquetas")}</div><div class="ws-chiprow">${["Todos (36)","Leads (6)","Clientes (30)","Orden de prioridad (4)","Nuevo (2)"].map((x,i)=>inert(x,i===0?"active":"")).join("")}</div><div class="ws-chiprow">${["Incluir bot","Gestionar hoy","Necesita respuesta","Nuevo chat"].map(inert).join("")}</div></div>${conversationList(inboxConversations)}<h4>Actualizados recientemente</h4>${conversationList(recentConversations)}<p class="ws-error">No se pudieron cargar algunas conversaciones. ${inert("Reintentar carga")}</p></aside><section class="ws-chat"><div class="ws-chat-head"><div><small>Contacto</small><b>◉ Valentina Acosta</b><small>+57300991003</small><span>⚠ Record.　♧ Silenciar</span></div><div><small>Asignación</small><b>Gabriela Patiño</b><small>Fuente: Referencia</small><span>Agregar etiqueta</span></div><div><small>Canal</small><b>Estado　☆ ✉</b><small>Línea de envío</small><span>Chatbot　inactivo</span></div><div><small>Ciclo de vida</small><b>Ciclo sin definir</b><small>Prioridad　Sin puntaje</small></div></div><div class="ws-chat-messages"><div class="ws-date">mié, 16 sept 2026</div><p>DEMO · Me escribieron por el recordatorio. Quiero agendar valoración.<small>01:30 PM</small></p><p class="sent">DEMO · Con gusto, Valentina. Tenemos espacio esta semana.<small>02:00 PM</small></p><div class="ws-date">sáb, 19 sept 2026</div><p>DEMO · ¿Mañana en la tarde?<small>12:10 PM</small></p><p class="sent">DEMO · Sí, mañana a las 15:00. Confirmado.<small>02:55 PM</small></p></div><nav class="ws-channel-tabs">${["WhatsApp API","WhatsApp"].map(x=>`<a href="${nav("engage",x)}" class="${channel===x?"active":""}">${x}</a>`).join("")}<span aria-disabled="true" title="Este contacto aún no puede recibir mensajes de Facebook (sin PSID).">Messenger</span><span aria-disabled="true" title="Este contacto aún no puede recibir mensajes de Instagram (sin IGSID).">Instagram</span></nav><div class="ws-compose"><input aria-label="Escribe un mensaje" placeholder="Escribe un mensaje" readonly><small>+1 727 509 2958</small></div></section><aside class="ws-inbox-details"><h3>Paciente</h3><p>Número de historia: —<br>Aseguradora: Ninguno<br>Aún no hay controles</p><a href="${nav("patients")}">Ver directorio de pacientes</a><h3>Recordatorio</h3><p>✓ Ayer (18 sept 2026)</p><h3>Formularios requeridos</h3><p>No hay formularios requeridos para este contacto.</p><h3>Notas</h3><p>Sin notas</p><h3>Análisis de conversación</h3><p>Aún no hay análisis de conversación</p></aside></div>`;
}
