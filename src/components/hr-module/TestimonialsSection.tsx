
import React from 'react';
import { 
  Star, ArrowLeft, ArrowRight, Quote 
} from 'lucide-react';
import { Button } from "@/components/ui/button";

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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by HR Leaders
          </h2>
          <p className="text-lg text-gray-600">
            See how our HR solution is transforming workforce management for companies like yours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col"
            >
              <div className="flex-1">
                <div className="flex mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5" 
                      fill={i < testimonial.rating ? "currentColor" : "none"} 
                    />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-brand-orange/20 mb-2" />
                
                <p className="italic text-gray-600 mb-6">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex gap-3 mt-8">
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-8">
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">
              Read Success Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
