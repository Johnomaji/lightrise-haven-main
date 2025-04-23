
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OurStorySection from '@/components/OurStorySection';


const OurStory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        
        <OurStorySection />
    
      </main>
      <Footer />
    </div>
  );
};

export default OurStory;
