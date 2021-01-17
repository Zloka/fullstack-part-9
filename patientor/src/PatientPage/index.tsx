import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiBaseUrl } from '../constants';
import { addPatient, useStateValue } from '../state';
import { Patient } from '../types';

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

  return !patient ? null : (
    <>
      <h3>{patient.name}</h3>
      <p>ssn: {patient.ssn}</p>
      <p>occupation: {patient.occupation}</p>
      <h4>entries</h4>
      {patient.entries.map(entry => {
        return (
          <div key={entry.id}>
            <p>{entry.date} {entry.description}</p>
            {entry.diagnosisCodes ? (
              <ul>
              {entry.diagnosisCodes.map(code => {
                return <li key={code}>{code}</li>;
              })}
              </ul>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default PatientPage;