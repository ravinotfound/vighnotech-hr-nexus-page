
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
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch with our team for a personalized demo or to discuss your HR needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6">Request a Demo</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" placeholder="john.doe@company.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your Company Name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="size">Company Size</Label>
                <Select>
                  <SelectTrigger>
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
                <Label htmlFor="message">How can we help?</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your HR needs and challenges..." 
                  rows={4} 
                />
              </div>
              
              <Button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white">
                Request Demo
                <Send className="ml-2 h-4 w-4" />
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Our HR specialists are available to answer any questions about our platform and services.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-brand-orange/10 rounded-full p-2">
                    <Phone className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-brand-orange/10 rounded-full p-2">
                    <Mail className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">hr-solutions@vighnotech.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-brand-orange/10 rounded-full p-2">
                    <MapPin className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-medium">Headquarters</p>
                    <p className="text-gray-600">
                      123 Innovation Way<br />
                      Tech Park, Suite 400<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-3">Schedule a Call</h3>
              <p className="text-gray-600 mb-5">
                Book a 30-minute consultation with our HR solution experts to discuss your specific needs.
              </p>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                Schedule Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
