
import React from 'react';
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
    image: "https://placehold.co/100x100?text=SJ",
    rating: 5
  },
  {
    quote: "The performance management module has transformed how we handle reviews. The 360° feedback system provides meaningful insights that help our employees grow professionally.",
    name: "Michael Chen",
    title: "Chief People Officer",
    company: "Innovate Solutions",
    image: "https://placehold.co/100x100?text=MC",
    rating: 5
  },
  {
    quote: "The compliance features alone justified our investment. We've reduced our regulatory risks while saving countless hours on documentation and reporting requirements.",
    name: "Rebecca Torres",
    title: "Operations Manager",
    company: "Global Manufacturing",
    image: "https://placehold.co/100x100?text=RT",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-100 to-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-brand-orange/10 blur-3xl rounded-full"></div>
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            Trusted by HR Leaders
          </h2>
          <p className="text-lg text-gray-600">
            See how our HR solution is transforming workforce management for companies like yours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white backdrop-blur-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-visible"
            >
              <CardContent className="p-8 relative">
                <div className="absolute -top-6 left-8 bg-white rounded-full p-2 shadow-lg">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4" 
                        fill={i < testimonial.rating ? "currentColor" : "none"} 
                      />
                    ))}
                  </div>
                </div>
                
                <Quote className="h-10 w-10 text-brand-orange/20 mb-4" />
                
                <p className="text-gray-700 mb-6 text-lg">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center mt-6">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-16 w-16 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-brand-orange text-white rounded-full p-1">
                      <Quote className="h-3 w-3" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex gap-3">
            <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-gray-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-gray-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-10">
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 rounded-full">
              Read Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
