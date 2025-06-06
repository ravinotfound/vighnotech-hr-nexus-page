
import React, { useState } from 'react';
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
    stat: "40%",
    statLabel: "Time saved"
  },
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description: "Reduce administrative overhead and paperwork costs by up to 30% with streamlined digital processes.",
    stat: "30%",
    statLabel: "Cost savings"
  },
  {
    icon: CheckCircle,
    title: "Compliance Assurance",
    description: "Minimize legal risks with automated compliance tracking and up-to-date regulatory requirements.",
    stat: "99%",
    statLabel: "Compliance rate"
  },
  {
    icon: Heart,
    title: "Enhanced Experience",
    description: "Improve satisfaction and retention with self-service portals and responsive HR support systems.",
    stat: "85%",
    statLabel: "Satisfaction"
  },
  {
    icon: Clock,
    title: "Faster Decision Making",
    description: "Access real-time data and analytics to make informed workforce decisions quickly and effectively.",
    stat: "3x",
    statLabel: "Faster insights"
  },
  {
    icon: Database,
    title: "Data Security",
    description: "Protect sensitive employee information with enterprise-grade security protocols and access controls.",
    stat: "100%",
    statLabel: "Data protected"
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Identify potential issues before they become problems with preventive compliance monitoring.",
    stat: "62%",
    statLabel: "Risk reduction"
  },
  {
    icon: Users,
    title: "Talent Management",
    description: "Attract and retain top talent with streamlined recruitment and effective performance management.",
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
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium transition-all hover:bg-brand-orange/30 hover:scale-105 duration-300">
            Benefits
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Business Benefits That <span className="relative">
              <span className="text-brand-orange">Drive Results</span>
              <span className="absolute bottom-1 left-0 w-full h-1 bg-brand-orange/30 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Our HR software doesn't just organize information—it transforms your workforce management
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <div 
                key={index}
                className="perspective-1000"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className={cn(
                    "bg-white shadow-xl hover:shadow-2xl hover:shadow-brand-orange/20 transition-all duration-500 h-full rounded-xl overflow-hidden",
                    "transform-gpu transition-transform duration-500 rotate-6",
                    hoveredIndex === index ? "rotate-0" : ""
                  )}
                >
                  <div className="p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 rounded-full opacity-20 bg-brand-orange/30" />
                    
                    <div className={cn(
                      "h-14 w-14 rounded-full bg-brand-orange/10 border-0 flex items-center justify-center mb-4 scale-110",
                      "transition-all duration-500 group-hover:rotate-12 group-hover:bg-brand-orange/20"
                    )}>
                      <Icon className={cn(
                        "h-7 w-7 transition-all duration-300 text-brand-orange group-hover:scale-110"
                      )} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-brand-orange transition-colors duration-300">{benefit.title}</h3>
                    
                    <div className="max-h-40 group-hover:translate-y-[-2px] transition-all duration-300">
                      <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                    </div>
                    
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-brand-orange">{benefit.stat}</span>
                      <span className="text-xs text-gray-500 group-hover:text-brand-orange/70 transition-colors duration-300">{benefit.statLabel}</span>
                    </div>
                    
                    {/* Pulsing dot indicator */}
                    <div className="absolute top-3 right-3 h-3 w-3 rounded-full bg-brand-orange/30 group-hover:bg-brand-orange/50 transition-colors duration-300 animate-pulse"></div>
                    
                    {/* Eliminate the bottom border line */}
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

export default BenefitsSection;
