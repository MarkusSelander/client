import React from 'react';

const StatusIndicator = ({ status }) => {
  const statusClass = `status-indicator ${status.toLowerCase()}`;
  return (
    <div className={statusClass}>{status}</div>
  );
};

export default StatusIndicator;
