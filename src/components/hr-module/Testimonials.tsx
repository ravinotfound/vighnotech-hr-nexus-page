
import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "HR Director",
    company: "Global Innovations Inc.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    quote: "Implementing this HR platform has transformed our entire department. We've reduced time spent on administrative tasks by 65% and can now focus on strategic initiatives that truly impact our company culture.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Chen",
    position: "People Operations Manager",
    company: "TechStart Solutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    quote: "The analytics capabilities are impressive. For the first time, we can make data-driven decisions about our workforce planning and talent development programs. The ROI has been clear from day one.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Patel",
    position: "Chief People Officer",
    company: "Elevation Partners",
    image: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?q=80&w=1974&auto=format&fit=crop",
    quote: "Onboarding used to take our team days of paperwork and follow-ups. Now it's a seamless process that our new hires consistently rate as exceptional. This platform has been a game-changer.",
    rating: 5
  }
];

const Testimonials = () => {
  // Inline Avatar component
  const Avatar = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className || ''}`}
      {...props}
    />
  ));
  Avatar.displayName = "Avatar";

  const AvatarImage = React.forwardRef<
    HTMLImageElement,
    React.ImgHTMLAttributes<HTMLImageElement>
  >(({ className, ...props }, ref) => (
    <img
      ref={ref}
      className={`aspect-square h-full w-full ${className || ''}`}
      {...props}
    />
  ));
  AvatarImage.displayName = "AvatarImage";

  const AvatarFallback = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className || ''}`}
      {...props}
    />
  ));
  AvatarFallback.displayName = "AvatarFallback";

  // Inline Button component
  const Button = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
      variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
      size?: "default" | "sm" | "lg" | "icon";
      asChild?: boolean;
    }
  >(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";
    
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    };
    
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };
    
    const variantStyle = variants[variant];
    const sizeStyle = sizes[size];
    const combinedClassName = `${baseStyles} ${variantStyle} ${sizeStyle} ${className || ''}`;
    
    return (
      <button
        className={combinedClassName}
        ref={ref}
        {...props}
      />
    );
  });
  Button.displayName = "Button";

  // Inline Card components
  const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ''}`}
      {...props}
    />
  ));
  Card.displayName = "Card";

  const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
  >(({ className, ...props }, ref) => (
    <div 
      ref={ref} 
      className={`p-6 pt-0 ${className || ''}`} 
      {...props} 
    />
  ));
  CardContent.displayName = "CardContent";

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Trusted by HR Leaders <span className="relative">
              <span className="text-brand-orange">Worldwide</span>
              <span className="absolute bottom-1 left-0 w-full h-1 bg-brand-orange/20 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Discover how our platform is helping HR teams transform their operations and create exceptional employee experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
              <div className="relative p-6 pb-0">
                <div className="absolute top-6 right-6 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
                <div className="flex items-center mb-4">
                  <Avatar className="h-14 w-14 border-2 border-white shadow">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-xs text-brand-orange">{testimonial.company}</p>
                  </div>
                </div>
              </div>

              <CardContent className="pt-4">
                <blockquote>
                  <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-4">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full border border-gray-300"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full border border-gray-300"
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
