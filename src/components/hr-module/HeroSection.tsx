
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  const heroRef = useRef(null);
  const imageContainerRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !imageContainerRef.current) return;
      
      const scrollPosition = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const scrollRatio = Math.min(scrollPosition / (heroHeight / 2), 1);
      
      // Parallax and fade effect on scroll
      if (imageContainerRef.current) {
        imageContainerRef.current.style.transform = `translateY(${scrollRatio * 50}px) scale(${1 - scrollRatio * 0.1})`;
        imageContainerRef.current.style.opacity = 1 - scrollRatio;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative bg-white text-gray-900 min-h-screen flex items-center overflow-hidden"
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,90,31,0.05)_0%,rgba(255,255,255,0)_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,90,31,0.07)_0%,rgba(255,255,255,0)_60%)]"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-brand-orange/3 to-transparent blur-3xl"></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full opacity-20 animate-pulse"
            style={{
              width: `${Math.random() * 120 + 40}px`,
              height: `${Math.random() * 120 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: 'rgba(255, 90, 31, 0.2)',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="container px-4 sm:px-6 relative z-10 py-16 md:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 max-w-2xl animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-orange/10 to-brand-orange/20 border border-brand-orange/20 text-sm font-medium mb-4 transform transition-transform hover:scale-105 duration-300">
              <span className="text-brand-orange mr-1">New</span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mx-2 animate-pulse"></span>
              <span className="text-gray-800">HR Management Software</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Elevate Your <span className="relative inline-block">
                <span className="relative z-10 text-brand-orange">Workforce</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-brand-orange/10 -z-10 transform -rotate-1"></span>
              </span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl">With Intelligent HR</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 md:pr-12 max-w-xl relative">
              <span className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-brand-orange to-transparent rounded-full hidden md:block"></span>
              Transform how you manage talent with our all-in-one HR platform. Simplify recruitment, performance, and employee management while ensuring compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="group bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-6 rounded-xl hover:shadow-lg hover:shadow-brand-orange/20 transition-all duration-300">
                Request Demo 
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1 duration-300" />
              </Button>
              <Button variant="outline" className="group border-gray-300 bg-white hover:bg-gray-50 text-gray-800 px-6 py-6 rounded-xl transition-all duration-300">
                Explore Features
                <ArrowDown className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-y-1 duration-300" />
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-6 transition-all duration-300 hover:transform hover:translate-x-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-white shadow-md flex items-center justify-center overflow-hidden transition-transform hover:scale-110"
                  >
                    <img 
                      src={`https://images.unsplash.com/photo-${5550 + i * 10}00?&w=50&h=50&crop=faces&fit=crop`} 
                      alt={`User ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Trusted by <span className="text-brand-orange font-medium">500+</span> HR teams
              </p>
            </div>
          </div>
          
          <div ref={imageContainerRef} className="flex-1 w-full max-w-xl">
            <div className="relative transform hover:scale-[1.02] transition-all duration-500">
              {/* Glowing effect behind the image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-brand-orange/50 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
              
              {/* Main dashboard preview */}
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
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                    alt="HR Software Dashboard" 
                    className="w-full rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                  />
                  
                  {/* Dashboard stats */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-brand-orange/20 hover:bg-brand-orange/5 transition-colors duration-300 group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-gray-500">Applications</span>
                        <span className="h-2 w-2 bg-green-400 rounded-full group-hover:animate-pulse"></span>
                      </div>
                      <div className="h-6 flex items-end gap-2">
                        <span className="text-xl font-bold text-gray-800">127</span>
                        <span className="text-xs text-green-600">+12%</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-brand-orange/20 hover:bg-brand-orange/5 transition-colors duration-300 group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-gray-500">Interviews</span>
                        <span className="h-2 w-2 bg-blue-400 rounded-full group-hover:animate-pulse"></span>
                      </div>
                      <div className="h-6 flex items-end gap-2">
                        <span className="text-xl font-bold text-gray-800">43</span>
                        <span className="text-xs text-blue-600">Today</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating notification element */}
              <div className="absolute -right-6 top-1/3 transform translate-y-8 animate-fade-in">
                <div className="bg-white rounded-lg p-3 shadow-xl border border-gray-100 w-48 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium">New Candidate</span>
                  </div>
                  <p className="text-xs text-gray-600">Alex Johnson applied for Senior Developer position</p>
                </div>
              </div>
              
              {/* Floating analytics element */}
              <div className="absolute -left-10 bottom-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="bg-white rounded-lg p-3 shadow-xl border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                  <div className="h-2 w-16 bg-gray-200 rounded mb-2"></div>
                  <div className="flex items-end space-x-1 h-8">
                    <div className="w-3 bg-brand-orange/60 rounded-t" style={{ height: '30%' }}></div>
                    <div className="w-3 bg-brand-orange/70 rounded-t" style={{ height: '60%' }}></div>
                    <div className="w-3 bg-brand-orange/80 rounded-t" style={{ height: '40%' }}></div>
                    <div className="w-3 bg-brand-orange/90 rounded-t" style={{ height: '80%' }}></div>
                    <div className="w-3 bg-brand-orange rounded-t" style={{ height: '70%' }}></div>
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
