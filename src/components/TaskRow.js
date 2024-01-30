import React, { useState } from 'react';

const TaskRow = ({ task, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEdit = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const saveTask = () => {
    updateTask(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <div className="task-row">
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editedTask.name}
            onChange={handleEdit}
            className="task-cell"
          />
          <select
            name="status"
            value={editedTask.status}
            onChange={handleEdit}
            className="task-cell"
          >
            <option value="Working">Working</option>
            <option value="Done">Done</option>
            <option value="Stuck">Stuck</option>
          </select>
          <input
            type="date"
            name="due_date"
            value={editedTask.due_date}
            onChange={handleEdit}
            className="task-cell"
          />
          <select
            name="priority"
            value={editedTask.priority}
            onChange={handleEdit}
            className="task-cell"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button onClick={saveTask} className="task-cell">Save</button>
          <button onClick={() => setIsEditing(false)} className="task-cell">Cancel</button>
        </>
      ) : (
        <>
          <div className="task-cell" onClick={() => setIsEditing(true)}>{task.name}</div>
          <div className="task-cell" onClick={() => setIsEditing(true)}>{task.status}</div>
          <div className="task-cell" onClick={() => setIsEditing(true)}>{task.due_date}</div>
          <div className="task-cell" onClick={() => setIsEditing(true)}>{task.priority}</div>
        </>
      )}
    </div>
  );
};

export default TaskRow;
