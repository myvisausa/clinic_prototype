import { providers } from "../../data/schedule/captured.js";

const modes = [["day","Día"],["week","Semana"],["month","Mes"],["agenda","Agenda"]];
const weekdays = ["lun","mar","mié","jue","vie","sáb"];
export function calendar(view = "week") {
  const selector = `<div class="schedule-calendar-selectors">${["Mi Calendario",...providers.map(p=>p[0])].map((name,i)=>`<button class="${i===0 ? "active" : ""}" type="button" data-inert>${name}</button>`).join("")}</div>`;
  let content;
  if(view === "agenda") content = `<div class="schedule-agenda-empty">No hay eventos para mostrar</div>`;
  else if(view === "month") content = `<div class="schedule-calendar-month">${weekdays.map(d=>`<b>${d}</b>`).join("")}${[31,...Array.from({length:30},(_,i)=>i+1),1,2,3].map(n=>`<div class="${n===19 ? "today" : ""}">${n}</div>`).join("")}</div>`;
  else content = `<div class="schedule-calendar-time"><div class="schedule-calendar-time-head">${view === "day" ? "sábado" : weekdays.map(d=>`<span>${d}</span>`).join("")}</div><div class="schedule-all-day">Todo el día</div>${Array.from({length:13},(_,i)=>`<div class="schedule-hour"><span>${i+6}</span></div>`).join("")}</div>`;
  return `<section class="schedule-calendar"><div class="schedule-calendar-toolbar"><button type="button" data-inert>Hoy</button><span class="arrows">‹　 ›</span><strong>${view === "month" ? "septiembre de 2026" : "19 de septiembre de 2026"}</strong><nav>${modes.map(([key,label])=>`<a class="${view===key ? "active" : ""}" href="#page=schedule&tab=Calendar&view=${key}">${label}</a>`).join("")}</nav><button type="button" data-inert>▧　Bloquear horario</button><button type="button" data-inert>Nuevo Evento</button></div>${selector}${content}</section>`;
}
