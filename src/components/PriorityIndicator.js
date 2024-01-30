import React from 'react';

const PriorityIndicator = ({ priority }) => {
  const priorityClass = `priority-indicator priority-${priority.toLowerCase()}`;
  return (
    <div className={priorityClass}>{priority}</div>
  );
};

export default PriorityIndicator;
