
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InvestmentThesis from '@/components/InvestmentThesis';
import ProcessSection from '@/components/ProcessSection';
import AboutFounder from '@/components/AboutFounder';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/placeholder.svg')] bg-fixed bg-opacity-5">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50 z-0"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Hero />
          <AboutFounder />
          <InvestmentThesis />
          <ProcessSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
