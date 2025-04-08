
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    size: '',
    message: '',
  });
  
  const [activeField, setActiveField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSelectChange = (value) => {
    setFormState(prev => ({ ...prev, size: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          size: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium transform hover:scale-105 transition-transform duration-300">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Ready to Transform Your <span className="relative">
              <span className="text-brand-orange">HR Operations?</span>
              <span className="absolute bottom-1 left-0 w-full h-1 bg-brand-orange/20 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch with our team for a personalized demo or to discuss your HR needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="bg-white rounded-2xl border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.01]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center">
                <span className="bg-brand-orange/10 rounded-full p-2 mr-3">
                  <Send className="h-5 w-5 text-brand-orange" />
                </span>
                Request a Demo
              </h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-fade-in">
                  <div className="bg-green-100 rounded-full p-4 mb-4">
                    <Check className="h-8 w-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Thank You!</h4>
                  <p className="text-gray-600">Your demo request has been submitted. We'll contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="relative">
                        <Label 
                          htmlFor="firstName" 
                          className={`
                            text-gray-700 transition-all duration-300 absolute
                            ${activeField === 'firstName' || formState.firstName
                              ? '-top-6 left-0 text-xs text-brand-orange'
                              : 'top-2 left-3 text-sm text-gray-500'
                            }
                          `}
                        >
                          First Name
                        </Label>
                        <Input 
                          id="firstName" 
                          value={formState.firstName}
                          onChange={handleChange}
                          onFocus={() => setActiveField('firstName')}
                          onBlur={() => setActiveField(null)}
                          className="rounded-lg border-gray-200 focus:border-brand-orange focus:ring-brand-orange bg-gray-50 h-12 pl-3 pt-2"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="relative">
                        <Label 
                          htmlFor="lastName" 
                          className={`
                            text-gray-700 transition-all duration-300 absolute
                            ${activeField === 'lastName' || formState.lastName
                              ? '-top-6 left-0 text-xs text-brand-orange'
                              : 'top-2 left-3 text-sm text-gray-500'
                            }
                          `}
                        >
                          Last Name
                        </Label>
                        <Input 
                          id="lastName" 
                          value={formState.lastName}
                          onChange={handleChange}
                          onFocus={() => setActiveField('lastName')}
                          onBlur={() => setActiveField(null)}
                          className="rounded-lg border-gray-200 focus:border-brand-orange focus:ring-brand-orange bg-gray-50 h-12 pl-3 pt-2"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="relative">
                      <Label 
                        htmlFor="email" 
                        className={`
                          text-gray-700 transition-all duration-300 absolute
                          ${activeField === 'email' || formState.email
                            ? '-top-6 left-0 text-xs text-brand-orange'
                            : 'top-2 left-3 text-sm text-gray-500'
                          }
                        `}
                      >
                        Work Email
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                        className="rounded-lg border-gray-200 focus:border-brand-orange focus:ring-brand-orange bg-gray-50 h-12 pl-3 pt-2"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="relative">
                      <Label 
                        htmlFor="company" 
                        className={`
                          text-gray-700 transition-all duration-300 absolute
                          ${activeField === 'company' || formState.company
                            ? '-top-6 left-0 text-xs text-brand-orange'
                            : 'top-2 left-3 text-sm text-gray-500'
                          }
                        `}
                      >
                        Company
                      </Label>
                      <Input 
                        id="company" 
                        value={formState.company}
                        onChange={handleChange}
                        onFocus={() => setActiveField('company')}
                        onBlur={() => setActiveField(null)}
                        className="rounded-lg border-gray-200 focus:border-brand-orange focus:ring-brand-orange bg-gray-50 h-12 pl-3 pt-2"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="size" className="text-gray-700 text-sm">Company Size</Label>
                    <Select onValueChange={handleSelectChange} value={formState.size}>
                      <SelectTrigger className="rounded-lg border-gray-200 focus:border-brand-orange focus:ring-brand-orange bg-gray-50 h-12">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501+">501+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="relative">
                      <Label 
                        htmlFor="message" 
                        className={`
                          text-gray-700 transition-all duration-300 absolute
                          ${activeField === 'message' || formState.message
                            ? '-top-6 left-0 text-xs text-brand-orange'
                            : 'top-2 left-3 text-sm text-gray-500'
                          }
                        `}
                      >
                        How can we help?
                      </Label>
                      <Textarea 
                        id="message" 
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField(null)}
                        rows={4} 
                        className="rounded-lg border-gray-200 focus:border-brand-orange focus:ring-brand-orange bg-gray-50 pl-3 pt-4"
                        required
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-6 rounded-lg transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg disabled:opacity-70 disabled:hover:translate-y-0"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        Request Demo
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center">
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <span className="bg-brand-orange/10 rounded-full p-2 mr-3">
                  <Mail className="h-5 w-5 text-brand-orange" />
                </span>
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                Our HR specialists are available to answer any questions about our platform and services.
              </p>
              
              <div className="space-y-6">
                <Card className="border-0 shadow-md bg-white hover:shadow-xl transition-all duration-300 transform hover:translate-x-2">
                  <CardContent className="p-6 flex items-start">
                    <div className="mr-4 mt-1 bg-brand-orange/10 rounded-full p-3">
                      <Phone className="h-6 w-6 text-brand-orange" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md bg-white hover:shadow-xl transition-all duration-300 transform hover:translate-x-2">
                  <CardContent className="p-6 flex items-start">
                    <div className="mr-4 mt-1 bg-brand-orange/10 rounded-full p-3">
                      <Mail className="h-6 w-6 text-brand-orange" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">hr-solutions@vighnotech.com</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md bg-white hover:shadow-xl transition-all duration-300 transform hover:translate-x-2">
                  <CardContent className="p-6 flex items-start">
                    <div className="mr-4 mt-1 bg-brand-orange/10 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-brand-orange" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Headquarters</p>
                      <p className="text-gray-600">
                        123 Innovation Way<br />
                        Tech Park, Suite 400<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-orange/10 rounded-full blur-2xl"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="font-bold text-xl mb-4 text-gray-900">Schedule a Call</h3>
                <p className="text-gray-700 mb-6">
                  Book a 30-minute consultation with our HR solution experts to discuss your specific needs.
                </p>
                <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white hover:translate-y-[-4px] transition-transform duration-300">
                  Schedule Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
