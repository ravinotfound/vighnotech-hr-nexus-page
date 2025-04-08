
import React from 'react';
import {
  HeroSection,
  FeaturesSection,
  BenefitsSection,
  ProductDemo,
  TestimonialsSection,
  ContactSection,
  CTASection
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
      <CTASection />
    </div>
  );
};

export default Index;
