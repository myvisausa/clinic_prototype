import { pageTabs } from "../routes.js";
import { daySheet } from "../widgets/schedule/day-sheet.js";
import { teamSchedule } from "../widgets/schedule/team-schedule.js";
import { calendar } from "../widgets/schedule/calendar.js";
import { availability } from "../widgets/schedule/availability.js";

export function schedule(tab, _sub = "", variant = "baseline") {
  const query = new URLSearchParams(location.hash.slice(1));
  const view = query.get("view") || (tab === "Team schedule" ? "day" : tab === "Calendar" ? "week" : "");
  const drawer = query.get("availability") || "";
  const labels = { "Day sheet": "Hoja del día", "Team schedule": "Horario del equipo", Calendar: "Calendario" };
  const nav = `<nav class="schedule-tabs" aria-label="Vistas de agenda">${pageTabs.schedule.map(key => `<a class="${key === tab ? "active" : ""}" href="#page=schedule&tab=${encodeURIComponent(key)}">${labels[key]}</a>`).join("")}</nav>`;
  const body = tab === "Team schedule" ? teamSchedule(view) : tab === "Calendar" ? calendar(view) : daySheet(Number(query.get("date")) || 19);
  return `<div class="page schedule-page${variant === "dense" ? " schedule-dense" : ""}">${nav}<a class="schedule-availability" href="#page=schedule&tab=${encodeURIComponent(tab)}&${view ? `view=${view}&` : ""}availability=weekly">Mi disponibilidad</a>${body}${drawer ? availability(tab, view, drawer) : ""}</div>`;
}
