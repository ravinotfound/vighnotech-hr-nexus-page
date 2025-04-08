
import React from 'react';
import {
  HeroSection,
  FeaturesSection,
  BenefitsSection,
  ProductDemo,
  TestimonialsSection,
  ContactSection
} from '@/components/hr-module';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <ProductDemo />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
