
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OurStorySection from '@/components/OurStorySection';
import SustainabilitySection from '@/components/SustainabilitySection';


const OurImpact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        
        <SustainabilitySection />
    
      </main>
      <Footer />
    </div>
  );
};

export default OurImpact;
