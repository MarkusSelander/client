import React, { useState, useEffect } from 'react';
import Task from './Task';
import AddTask from './AddTask';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3001/tasks');
      const data = await response.json();
      setTasks(data.data); // Assuming your backend sends the tasks in a 'data' field
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  return (
    <div>
      <AddTask fetchTasks={fetchTasks} />
      {tasks.map((task) => (
        <Task key={task.id} task={task} fetchTasks={fetchTasks} />
      ))}
    </div>
  );
};

export default TaskList;
