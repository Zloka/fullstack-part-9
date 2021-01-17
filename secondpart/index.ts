import express from 'express';
import cors from 'cors';
import diagnosisService from './services/diagnosisService';
import patientsService from './services/patientsService';
import { newPatientValidator } from './validators/newPatient';
import { newEntryValidator } from './validators/entry';

const app = express();
app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.get('/api/diagnosis', (_req, res) => {
  res.send(diagnosisService.getDiagnoses());
});

app.get('/api/patients', (_req, res) => {
  res.send(patientsService.getPatients());
});

app.get('/api/patients/:id', (req, res) => {
  const { id } = req.params;

  const patient = patientsService.getPatient(id);

  if (patient) {
    res.json(patient);
  } else {
    res.status(404).send("No patient by that id exists");
  }
});

app.post('/api/patients', (req, res) => {
  // This line is ignored, as we can't trust external data.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { name, gender, ssn, occupation, dateOfBirth } = req.body;
  const newPatientData = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    name, dateOfBirth, occupation, gender, ssn
  };

  if (newPatientValidator(newPatientData)) {
    const newPatient = patientsService.addPatient(newPatientData);
    res.json(newPatient);
  } else {
    res.status(400).send("Invalid parameters");
  }
});

app.post('/api/patients/:id/entries', (req, res) => {
  const { id } = req.params;
  // This line is ignored, as we can't trust external data.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { entry } = req.body;

  if (newEntryValidator(entry)) {
    const newPatient = patientsService.addEntry(id, entry);
    res.json(newPatient);
  } else {
    res.status(400).send("Invalid parameters");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});