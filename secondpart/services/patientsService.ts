import data from '../data/patients.json';
import { NonSensitivePatient, Patient, NewPatient } from '../types';

const patients = data as Patient[];

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


export default {
  getPatients,
  addPatient,
  getPatient,
};