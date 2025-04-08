
import React, { useState } from 'react';
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
    color: "from-orange-400 to-red-500",
    stat: "40%",
    statLabel: "Time saved"
  },
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description: "Reduce administrative overhead and paperwork costs by up to 30% with streamlined digital processes.",
    color: "from-green-400 to-emerald-500",
    stat: "30%",
    statLabel: "Cost savings"
  },
  {
    icon: CheckCircle,
    title: "Compliance Assurance",
    description: "Minimize legal risks with automated compliance tracking and up-to-date regulatory requirements.",
    color: "from-blue-400 to-indigo-500",
    stat: "99%",
    statLabel: "Compliance rate"
  },
  {
    icon: Heart,
    title: "Enhanced Experience",
    description: "Improve satisfaction and retention with self-service portals and responsive HR support systems.",
    color: "from-pink-400 to-purple-500",
    stat: "85%",
    statLabel: "Satisfaction"
  },
  {
    icon: Clock,
    title: "Faster Decision Making",
    description: "Access real-time data and analytics to make informed workforce decisions quickly and effectively.",
    color: "from-amber-400 to-yellow-500",
    stat: "3x",
    statLabel: "Faster insights"
  },
  {
    icon: Database,
    title: "Data Security",
    description: "Protect sensitive employee information with enterprise-grade security protocols and access controls.",
    color: "from-teal-400 to-cyan-500",
    stat: "100%",
    statLabel: "Data protected"
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Identify potential issues before they become problems with preventive compliance monitoring.",
    color: "from-violet-400 to-purple-500",
    stat: "62%",
    statLabel: "Risk reduction"
  },
  {
    icon: Users,
    title: "Talent Management",
    description: "Attract and retain top talent with streamlined recruitment and effective performance management.",
    color: "from-blue-500 to-cyan-500",
    stat: "27%",
    statLabel: "Turnover reduced"
  },
];

const BenefitsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-brand-orange/10 border border-brand-orange/10 text-brand-orange text-sm font-medium transform hover:scale-105 transition-transform duration-300">
            Benefits
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Business Benefits That <span className="relative">
              <span className="text-brand-orange">Drive Results</span>
              <span className="absolute bottom-1 left-0 w-full h-1 bg-brand-orange/20 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Our HR software doesn't just organize information—it transforms your workforce management
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card 
                className={cn(
                  "bg-white border border-gray-100 hover:border-brand-orange/20 transition-all duration-300 h-full",
                  "transform-gpu transition-transform duration-500",
                  hoveredIndex === index ? "shadow-2xl -translate-y-2 rotate-y-10" : "shadow-md"
                )}
              >
                <CardContent className="p-6 relative overflow-hidden">
                  <div className={cn(
                    "absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 rounded-full opacity-20 transition-transform duration-500",
                    `bg-gradient-to-br ${benefit.color}`,
                    hoveredIndex === index ? "scale-150" : "scale-100"
                  )} />
                  
                  <div className={cn(
                    "h-12 w-12 rounded-xl bg-white border border-gray-100 shadow-md flex items-center justify-center mb-4",
                    "transition-transform duration-300",
                    hoveredIndex === index ? "scale-110 rotate-12" : ""
                  )}>
                    <benefit.icon className={cn(
                      "h-6 w-6 transition-colors duration-300",
                      hoveredIndex === index ? "text-brand-orange" : "text-gray-700"
                    )} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
                  
                  <div className={cn(
                    "overflow-hidden transition-all duration-500",
                    hoveredIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                  </div>
                  
                  <div className={cn(
                    "flex items-baseline gap-2 transition-all duration-300",
                    hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-50"
                  )}>
                    <span className="text-2xl font-bold bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent">{benefit.stat}</span>
                    <span className="text-xs text-gray-500">{benefit.statLabel}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
