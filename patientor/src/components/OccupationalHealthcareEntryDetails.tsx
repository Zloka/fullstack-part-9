import React from 'react';
import { Icon } from 'semantic-ui-react';
import { OccupationalHealthcareEntry } from '../types';

const OccupationalHealthcareEntryDetails: React.FC<{ entry: OccupationalHealthcareEntry  }> = ({ entry }) => {
  return (
    <div className="item">
      <Icon class="ui avatar image" name="stethoscope" />
      <div className="content">
        <div className="header">{entry.date} - {entry.employerName}</div>
        <div className="description">{entry.description}</div>
      </div>
    </div>
  );
};

export default OccupationalHealthcareEntryDetails;