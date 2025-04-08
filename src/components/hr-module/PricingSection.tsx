
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
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
  const [billing, setBilling] = useState('monthly');

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-brand-orange/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-brand-orange/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium">
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Choose the plan that fits your organization's needs
          </p>
          
          <div className="inline-flex p-1 bg-gray-100 rounded-full mb-8">
            <button 
              onClick={() => setBilling('monthly')} 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billing === 'monthly' 
                  ? 'bg-white text-gray-900 shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBilling('annual')} 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billing === 'annual' 
                  ? 'bg-white text-gray-900 shadow-md' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual <span className="text-xs text-brand-orange font-bold">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border ${
                plan.popular 
                  ? 'shadow-2xl border-brand-orange' 
                  : 'shadow-lg border-gray-200'
              } transition-all duration-300 hover:shadow-xl rounded-2xl ${
                plan.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-gradient-to-r from-brand-orange to-orange-500 text-white text-xs font-bold py-1.5 px-4 text-center">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <CardHeader className={`pt-8 ${plan.popular ? 'pb-0' : 'pb-0'} px-8`}>
                <div className="font-bold text-lg text-gray-600 mb-1">{plan.name}</div>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {plan.price === "Custom" ? "" : "$"}
                    {plan.price}
                  </span>
                  <span className="ml-1 text-gray-500 text-lg">
                    {plan.price === "Custom" ? "" : `/${billing === 'monthly' ? 'mo' : 'yr'}`}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="p-8 pt-4">
                <div className="mb-8">
                  <p className="font-medium mb-3 text-gray-700">Includes:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-3 mt-1">
                          <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-3 w-3 text-green-600" />
                          </div>
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {plan.notIncluded.length > 0 && (
                  <div>
                    <p className="font-medium mb-3 text-gray-700">Not included:</p>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-3 mt-1">
                            <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center">
                              <X className="h-3 w-3 text-gray-400" />
                            </div>
                          </div>
                          <span className="text-gray-500 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
              
              <CardFooter className="pb-8 px-8">
                <Button 
                  className={`w-full rounded-full py-6 ${
                    plan.popular 
                      ? 'bg-brand-orange hover:bg-brand-orange/90 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Need a customized solution?</p>
          <Button variant="outline" className="rounded-full border-gray-300 hover:border-brand-orange hover:bg-brand-orange hover:text-white">
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
