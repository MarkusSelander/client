import React from 'react';
import TaskRow from './TaskRow';
import NewTaskForm from './NewTaskForm';

const TaskTable = ({ tasks, addTask, updateTask }) => {
  return (
    <div className="task-table">
      <NewTaskForm addTask={addTask} />
      <div className="task-header">
        <div className="task-header-cell">Tasks</div>
        <div className="task-header-cell">Status</div>
        <div className="task-header-cell">Due Date</div>
        <div className="task-header-cell">Priority</div>
        {/* If you have more columns, continue adding header cells here */}
      </div>
      {tasks.map(task => (
        <TaskRow key={task.id} task={task} updateTask={updateTask} />
      ))}
    </div>
  );
};

export default TaskTable;
