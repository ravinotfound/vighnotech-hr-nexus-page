
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, X } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    price: "399",
    description: "Essential HR management for small businesses",
    features: [
      "Core employee database",
      "Basic document management",
      "Time & attendance tracking",
      "Employee self-service portal",
      "Standard reports",
      "Email support"
    ],
    notIncluded: [
      "Advanced recruiting tools",
      "Performance management",
      "Custom workflows",
      "API access"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "699",
    description: "Complete HR solution for growing organizations",
    features: [
      "Everything in Starter",
      "Advanced recruiting tools",
      "Performance management",
      "Learning management",
      "Custom workflows",
      "Advanced reports & analytics",
      "Priority support"
    ],
    notIncluded: [
      "Enterprise integrations",
      "Dedicated success manager"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Everything in Professional",
      "Enterprise integrations",
      "Custom development options",
      "White-labeling",
      "Dedicated success manager",
      "Service level agreement",
      "24/7 premium support"
    ],
    notIncluded: [],
    cta: "Contact Sales",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your organization's needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl border ${
                plan.popular 
                  ? 'border-brand-orange shadow-lg relative z-10 scale-105 transform md:-mt-4' 
                  : 'border-gray-200'
              } bg-white p-6 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">
                  {plan.price === "Custom" ? "" : "$"}
                  {plan.price}
                </span>
                <span className="text-gray-500 text-sm">
                  {plan.price === "Custom" ? "" : "/month"}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="flex-1">
                <div className="mb-6">
                  <p className="font-medium mb-3">Includes:</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {plan.notIncluded.length > 0 && (
                  <div>
                    <p className="font-medium mb-3">Not included:</p>
                    <ul className="space-y-2">
                      {plan.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <X className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="mt-8">
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-brand-orange hover:bg-brand-orange/90 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-2">Need a customized solution?</p>
          <Button variant="outline">
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
