import React from 'react';

const AllTasks = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li 
          key={task.id} 
          className={`task-list-item ${task.completed ? 'completed' : ''}`}
        >
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <label>{task.name}</label>
        </li>
      ))}
    </ul>
  );
};

export default AllTasks;
