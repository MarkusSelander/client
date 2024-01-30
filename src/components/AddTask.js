import React, { useState } from 'react';

const AddTask = ({ fetchTasks }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskName) return;

    try {
      const response = await fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: taskName,
          status: 'Pending', // Set default status for new tasks
          due_date: null, // No due date by default
          priority: 'Medium', // Set default priority for new tasks
        }),
      });
      if (response.ok) {
        setTaskName('');
        fetchTasks();
      } else {
        throw new Error('Error creating task');
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
