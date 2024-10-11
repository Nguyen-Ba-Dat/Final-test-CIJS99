import React from 'react';

const ActiveTasks = ({ tasks, toggleTaskCompletion }) => {
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

export default ActiveTasks;
