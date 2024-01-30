import React, { useState } from 'react';

const Task = ({ task, fetchTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEditChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    // PUT request to backend
    try {
      const response = await fetch(`http://localhost:3001/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedTask),
      });
      if (response.ok) {
        setIsEditing(false);
        fetchTasks();
      } else {
        throw new Error('Error updating task');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (isEditing) {
    return (
      <form onSubmit={handleEditSubmit}>
        <input 
          type="text" 
          name="name" 
          value={editedTask.name} 
          onChange={handleEditChange} 
        />
        {/* Include other fields like status, due_date, priority */}
        <button type="submit">Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </form>
    );
  }

  return (
    <div>
      <span>{task.name}</span>
      {/* Display other task details */}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      {/* Include Delete button */}
    </div>
  );
};

export default Task;
