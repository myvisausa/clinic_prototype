import { summaryAlert } from "./alert.js";
import { generalInformation } from "./general-information.js";
import { medicalBackgroundForm } from "./medical-background-form.js";
import { allergyHistory } from "./allergy-history.js";
import { medicationHistory } from "./medication-history.js";
import { conditionHistory } from "./condition-history.js";
import { appointments } from "./appointments.js";

export function summary(variant = "baseline") {
  const history = `${allergyHistory()}${medicationHistory()}${conditionHistory()}`;
  if (variant === "dense")
    return `<div class="dense-summary-grid"><section class="dense-summary-group">${allergyHistory()}</section><section class="dense-summary-group">${conditionHistory()}</section><section class="dense-summary-group">${medicationHistory()}</section><section class="dense-summary-group">${appointments()}</section></div><div class="dense-summary-details">${generalInformation()}<section class="dense-summary-background"><h2>Antecedentes</h2><p class="muted">Alergias, antecedentes médicos y odontológicos, notas generales.</p>${medicalBackgroundForm()}</section></div>`;
  if (variant === "care")
    return `${summaryAlert()}<div class="summary-overview"><section class="panel history-card">${allergyHistory()}</section>${appointments()}<section class="panel history-card">${medicationHistory()}</section><section class="panel history-card">${conditionHistory()}</section></div><div class="summary-details"><section class="panel medical"><h2>Antecedentes</h2><p class="muted">Alergias, antecedentes médicos y odontológicos, notas generales.</p>${medicalBackgroundForm()}</section>${generalInformation()}</div>`;
  return `${summaryAlert()}${generalInformation()}<section class="panel medical"><h2>Antecedentes</h2><p class="muted">Alergias, antecedentes médicos y odontológicos, notas generales.</p>${medicalBackgroundForm()}${history}</section>${appointments()}`;
}
