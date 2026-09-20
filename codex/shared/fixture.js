// Approved synthetic patient fixture only. No clinical API access.
export const patientId = "57d31fd8-e7d7-55a9-b9bf-3d0251b601b1";
export const patient = {
  name: "Ana García",
  email: "ana.garcia@demo-dental.local",
  phone: "573000200001",
  birth: "Mar 12, 1988",
};
export const insurers = [
  "ALLIANZ",
  "COLMEDICA",
  "COLSANITAS",
  "COOMEVA",
  "MEDPLUS",
  "PARTICULAR",
  "SEGUROS BOLIVAR",
  "SURA",
];
export const asset = (name) =>
  location.pathname.includes("/care-draft/") || location.pathname.includes("/care-dense/") || location.pathname.includes("/care-grouped/") || location.pathname.includes("/patient-workspace/") || location.pathname.includes("/contextual-clinic/")
    ? `../dynamic-baseline/assets/${name}`
    : `assets/${name}`;
