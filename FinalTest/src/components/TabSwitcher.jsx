import React from 'react';

const TabSwitcher = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="tab-switcher">
      <button
        onClick={() => setCurrentTab('All')}
        className={`tab-button ${currentTab === 'All' ? 'active' : ''}`}
      >
        All
      </button>
      <button
        onClick={() => setCurrentTab('Active')}
        className={`tab-button ${currentTab === 'Active' ? 'active' : ''}`}
      >
        Active
      </button>
      <button
        onClick={() => setCurrentTab('Completed')}
        className={`tab-button ${currentTab === 'Completed' ? 'active' : ''}`}
      >
        Completed
      </button>
    </div>
  );
};

export default TabSwitcher;
