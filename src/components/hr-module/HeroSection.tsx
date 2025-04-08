
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative bg-white text-gray-900 min-h-screen flex items-center overflow-hidden">
      {/* Subtle background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-20 right-0 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 bottom-20 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 sm:px-6 relative z-10 py-16 md:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 max-w-2xl animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-orange/10 to-brand-orange/20 border border-brand-orange/20 text-sm font-medium mb-4 transform transition-transform hover:scale-105 duration-300">
              <span className="text-brand-orange mr-1">New</span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mx-2 animate-pulse"></span>
              <span className="text-gray-800">HR Management Software</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-500 hover:tracking-tight">
              Streamline Your <span className="relative">
                <span className="text-brand-orange">HR Operations</span>
                <span className="absolute bottom-1 left-0 w-full h-1 bg-brand-orange/20 rounded-full"></span>
              </span> With Intelligent Automation
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 md:pr-12 max-w-xl">
              Transform how you manage talent with our all-in-one HR platform. Simplify recruitment, performance, and employee management while ensuring compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-6 rounded-xl hover:translate-y-[-4px] transition-transform duration-300">
                Request Demo 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-gray-300 bg-white hover:bg-gray-50 text-gray-800 px-6 py-6 rounded-xl hover:translate-y-[-4px] transition-transform duration-300">
                Explore Features
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-6 transition-all duration-300 hover:transform hover:translate-x-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-white shadow-md flex items-center justify-center overflow-hidden transition-transform hover:scale-110"
                  >
                    <span className="text-xs font-semibold text-gray-600">{i}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Trusted by <span className="text-brand-orange font-medium">500+</span> HR teams
              </p>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl">
            <div className="relative transform hover:scale-[1.02] transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-brand-orange/50 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                <div className="h-10 bg-gray-50 flex items-center px-4 border-b border-gray-100">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-4">
                  <img 
                    src="https://placehold.co/600x400?text=HR+Dashboard+Preview" 
                    alt="HR Software Dashboard" 
                    className="w-full rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                  />
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-brand-orange/20 hover:bg-brand-orange/5 transition-colors duration-300">
                      <div className="h-2 w-16 bg-gray-200 rounded mb-2"></div>
                      <div className="h-6 w-24 bg-brand-orange/30 rounded"></div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-brand-orange/20 hover:bg-brand-orange/5 transition-colors duration-300">
                      <div className="h-2 w-14 bg-gray-200 rounded mb-2"></div>
                      <div className="h-6 w-20 bg-blue-400/30 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer">
        <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
        <ArrowDown className="h-5 w-5 text-brand-orange" />
      </div>
    </section>
  );
};

export default HeroSection;
