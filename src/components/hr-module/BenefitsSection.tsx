
import React from 'react';
import { 
  TrendingUp, DollarSign, CheckCircle, Heart, 
  Clock, Database, Shield, Users
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="py-20 md:py-28 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-brand-orange/20 border border-brand-orange/10 text-brand-orange text-sm font-medium">
            Benefits
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Business Benefits That <span className="text-brand-orange">Drive Results</span>
          </h2>
          <p className="text-lg text-gray-300">
            Our HR software doesn't just organize information—it transforms your workforce management
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 backdrop-blur-lg border border-white/5 hover:border-white/10 hover:transform hover:scale-105 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className={cn(
                  "h-12 w-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4",
                  benefit.color
                )}>
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
