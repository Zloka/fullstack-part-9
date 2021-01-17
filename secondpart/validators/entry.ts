/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Entry, HealthCheckRating } from "../types";

const newEntryValidator = (data: {[key: string]: any}): data is Entry => {
  const typeValid = data.type === "OccupationalHealthcare" || data.type === "HealthCheck" || data.type === "Hospital";
  const idValid: boolean = data.id && typeof data.id === "string";
  const descriptionValid = data.description && typeof data.description === "string";
  const dateValid = data.date && typeof data.date === "string";
  const specialistValid = data.specialist && typeof data.specialist === "string";
  const diagnosisCodesValid = data.diagnosisCodes === undefined || (Array.isArray(data.diagnosisCodes) && (data.diagnosisCodes as unknown[]).every(code => typeof code === "string"));
  const healthCheckValid = data.type !== "HealthCheck" || (!isNaN(Number(data.healthCheckRating)) && ((data.healthCheckRating as number) in HealthCheckRating));
  const dischargeValid = data.type !== "Hospital" || (data.discharge && typeof data.discharge.date === "string" && typeof data.discharge.criteria === "string");
  const employerNameValid = data.type !== 'OccupationalHealthcare' || typeof data.employerName === "string";
  const sickleaveValid = data.type !== 'OccupationalHealthcare' || data.sickLeave === undefined || (typeof data.sickLeave.startDate === "string" && typeof data.sickLeave.endDate === "string");

  return typeValid && idValid && descriptionValid && dateValid && specialistValid && diagnosisCodesValid && healthCheckValid && employerNameValid && dischargeValid && sickleaveValid;
};

export {
  newEntryValidator
};