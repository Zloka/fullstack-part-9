import data from '../data/patients.json';
import { NonSensitivePatient, Patient } from '../types';

const patients = data as Patient[];

const getPatients = (): NonSensitivePatient[] => {
  const nonSensitivePatients: NonSensitivePatient[] = patients.map(patient => {
    const { id, name, gender, occupation, dateOfBirth } = patient;
    return { id, name, gender, occupation, dateOfBirth };
  });

  return nonSensitivePatients;
};


export default {
  getPatients,
};