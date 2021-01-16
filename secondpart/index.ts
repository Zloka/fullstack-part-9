import express from 'express';
import cors from 'cors';
import diagnosisService from './services/diagnosisService';
import patientsService from './services/patientsService';

const app = express();
app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.get('/api/diagnoses', (_req, res) => {
  res.send(diagnosisService.getDiagnoses());
});

app.get('/api/patients', (_req, res) => {
  res.send(patientsService.getPatients());
});

app.post('/api/patients', (req, res) => {
  const { name, gender, ssn, occupation, dateOfBirth } = req.body;
  const newPatient = patientsService.addPatient({
    name, dateOfBirth, occupation, gender, ssn
  });
  res.json(newPatient);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});