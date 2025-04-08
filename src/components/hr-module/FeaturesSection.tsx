
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

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;
  
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
      <div className="h-12 w-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-brand-orange" />
      </div>
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive HR Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Our integrated platform offers all the tools you need to manage your workforce efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
