
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyPolicy from '@/components/PrivacyPolicy';


const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;