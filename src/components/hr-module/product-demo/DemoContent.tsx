
import React from 'react';
import { Play, Check } from 'lucide-react';
import { demoTabs } from './demo-data';
import DemoButton from './DemoButton';

interface DemoContentProps {
  activeTab: string;
}

const DemoContent: React.FC<DemoContentProps> = ({ activeTab }) => {
  return (
    <div className="w-full">
      {demoTabs.map(tab => (
        <div 
          key={tab.id} 
          className={`mt-0 animate-fade-in ${activeTab === tab.id ? 'block' : 'hidden'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="relative rounded-xl overflow-hidden border border-gray-100 shadow-lg bg-white group hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-30 rounded-xl" />
                <img 
                  src={tab.image} 
                  alt={tab.title} 
                  className="w-full h-auto relative z-10 transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-4 right-4 z-20">
                  <DemoButton 
                    className="bg-brand-orange hover:bg-brand-orange/90 rounded-full h-14 w-14 p-0 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                  >
                    <Play className="h-6 w-6 ml-1" />
                  </DemoButton>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{tab.title}</h3>
                <p className="text-gray-600 mb-6">{tab.description}</p>
                <div className="space-y-4">
                  {tab.features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-brand-orange/20 hover:bg-brand-orange/5 transition-all duration-300"
                    >
                      <span className="mr-3 flex-shrink-0 mt-0.5">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <DemoButton className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-lg px-6 py-3 hover:translate-y-[-4px] transition-transform duration-300 w-full">
                  Schedule Live Demo
                </DemoButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DemoContent;
