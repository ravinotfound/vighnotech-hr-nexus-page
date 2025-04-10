
import React from 'react';
import { demoTabs } from './demo-data';

interface DemoTabsProps {
  activeTab: string;
  handleTabChange: (tabId: string) => void;
}

const DemoTabs: React.FC<DemoTabsProps> = ({ activeTab, handleTabChange }) => {
  return (
    <div className="flex justify-center mb-8 overflow-x-auto pb-2 no-scrollbar">
      <div className="bg-gray-100 p-1 rounded-xl">
        {demoTabs.map(tab => (
          <button 
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-4 py-3 text-sm transition-all duration-300 ${
              activeTab === tab.id 
                ? 'bg-white text-brand-orange shadow-md rounded-lg border border-gray-100' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DemoTabs;
