
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  // Button component inlined
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

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-200/50 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="container relative px-4 md:px-6 pt-12 md:pt-16 lg:pt-24 pb-8 md:pb-16 lg:pb-32 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col justify-center order-2 lg:order-1 animate-fade-in">
            <div className="flex items-center mb-4">
              <span className="bg-brand-orange/10 text-brand-orange text-xs font-bold py-1 px-3 rounded-full">NEW PLATFORM</span>
              <span className="ml-3 text-gray-600 text-sm">Released April 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4">
              Human Resources
              <span className="relative whitespace-nowrap">
                <span className="relative z-10"> Management</span>
                <span className="absolute bottom-2 w-full h-3 bg-brand-orange/20 rounded-lg" />
              </span>
              Simplified
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl">
              A comprehensive HR platform that streamlines your workflow, reduces administrative burden, and helps you focus on what matters most — your people.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-lg text-base px-6 py-3 shadow-lg shadow-brand-orange/20 hover:shadow-xl hover:shadow-brand-orange/30 transition-all duration-300 hover:translate-y-[-2px]"
              >
                Start Free Trial <ArrowRight className="ml-1" />
              </Button>
              
              <Button
                variant="outline"
                className="border-gray-300 hover:border-gray-400 rounded-lg text-base px-6 py-3 transition-all duration-300"
              >
                Book Demo
              </Button>
            </div>
            
            <div className="flex items-center">
              <div className="flex -space-x-3 mr-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                    <img
                      src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
                      alt="User avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold text-gray-900">500+ companies</div>
                <div className="text-sm text-gray-600">trust our platform</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in animation-delay-300">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-purple-100 rounded-full blur-3xl opacity-80" />
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-80" />
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl opacity-80" />
              
              <div className="relative bg-white border border-gray-200 p-4 rounded-xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop"
                  alt="HR Dashboard"
                  className="w-full h-auto rounded-lg"
                />
                
                <div className="absolute -left-12 -bottom-12 p-4 bg-white border border-gray-200 rounded-lg shadow-lg hidden md:block max-w-[240px]">
                  <div className="flex items-center mb-3">
                    <div className="h-10 w-10 bg-green-100 flex items-center justify-center rounded-full mr-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Employee Onboarding</div>
                      <div className="text-xs text-gray-600">2 new today</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-600">Progress</span>
                      <span className="text-xs font-medium text-gray-900">72%</span>
                    </div>
                    <div className="relative h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="absolute h-full bg-green-500 rounded-full" style={{ width: '72%' }} />
                    </div>
                  </div>
                </div>
                
                <div className="absolute -right-12 top-12 p-3 bg-white border border-gray-200 rounded-lg shadow-lg hidden lg:flex items-center gap-3 max-w-[200px]">
                  <div className="h-10 w-10 bg-blue-100 flex items-center justify-center rounded-full">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                      <path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">New Reviews</div>
                    <div className="text-xs text-gray-600">12 pending</div>
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
