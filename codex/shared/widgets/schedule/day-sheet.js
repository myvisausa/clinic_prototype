import { appointments, dateCounts, providers } from "../../data/schedule/captured.js";

const days = ["mar", "mié", "jue", "vie", "sáb", "dom", "lun"];
const statusDots = { Programada: "○○○○", Confirmada: "●○○○", "Llegó": "●●○○", "En atención": "●●●○", Completada: "●●●●" };
const slots = ["09:00a", "09:30a", "10:00a", "10:30a", "11:00a", "11:30a", "12:00p", "12:30p", "01:00p", "02:00p", "03:00p"];
function row(a) {
  const [time, id, name, payer, status, doctor, length, arrival = "", entered = "", out = ""] = a;
  const color = providers.find(p => p[2] === doctor)?.[3] || "#2b35a7";
  return `<tr class="${arrival ? "arrived" : ""}"><td class="schedule-chevron">›</td><td>${time}</td><td>${id}</td><td>${name}</td><td>+57 300 020${id}</td><td><span class="schedule-payer ${payer.toLowerCase()}">${payer}</span></td><td><span class="schedule-dots">${statusDots[status]}</span> ${status}</td><td><i style="background:${color}"></i>${doctor}</td><td>${length}</td><td>${arrival}</td><td>${entered}</td><td>${out}</td></tr>`;
}
export function daySheet(selectedDate = 19) {
  const date = Math.max(1, Math.min(30, selectedDate));
  const weekday = ["martes", "miércoles", "jueves", "viernes", "sábado", "domingo", "lunes"][(date - 1) % 7];
  const rows = date === 19 ? `<div class="schedule-table-scroll"><table class="schedule-day-table"><thead><tr>${["", "Hora", "Hist.", "Paciente", "Teléfono", "Entidad", "Est", "Dr", "T", "Llega", "Entra", "Sale"].map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${slots.map(time => time === "01:00p" ? `<tr class="schedule-block"><td></td><td>${time}</td><td colspan="5">Almuerzo</td><td>MB, IQ, NV</td><td>1h</td><td colspan="3"></td></tr>` : `${appointments.filter(a=>a[0]===time).map(row).join("")}${["09:00a","09:30a","10:00a","11:30a"].includes(time) ? `<tr class="schedule-empty"><td></td><td>${time}</td><td colspan="10"></td></tr>` : ""}`).join("")}</tbody></table></div>` : `<div class="schedule-uncaptured">${dateCounts[date - 1] || 0} citas en el día · El detalle de las citas no está disponible en esta captura.</div>`;
  return `<div class="schedule-day-layout"><aside class="schedule-date-rail"><header><span>‹</span><strong>sep 2026</strong><span>›</span></header><div class="schedule-dates">${dateCounts.map((count, i) => `<a class="${i + 1 === date ? "selected" : ""}" href="#page=schedule&tab=Day%20sheet&date=${i+1}"><span>${i+1} ${days[i % 7]}</span><span class="schedule-date-right">${count ? `<b>${count}</b>` : ""}<em>＋</em></span></a>`).join("")}</div></aside><section class="schedule-day-main"><div class="schedule-day-heading"><div><h1>Hoja del día</h1><p>${weekday}, ${date} de septiembre de 2026</p></div><a class="schedule-today" href="#page=schedule&tab=Day%20sheet">Hoy</a><select aria-label="Doctores"><option>Todos los doctores</option>${providers.map(p=>`<option>${p[0]}</option>`).join("")}</select><button class="schedule-primary" type="button" data-inert>Nueva cita</button></div><div class="schedule-provider-chips">${providers.map(p => `<span><i style="background:${p[3]}"></i>${p[0]} <small>${p[1]}</small></span>`).join("")}</div>${rows}</section></div>`;
}
