import patients from '../data/patients';
import { NonSensitivePatient, Patient, NewPatient, Entry } from '../types';

const getPatients = (): NonSensitivePatient[] => {
  const nonSensitivePatients: NonSensitivePatient[] = patients.map(patient => {
    const { id, name, gender, occupation, dateOfBirth } = patient;
    return { id, name, gender, occupation, dateOfBirth, entries: [] };
  });

  return nonSensitivePatients;
};

const addPatient = (newPatient: NewPatient): Patient => {
  const patient: Patient = {
    ...newPatient,
    id: String(patients.length),
  };

  patients.push(patient);
  return patient;
};

const getPatient = (patientId: string): Patient | undefined => {
  const potentialPatient = patients.find(patient => patient.id === patientId);

  return potentialPatient;
};

const addEntry = (patientId: string, entry: Entry): Patient | undefined => {
  const potentialPatient = patients.find(patient => patient.id === patientId);
  if (potentialPatient) {
    potentialPatient.entries = potentialPatient.entries.concat(entry);
  }

  return potentialPatient;
};


export default {
  addEntry,
  getPatients,
  addPatient,
  getPatient,
};