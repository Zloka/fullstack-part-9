import React from 'react';
import { Icon } from 'semantic-ui-react';
import { HealthCheckEntry } from '../types';

const HealthCheckEntryDetails: React.FC<{ entry: HealthCheckEntry }> = ({ entry }) => {
  return (
    <div className="item">
      <Icon class="ui avatar image" name="hospital symbol" />
      <div className="content">
        <div className="header">{entry.date}</div>
        <div className="description">{entry.description}</div>
      </div>
    </div>
  );
};

export default HealthCheckEntryDetails;