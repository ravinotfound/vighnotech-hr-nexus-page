
import React, { useState } from 'react';
import { Play, Check } from 'lucide-react';

// Demo data
const demoTabs = [
  {
    id: "dashboard",
    title: "HR Dashboard",
    description: "Centralized view of all HR metrics and activities with customizable widgets and real-time insights.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Real-time employee data visualization",
      "Customizable HR metrics and KPIs",
      "Departmental performance snapshots",
      "Attendance and leave tracking widgets"
    ]
  },
  {
    id: "recruitment",
    title: "Recruitment",
    description: "End-to-end applicant tracking system with automated screening and intelligent candidate matching.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Automated job posting to multiple platforms",
      "Candidate evaluation and scoring",
      "Interview scheduling and feedback collection",
      "Onboarding task automation"
    ]
  },
  {
    id: "performance",
    title: "Performance",
    description: "Comprehensive employee performance management with continuous feedback and goal tracking.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    features: [
      "Goal setting and tracking frameworks",
      "360° feedback collection and analysis",
      "Performance review automation",
      "Development plan creation and monitoring"
    ]
  },
  {
    id: "reports",
    title: "Analytics",
    description: "In-depth workforce analytics and reporting with predictive insights and custom dashboards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Custom report generation with export options",
      "Workforce trend analysis and forecasting",
      "Compliance and audit reporting",
      "Executive dashboards with key metrics"
    ]
  }
];

// Custom Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const DemoButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";
    
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    };
    
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };
    
    const variantStyle = variants[variant];
    const sizeStyle = sizes[size];
    const combinedClassName = `${baseStyles} ${variantStyle} ${sizeStyle} ${className || ''}`;
    
    return (
      <button
        className={combinedClassName}
        ref={ref}
        {...props}
      />
    );
  }
);
DemoButton.displayName = "DemoButton";

// Tabs Component
interface DemoTabsProps {
  activeTab: string;
  handleTabChange: (tabId: string) => void;
}

const DemoTabs: React.FC<DemoTabsProps> = ({ activeTab, handleTabChange }) => {
  return (
    <div className="flex justify-center mb-8 overflow-x-auto pb-2 no-scrollbar">
      <div className="bg-gray-100 p-1 rounded-xl">
        {demoTabs.map(tab => (
          <button 
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-4 py-3 text-sm transition-all duration-300 ${
              activeTab === tab.id 
                ? 'bg-white text-brand-orange shadow-md rounded-lg border border-gray-100' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
};

// Content Component
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

// Main Product Demo Component
const ProductDemo = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };
  
  return (
    <section id="demo" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            See The Platform <span className="relative">
              <span className="text-brand-orange">In Action</span>
              <span className="absolute bottom-1 left-0 w-full h-1 bg-brand-orange/20 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Experience how our HR software simplifies complex workflows and transforms your HR operations
          </p>
        </div>

        <div className="w-full">
          <DemoTabs activeTab={activeTab} handleTabChange={handleTabChange} />
          <DemoContent activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
