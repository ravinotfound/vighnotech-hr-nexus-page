
import React from 'react';
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
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-medium">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch with our team for a personalized demo or to discuss your HR needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="bg-white rounded-2xl border-0 shadow-xl overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Request a Demo</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="rounded-lg border-gray-200 focus:border-brand-orange focus:ring-brand-orange"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="rounded-lg border-gray-200 focus:border-brand-orange focus:ring-brand-orange"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Work Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@company.com" 
                    className="rounded-lg border-gray-200 focus:border-brand-orange focus:ring-brand-orange"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-700">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company Name" 
                    className="rounded-lg border-gray-200 focus:border-brand-orange focus:ring-brand-orange"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="size" className="text-gray-700">Company Size</Label>
                  <Select>
                    <SelectTrigger className="rounded-lg border-gray-200 focus:border-brand-orange focus:ring-brand-orange bg-white">
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
                  <Label htmlFor="message" className="text-gray-700">How can we help?</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your HR needs and challenges..." 
                    rows={4} 
                    className="rounded-lg border-gray-200 focus:border-brand-orange focus:ring-brand-orange"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-6 rounded-lg">
                  Request Demo
                  <Send className="ml-2 h-4 w-4" />
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center">
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Our HR specialists are available to answer any questions about our platform and services.
              </p>
              
              <div className="space-y-6">
                <Card className="border-0 shadow-md bg-white hover:shadow-lg transition-all">
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
                
                <Card className="border-0 shadow-md bg-white hover:shadow-lg transition-all">
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
                
                <Card className="border-0 shadow-md bg-white hover:shadow-lg transition-all">
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
            
            <Card className="border-0 shadow-md bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-orange/20 rounded-full blur-2xl"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="font-bold text-xl mb-4">Schedule a Call</h3>
                <p className="text-gray-300 mb-6">
                  Book a 30-minute consultation with our HR solution experts to discuss your specific needs.
                </p>
                <Button className="bg-white text-gray-900 hover:bg-gray-100">
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
