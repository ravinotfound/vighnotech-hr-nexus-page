
import React from 'react';
import { 
  Users, UserPlus, ActivitySquare, Clock, PieChart, Shield 
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Core HR Management",
    description: "Centralize all employee data, documents, and records in one secure database with customizable fields and automated workflows."
  },
  {
    icon: UserPlus,
    title: "Recruitment & Onboarding",
    description: "Streamline hiring with applicant tracking, interview scheduling, and automated onboarding processes for new employees."
  },
  {
    icon: ActivitySquare,
    title: "Performance Management",
    description: "Set goals, conduct reviews, and track employee performance with customizable evaluation templates and 360° feedback."
  },
  {
    icon: Clock,
    title: "Time & Attendance",
    description: "Monitor work hours, manage schedules, and track time-off requests with automated attendance tracking and leave management."
  },
  {
    icon: PieChart,
    title: "Reporting & Analytics",
    description: "Generate insightful reports on workforce metrics with customizable dashboards and predictive HR analytics."
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Stay compliant with automated policy updates, document management, and regulatory reporting requirements."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium transition-all hover:bg-brand-orange/30 hover:scale-105 duration-300">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Comprehensive <span className="relative">
              <span className="text-brand-orange">HR Solutions</span>
              <span className="absolute bottom-1 left-0 w-full h-1 bg-brand-orange/30 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Our integrated platform offers all the tools you need to manage your workforce efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div key={index} className="group perspective-1000 transition-all duration-300 hover:-translate-y-3">
                <div className="h-full border-0 shadow-lg hover:shadow-xl hover:shadow-brand-orange/20 transition-all duration-300 bg-white overflow-hidden rounded-xl">
                  <div className="p-8 relative">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="h-14 w-14 rounded-xl bg-brand-orange/10 flex items-center justify-center transform transition-transform group-hover:rotate-12 group-hover:scale-110 group-hover:bg-brand-orange/20 duration-300">
                        <Icon className="h-7 w-7 text-brand-orange transition-all duration-300 group-hover:scale-110" />
                      </div>
                      <span className="text-4xl font-bold text-gray-100 opacity-60 transition-all duration-300 group-hover:text-brand-orange/30 group-hover:-translate-x-2">0{index + 1}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brand-orange transition-all duration-300">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">{feature.description}</p>
                    
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent"></div>
                    
                    <div className="mt-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="h-8 w-8 rounded-full bg-brand-orange/10 flex items-center justify-center mr-2 group-hover:animate-pulse">
                        <Icon className="h-4 w-4 text-brand-orange" />
                      </div>
                      <span className="text-brand-orange text-sm font-medium">Learn more</span>
                    </div>
                    
                    {/* Background glow effect */}
                    <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
