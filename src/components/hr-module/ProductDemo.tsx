
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Play, Check, X } from 'lucide-react';

const demoTabs = [
  {
    id: "dashboard",
    title: "HR Dashboard",
    description: "Centralized view of all HR metrics and activities",
    image: "https://placehold.co/800x500?text=HR+Dashboard",
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
    description: "End-to-end applicant tracking system",
    image: "https://placehold.co/800x500?text=Recruitment+Module",
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
    description: "Comprehensive employee performance management",
    image: "https://placehold.co/800x500?text=Performance+Module",
    features: [
      "Goal setting and tracking frameworks",
      "360° feedback collection and analysis",
      "Performance review automation",
      "Development plan creation and monitoring"
    ]
  },
  {
    id: "reports",
    title: "Reports & Analytics",
    description: "In-depth workforce analytics and reporting",
    image: "https://placehold.co/800x500?text=Reports+%26+Analytics",
    features: [
      "Custom report generation with export options",
      "Workforce trend analysis and forecasting",
      "Compliance and audit reporting",
      "Executive dashboards with key metrics"
    ]
  }
];

const ProductDemo = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  return (
    <section id="demo" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See The Platform <span className="text-brand-orange">In Action</span>
          </h2>
          <p className="text-lg text-gray-300">
            Experience how our HR software simplifies complex workflows and transforms your HR operations
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-800 p-1">
              {demoTabs.map(tab => (
                <TabsTrigger 
                  key={tab.id}
                  value={tab.id}
                  className={`px-4 py-2 text-sm transition-all ${
                    activeTab === tab.id ? 'bg-brand-orange text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {demoTabs.map(tab => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <div className="relative rounded-lg overflow-hidden border border-white/10 bg-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent opacity-30 rounded-lg" />
                    <img 
                      src={tab.image} 
                      alt={tab.title} 
                      className="w-full h-auto relative z-10"
                    />
                    <div className="absolute bottom-4 right-4 z-20">
                      <Button className="bg-brand-orange hover:bg-brand-orange/90 rounded-full h-12 w-12 p-0 flex items-center justify-center">
                        <Play className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold mb-2">{tab.title}</h3>
                  <p className="text-gray-300 mb-6">{tab.description}</p>
                  <div className="space-y-3">
                    {tab.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <span className="mr-3 mt-1">
                          <Check className="h-5 w-5 text-brand-orange" />
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                      Schedule Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductDemo;
