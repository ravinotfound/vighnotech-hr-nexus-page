
import React from 'react';
import { ArrowRight, Check, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  // Inline Label component
  const Label = React.forwardRef<
    HTMLLabelElement,
    React.LabelHTMLAttributes<HTMLLabelElement> & {
      variant?: string;
    }
  >(({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className || ''}`}
      {...props}
    />
  ));
  Label.displayName = "Label";
  
  // Inline Input component
  const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
  >(({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${className || ''}`}
        ref={ref}
        {...props}
      />
    );
  });
  Input.displayName = "Input";

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
  
  // Inline Textarea component
  const Textarea = React.forwardRef<
    HTMLTextAreaElement,
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
  >(({ className, ...props }, ref) => {
    return (
      <textarea
        className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${className || ''}`}
        ref={ref}
        {...props}
      />
    );
  });
  Textarea.displayName = "Textarea";

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-brand-orange/10 rounded-full blur-3xl opacity-80" />
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-80" />
              
              <div className="relative bg-white shadow-xl rounded-xl p-6 md:p-8 border border-gray-100">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Get in touch</h3>
                <p className="text-gray-600 mb-6">
                  Our HR experts are ready to answer your questions and provide a personalized demo.
                </p>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Acme Inc." />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" rows={4} required />
                  </div>
                  
                  <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white w-full py-3 rounded-lg shadow-lg shadow-brand-orange/20 hover:shadow-xl hover:shadow-brand-orange/30 transition-all duration-300 hover:translate-y-[-2px]">
                    Send Message <ArrowRight className="ml-1" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Ready to 
              <span className="relative ml-2">
                <span className="text-brand-orange">transform</span>
                <span className="absolute bottom-1 left-0 w-full h-1 bg-brand-orange/20 rounded-full"></span>
              </span> your HR operations?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Reach out to our team for a personalized demo and discover how our platform can solve your HR challenges.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email us</h4>
                  <p className="text-gray-600 mb-1">For general inquiries:</p>
                  <a href="mailto:info@hrplatform.com" className="text-brand-orange hover:underline">info@hrplatform.com</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Call us</h4>
                  <p className="text-gray-600 mb-1">Mon-Fri from 8am to 6pm:</p>
                  <a href="tel:+15551234567" className="text-brand-orange hover:underline">+1 (555) 123-4567</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Visit us</h4>
                  <p className="text-gray-600 mb-1">Our headquarters:</p>
                  <address className="not-italic text-brand-orange">
                    100 Main Street<br/>
                    San Francisco, CA 94105
                  </address>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                <Check className="h-3 w-3 text-green-600" />
              </div>
              <span className="text-gray-600">Typically reply within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
