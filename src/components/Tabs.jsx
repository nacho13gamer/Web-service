import React from 'react';
import './Tabs.scss';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Home', 'Locales', 'Reseñas'];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tabs__button ${activeTab === tab ? 'tabs__button--active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;