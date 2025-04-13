
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServicesSection from '@/components/ServicesSection';
import FractionalServicesSection from '@/components/FractionalServicesSection';
import SustainabilitySection from '@/components/SustainabilitySection';
import OurStorySection from '@/components/OurStorySection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TestimonialsSection />
        <OurStorySection />
        <ServicesSection />
        <FractionalServicesSection />
        <SustainabilitySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
