
import React from 'react';
import { 
  TrendingUp, DollarSign, CheckCircle, Heart, 
  Clock, Database, Shield, Users
} from 'lucide-react';
import { cn } from '@/lib/utils';

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Productivity",
    description: "Automate routine tasks and workflows to free up to 40% of your HR team's time for strategic initiatives.",
    color: "from-orange-400 to-red-500"
  },
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description: "Reduce administrative overhead and paperwork costs by up to 30% with streamlined digital processes.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: CheckCircle,
    title: "Compliance Assurance",
    description: "Minimize legal risks with automated compliance tracking and up-to-date regulatory requirements.",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: Heart,
    title: "Enhanced Employee Experience",
    description: "Improve satisfaction and retention with self-service portals and responsive HR support systems.",
    color: "from-pink-400 to-purple-500"
  },
  {
    icon: Clock,
    title: "Faster Decision Making",
    description: "Access real-time data and analytics to make informed workforce decisions quickly and effectively.",
    color: "from-amber-400 to-yellow-500"
  },
  {
    icon: Database,
    title: "Data Security",
    description: "Protect sensitive employee information with enterprise-grade security protocols and access controls.",
    color: "from-teal-400 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Identify potential issues before they become problems with preventive compliance monitoring.",
    color: "from-violet-400 to-purple-500"
  },
  {
    icon: Users,
    title: "Improved Talent Management",
    description: "Attract and retain top talent with streamlined recruitment and effective performance management.",
    color: "from-blue-500 to-cyan-500"
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Business Benefits That <span className="text-brand-orange">Drive Results</span>
          </h2>
          <p className="text-lg text-gray-600">
            Our HR software doesn't just organize information—it transforms your workforce management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all"
            >
              <div className={cn(
                "h-12 w-12 rounded-full bg-gradient-to-br flex items-center justify-center mb-4",
                benefit.color
              )}>
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
