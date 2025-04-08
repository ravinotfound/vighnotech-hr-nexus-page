
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-black text-white">
      <div className="container px-4 sm:px-6">
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -top-20 h-80 w-80 bg-brand-orange/20 rounded-full blur-[100px]"></div>
            <div className="absolute -left-20 -bottom-20 h-80 w-80 bg-brand-orange/10 rounded-full blur-[100px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-[120%] bg-gradient-to-r from-brand-orange/5 via-brand-orange/10 to-brand-orange/5 blur-[50px] rotate-12"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 rounded-full bg-white/10 text-white text-sm font-medium border border-white/10">
              Ready to Transform?
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Revolutionize Your HR Management Today
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join hundreds of companies that have transformed their HR operations with our comprehensive solution.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-7 rounded-full text-lg shadow-lg shadow-brand-orange/20 hover:shadow-xl hover:shadow-brand-orange/30 transition-all duration-300">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-7 rounded-full text-lg">
                Schedule a Demo
              </Button>
            </div>
            
            <p className="mt-10 text-gray-400 text-sm">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
