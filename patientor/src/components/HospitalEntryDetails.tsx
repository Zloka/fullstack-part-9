import React from 'react';
import { HospitalEntry } from '../types';
import { Icon } from "semantic-ui-react";

const HospitalEntryDetails: React.FC<{ entry: HospitalEntry }> = ({ entry }) => {
  return (
    <div className="item">
      <Icon className="ui avatar image" name="hospital" />
      <div className="content">
        <div className="header">{entry.date}</div>
        <div className="description">{entry.description}</div>
      </div>
    </div>
  );
};

export default HospitalEntryDetails;