
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 max-w-2xl animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20 text-sm font-medium mb-4">
              <span className="mr-1">New</span>
              <span className="h-1 w-1 rounded-full bg-brand-orange mx-1"></span>
              <span>HR Management Software</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Streamline Your <span className="text-brand-orange">HR Operations</span> With Intelligent Automation
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 md:pr-12">
              Transform how you manage talent with our all-in-one HR platform. Simplify recruitment, performance, and employee management while ensuring compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-6 rounded-md">
                Request Demo 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-6 py-6 rounded-md">
                Explore Features
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-black" />
                ))}
              </div>
              <p className="text-sm text-gray-400">
                Trusted by <span className="text-white font-medium">500+</span> HR teams
              </p>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-brand-orange/50 rounded-xl blur-lg opacity-30" />
              <div className="relative bg-gray-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                <div className="h-8 bg-gray-800 flex items-center px-4 border-b border-white/5">
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-4">
                  <img 
                    src="https://placehold.co/600x400?text=HR+Dashboard+Preview" 
                    alt="HR Software Dashboard" 
                    className="w-full rounded-md border border-white/10"
                  />
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="bg-gray-800 p-3 rounded-md border border-white/5">
                      <div className="h-2 w-12 bg-gray-700 rounded mb-2"></div>
                      <div className="h-6 w-20 bg-brand-orange/30 rounded"></div>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md border border-white/5">
                      <div className="h-2 w-12 bg-gray-700 rounded mb-2"></div>
                      <div className="h-6 w-16 bg-blue-500/30 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
