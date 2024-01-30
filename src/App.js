import React, { useState } from 'react';
import TaskTable from './components/TaskTable';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', status: 'Working', due_date: '2024-01-28', priority: 'Low' },
    // ... other initial tasks
  ]);

  const addTask = (taskName) => {
    const newTask = {
      id: tasks.length + 1, // For simplicity, assuming no task deletions
      name: taskName,
      status: 'Pending',
      due_date: 'No due date', // Placeholder
      priority: 'Medium', // Default priority
    };
    setTasks([...tasks, newTask]);
  };

  // Function to update a task
  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskTable tasks={tasks} addTask={addTask} updateTask={updateTask} />
    </div>
  );
};

export default App;
