
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container px-4 sm:px-6">
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-10 -top-10 h-64 w-64 bg-brand-orange/20 rounded-full blur-3xl"></div>
            <div className="absolute -left-10 -bottom-10 h-64 w-64 bg-brand-orange/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Revolutionize Your HR Management?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join hundreds of companies that have transformed their HR operations with our comprehensive solution.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
