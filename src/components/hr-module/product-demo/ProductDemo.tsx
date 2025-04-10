
import React, { useState } from 'react';
import DemoTabs from './DemoTabs';
import DemoContent from './DemoContent';

const ProductDemo = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };
  
  return (
    <section id="demo" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            See The Platform <span className="relative">
              <span className="text-brand-orange">In Action</span>
              <span className="absolute bottom-1 left-0 w-full h-1 bg-brand-orange/20 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Experience how our HR software simplifies complex workflows and transforms your HR operations
          </p>
        </div>

        <div className="w-full">
          <DemoTabs activeTab={activeTab} handleTabChange={handleTabChange} />
          <DemoContent activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
