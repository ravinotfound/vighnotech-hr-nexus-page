
import React, { useState } from 'react';
import { 
  Star, ArrowLeft, ArrowRight, Quote 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Implementing this HR platform reduced our hiring time by 35% and significantly improved our onboarding experience. Our HR team can now focus on strategic initiatives instead of paperwork.",
    name: "Sarah Johnson",
    title: "HR Director",
    company: "TechGrowth Inc.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=200&h=200",
    rating: 5
  },
  {
    quote: "The performance management module has transformed how we handle reviews. The 360° feedback system provides meaningful insights that help our employees grow professionally.",
    name: "Michael Chen",
    title: "Chief People Officer",
    company: "Innovate Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=200&h=200",
    rating: 5
  },
  {
    quote: "The compliance features alone justified our investment. We've reduced our regulatory risks while saving countless hours on documentation and reporting requirements.",
    name: "Rebecca Torres",
    title: "Operations Manager",
    company: "Global Manufacturing",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=200&h=200",
    rating: 4
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50/80 to-white/30 pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      <div className="container px-4 sm:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium animate-fade-in">
            <span className="relative">
              Success Stories
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange/30"></span>
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how organizations are transforming their HR operations with our platform
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main featured testimonial */}
          <div className="relative">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex justify-center z-10">
              <div className="flex gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-md">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4" 
                    fill={i < testimonials[activeIndex].rating ? "#FFB82E" : "none"}
                    stroke={i < testimonials[activeIndex].rating ? "#FFB82E" : "#D1D5DB"}
                  />
                ))}
              </div>
            </div>

            <Card className="bg-white shadow-2xl border-0 overflow-visible rounded-2xl transform transition-all duration-500">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  {/* Left column - Quote */}
                  <div className="md:col-span-8 p-8 md:p-12 relative">
                    <div className="absolute -top-5 left-12 transform -translate-x-1/2 h-14 w-14 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <Quote className="h-6 w-6 text-brand-orange/80" fill="currentColor" />
                    </div>
                    
                    <div className="pt-6">
                      <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-light italic">
                        "{testimonials[activeIndex].quote}"
                      </p>

                      <div className="mt-8 flex items-center">
                        <div className="mr-4 relative">
                          <div className="w-16 h-16 rounded-full border-4 border-white shadow-md overflow-hidden">
                            <img 
                              src={testimonials[activeIndex].image} 
                              alt={testimonials[activeIndex].name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-gray-900">
                            {testimonials[activeIndex].name}
                          </h4>
                          <p className="text-gray-600">
                            {testimonials[activeIndex].title}, {testimonials[activeIndex].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right column - Statistics/Impact */}
                  <div className="md:col-span-4 bg-gradient-to-br from-gray-50 to-gray-100/80 rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl p-8 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100">
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">Results</p>
                        <div className="flex items-end gap-2">
                          <span className="text-4xl font-bold text-brand-orange">35%</span>
                          <span className="text-gray-700 pb-1">faster hiring</span>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">Time Saved</p>
                        <div className="flex items-end gap-2">
                          <span className="text-4xl font-bold text-brand-orange">20</span>
                          <span className="text-gray-700 pb-1">hrs/week</span>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">Implementation</p>
                        <div className="flex items-end gap-2">
                          <span className="text-4xl font-bold text-brand-orange">2</span>
                          <span className="text-gray-700 pb-1">weeks</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-12 w-12 border-gray-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors duration-300"
              onClick={handlePrevious}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-brand-orange w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-12 w-12 border-gray-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors duration-300"
              onClick={handleNext}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
