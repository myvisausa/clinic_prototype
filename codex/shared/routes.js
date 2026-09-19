import { patientId } from "./fixture.js";
export const patientTabs = [
  "Summary",
  "Dental chart",
  "Perio",
  "Notes",
  "Treatments",
  "Prescriptions",
  "Documents",
  "Account",
];
export const pageTabs = {
  reference: ["Codes", "Formulas", "Documents", "Priorities", "Prognoses"],
  setup: ["Clinic", "Providers", "Appointment types", "Chart preferences"],
  services: ["Categories", "Services", "Offerings"],
  schedule: ["Day sheet", "Team schedule", "Calendar"],
  "message-templates": ["Spanish", "English"],
  library: ["All", "Brand", "Marketing", "Promotional", "Documents", "Stickers"],
  engage: ["WhatsApp", "WhatsApp API"],
  "task-templates": ["Contact", "User"],
  prices: ["Products", "Rules", "Groups", "Promos"],
  automation: ["Assignment", "Chatbot"],
  Treatments: ["Plans", "Estimates"],
  "Dental chart": ["Enter", "Progress notes", "Tooth initials"],
};
export const nav = (page, tab = "", person = false, sub = "") =>
  `#page=${encodeURIComponent(page)}${person ? `&patient=${patientId}` : ""}${tab ? `&tab=${encodeURIComponent(tab)}` : ""}${sub ? `&sub=${encodeURIComponent(sub)}` : ""}`;
export const params = () => new URLSearchParams(location.hash.slice(1));
