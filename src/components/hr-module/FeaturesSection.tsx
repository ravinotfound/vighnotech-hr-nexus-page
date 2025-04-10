
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
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-gray-100 text-gray-800 text-sm font-medium transition-all hover:bg-gray-200">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Comprehensive <span className="relative">
              <span className="text-brand-orange">HR Solutions</span>
              <span className="absolute bottom-1 left-0 w-full h-1 bg-gray-100 rounded-full"></span>
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
              <div key={index} className="group perspective-1000 transition-all duration-300 hover:-translate-y-2">
                <div className="h-full border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden rounded-md">
                  <div className="p-8 relative">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="h-12 w-12 rounded-lg bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center transform transition-transform group-hover:rotate-3 duration-300">
                        <Icon className="h-6 w-6 text-brand-orange" />
                      </div>
                      <span className="text-3xl font-bold text-gray-100 opacity-60">0{index + 1}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    
                    <div className="mt-6 h-1 w-12 bg-gray-200 rounded-full transform transition-all duration-500 group-hover:w-24 group-hover:bg-brand-orange/30"></div>
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
