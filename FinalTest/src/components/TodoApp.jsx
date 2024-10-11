import React, { useState } from 'react';
import TabSwitcher from './TabSwitcher';
import AllTasks from './AllTasks';
import ActiveTasks from './ActiveTasks';
import CompletedTasks from './CompletedTasks';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [currentTab, setCurrentTab] = useState('All');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), name: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const deleteAllCompletedTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const filteredTasks = () => {
    if (currentTab === 'Active') {
      return tasks.filter(task => !task.completed);
    } else if (currentTab === 'Completed') {
      return tasks.filter(task => task.completed);
    }
    return tasks;
  };

  return (
    <div className="todo-app">
      <h1>#todo</h1>

      <TabSwitcher currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {currentTab !== 'Completed' && (
        <form className="add-task-form" onSubmit={handleAddTask}>
          <input 
            type="text" 
            placeholder="add details" 
            value={newTask} 
            onChange={e => setNewTask(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      )}

      {currentTab === 'All' && (
        <AllTasks 
          tasks={tasks} 
          toggleTaskCompletion={toggleTaskCompletion} 
        />
      )}
      
      {currentTab === 'Active' && (
        <ActiveTasks 
          tasks={filteredTasks()} 
          toggleTaskCompletion={toggleTaskCompletion} 
        />
      )}
      
      {currentTab === 'Completed' && (
        <CompletedTasks 
          tasks={filteredTasks()} 
          deleteTask={deleteTask} 
        />
      )}

      {currentTab === 'Completed' && tasks.some(task => task.completed) && (
        <button className="delete-all-button" onClick={deleteAllCompletedTasks}>
          Delete all
        </button>
      )}
    </div>
  );
};

export default TodoApp;
