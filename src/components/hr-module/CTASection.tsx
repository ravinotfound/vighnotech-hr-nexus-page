
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-white text-gray-900">
      <div className="container px-4 sm:px-6">
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-16 relative overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.01]">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -top-20 h-80 w-80 bg-brand-orange/10 rounded-full blur-[100px]"></div>
            <div className="absolute -left-20 -bottom-20 h-80 w-80 bg-brand-orange/10 rounded-full blur-[100px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-[120%] bg-gradient-to-r from-brand-orange/5 via-brand-orange/10 to-brand-orange/5 blur-[50px] rotate-12"></div>
          </div>
          
          {/* Animated background shapes */}
          <div className="absolute top-10 right-10 h-20 w-20 rounded-full bg-brand-orange/10 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-10 left-10 h-16 w-16 rounded-full bg-brand-orange/10 animate-pulse" style={{ animationDuration: '6s' }}></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-8 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-sm font-medium transform hover:scale-105 transition-transform duration-300">
              <span className="text-brand-orange">Ready to Transform?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Revolutionize Your HR Management Today
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Join hundreds of companies that have transformed their HR operations with our comprehensive solution.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button className="group bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 rounded-xl shadow-lg shadow-brand-orange/20 hover:shadow-xl hover:shadow-brand-orange/30 transition-all duration-300 hover:translate-y-[-4px]">
                <span>Start Your Free Trial</span>
                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1 duration-300" />
              </Button>
              
              <Button variant="outline" className="border-gray-300 text-gray-800 bg-white hover:bg-gray-50 px-8 py-6 rounded-xl hover:translate-y-[-4px] transition-transform duration-300">
                Schedule a Demo
              </Button>
            </div>
            
            <div className="mt-10 flex flex-col items-center">
              <p className="text-gray-600 text-sm mb-2">
                No credit card required. 14-day free trial.
              </p>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-gray-600 ml-2">Rated 4.9/5 by our customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
