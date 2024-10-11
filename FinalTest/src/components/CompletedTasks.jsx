import React from 'react';

const CompletedTasks = ({ tasks, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li 
          key={task.id} 
          className={`task-list-item completed`}
        >
          <input 
            type="checkbox" 
            checked={task.completed} 
            readOnly
          />
          <label>{task.name}</label>
          <button 
            className="delete-task-button" 
            onClick={() => deleteTask(task.id)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CompletedTasks;
