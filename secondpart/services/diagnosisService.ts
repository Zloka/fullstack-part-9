import diagnoses from '../data/diagnoses.json';
import { Diagnosis } from '../types';

const getDiagnoses = (): Diagnosis[] => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return diagnoses;
};


export default {
  getDiagnoses,
};