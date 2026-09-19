import { teamResources } from "../../data/schedule/captured.js";

export function teamSchedule(view) {
  const modes = [["day","Vista diaria"],["week","Vista semanal"],["month","Vista mensual"]];
  const hours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm"];
  const days = ["Sun 9/13","Mon 9/14","Tue 9/15","Wed 9/16","Thu 9/17","Fri 9/18","Sat 9/19"];
  return `<section class="schedule-team"><div class="schedule-team-toolbar"><div class="schedule-team-date">‹ <strong>Sat 19 Sep</strong> ›</div><input placeholder="Buscar..." aria-label="Buscar recursos"><nav>${modes.map(([key,label])=>`<a class="${view === key ? "active" : ""}" href="#page=schedule&tab=Team%20schedule&view=${key}">${label}</a>`).join("")}</nav></div><div class="schedule-team-grid"><div class="schedule-team-resources"><div class="schedule-team-search"><input placeholder="Buscar..." aria-label="Buscar equipo"></div>${teamResources.map(name=>`<div class="schedule-team-resource">${name}</div>`).join("")}</div><div class="schedule-team-timeline"><div class="schedule-team-week">${days.map(d=>`<b>${d}</b>`).join("")}</div><div class="schedule-team-hours">${(view === "month" ? days : [...hours, ...hours]).map(h=>`<b>${h}</b>`).join("")}</div>${teamResources.map(()=>`<div class="schedule-team-track">${(view === "month" ? days : [...hours,...hours]).map(()=>`<span></span>`).join("")}</div>`).join("")}</div></div></section>`;
}
