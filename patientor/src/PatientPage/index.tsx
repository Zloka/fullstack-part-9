import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddEntryForm from '../components/AddEntryForm';
import EntryDetails from '../components/EntryDetails';
import { apiBaseUrl } from '../constants';
import { addPatient, setPatient, useStateValue } from '../state';
import { Entry, Patient } from '../types';

const PatientPage: React.FC = () => {
  const [{ patients }, dispatch] = useStateValue();
  const { id } = useParams<{ id: string }>();
  const patient: Patient | undefined = patients[id];

  useEffect(() => {
    if (!patient || !patient.ssn) {
      const fetchPatient = async () => {
        try {
          const { data: patientFromApi } = await axios.get<Patient>(
            `${apiBaseUrl}/patients/${id}`
          );
          dispatch(addPatient(patientFromApi));
        } catch (e) {
          console.error(e);
        }
      };
      fetchPatient();
    }
  }, [patient, id, dispatch]);

  const submitNewPatientEntry = async (entry: Entry) => {
    try {
      const { data: newPatient } = await axios.post<Patient>(
        `${apiBaseUrl}/patients/${id}/entries`,
        { entry }
      );
      dispatch(setPatient(newPatient));
    } catch (e) {
      console.error(e.response.data);
    }
  };


  return !patient ? null : (
    <>
      <h3>{patient.name}</h3>
      <p>ssn: {patient.ssn}</p>
      <p>occupation: {patient.occupation}</p>
      <h4>entries</h4>
      <div className="ui relaxed list">
        {patient.entries.map(entry => {
          return (
            <EntryDetails key={entry.id} entry={entry}/>
          );
        })}
      </div>
      <h4>add new entry</h4>
      <AddEntryForm onSubmit={(entry) => submitNewPatientEntry(entry)} />
    </>
  );
};

export default PatientPage;