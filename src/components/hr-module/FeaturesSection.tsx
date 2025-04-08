
import React from 'react';
import { 
  Users, UserPlus, ActivitySquare, Clock, PieChart, Shield 
} from 'lucide-react';
import { Card } from "@/components/ui/card";
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Users,
    title: "Core HR Management",
    description: "Centralize all employee data, documents, and records in one secure database with customizable fields and automated workflows.",
    color: "from-orange-400/20 to-red-400/20",
    hoverColor: "group-hover:from-orange-400/30 group-hover:to-red-400/30"
  },
  {
    icon: UserPlus,
    title: "Recruitment & Onboarding",
    description: "Streamline hiring with applicant tracking, interview scheduling, and automated onboarding processes for new employees.",
    color: "from-green-400/20 to-emerald-400/20",
    hoverColor: "group-hover:from-green-400/30 group-hover:to-emerald-400/30"
  },
  {
    icon: ActivitySquare,
    title: "Performance Management",
    description: "Set goals, conduct reviews, and track employee performance with customizable evaluation templates and 360° feedback.",
    color: "from-blue-400/20 to-indigo-400/20",
    hoverColor: "group-hover:from-blue-400/30 group-hover:to-indigo-400/30"
  },
  {
    icon: Clock,
    title: "Time & Attendance",
    description: "Monitor work hours, manage schedules, and track time-off requests with automated attendance tracking and leave management.",
    color: "from-purple-400/20 to-pink-400/20",
    hoverColor: "group-hover:from-purple-400/30 group-hover:to-pink-400/30"
  },
  {
    icon: PieChart,
    title: "Reporting & Analytics",
    description: "Generate insightful reports on workforce metrics with customizable dashboards and predictive HR analytics.",
    color: "from-amber-400/20 to-yellow-400/20",
    hoverColor: "group-hover:from-amber-400/30 group-hover:to-yellow-400/30"
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Stay compliant with automated policy updates, document management, and regulatory reporting requirements.",
    color: "from-teal-400/20 to-cyan-400/20",
    hoverColor: "group-hover:from-teal-400/30 group-hover:to-cyan-400/30"
  }
];

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;
  
  return (
    <div className="group perspective-1000">
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full bg-white relative z-10 group-hover:translate-y-[-8px] transform-gpu">
        <div className={cn(
          "absolute top-0 left-0 w-full h-full bg-gradient-to-br opacity-30 transition-all duration-500", 
          feature.color,
          feature.hoverColor
        )} />
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-orange to-brand-orange/50" />
        
        <div className="p-8 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-2xl bg-white shadow-md flex items-center justify-center transform transition-transform group-hover:rotate-6 duration-500">
              <Icon className="h-8 w-8 text-brand-orange" />
            </div>
            <div className="relative">
              <div className="absolute -left-8 -top-4 text-5xl font-bold text-gray-100 opacity-80">0{index + 1}</div>
              <span className="text-xs font-semibold text-gray-400 relative z-10">FEATURE</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          
          <div className="mt-6 h-1 w-12 bg-gradient-to-r from-brand-orange to-brand-orange/50 rounded-full transform transition-all duration-500 group-hover:w-24"></div>
        </div>
      </Card>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium transform hover:scale-105 transition-transform duration-300">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Comprehensive <span className="relative">
              <span className="text-brand-orange">HR Solutions</span>
              <span className="absolute bottom-1 left-0 w-full h-1 bg-brand-orange/20 rounded-full"></span>
            </span>
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
