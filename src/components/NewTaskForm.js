import React, { useState } from 'react';

const NewTaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask) return; // Don't add empty tasks
    addTask(newTask);
    setNewTask(''); // Clear the input after adding
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task"
        className="new-task-input"
      />
      <button type="submit" className="new-task-button">Add Task</button>
    </form>
  );
};

export default NewTaskForm;
