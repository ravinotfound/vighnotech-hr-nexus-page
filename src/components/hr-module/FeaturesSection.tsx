
import React from 'react';
import { 
  Users, UserPlus, ActivitySquare, Clock, PieChart, Shield 
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';

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

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;
  
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-br from-white to-gray-50">
      <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange" />
      <CardContent className="p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 flex items-center justify-center">
            <Icon className="h-7 w-7 text-brand-orange" />
          </div>
          <span className="text-xs font-semibold text-gray-400">0{index + 1}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            Comprehensive HR Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Our integrated platform offers all the tools you need to manage your workforce efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
