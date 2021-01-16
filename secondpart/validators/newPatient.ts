import { NewPatient } from "../types";

const newPatientValidator = (data: {[key: string]: unknown}): data is NewPatient => {
  const nameValid = typeof data.name === 'string' && data.name.length > 0;
  const genderValid = data.gender === 'male' || data.gender === 'female' || data.gender === 'other';
  const occupationValid = typeof data.occupation === 'string' && data.occupation.length > 0;
  const ssnValid = typeof data.ssn === 'string' && data.ssn.length > 0;
  const dateOfBirthValid = typeof data.ssn === 'string' && data.ssn.length === 10;

  return (
    nameValid && genderValid && occupationValid && ssnValid && dateOfBirthValid
  );
};

export {
  newPatientValidator
};