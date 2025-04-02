
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InvestmentThesis from '@/components/InvestmentThesis';
import ProcessSection from '@/components/ProcessSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <InvestmentThesis />
        <ProcessSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
