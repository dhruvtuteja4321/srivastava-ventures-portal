
import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-investment-800 to-investment-950 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Your Business to the Next Level?</h2>
        <p className="text-xl text-investment-100 mb-8 max-w-3xl mx-auto">
          Submit your business proposal today and take the first step toward securing 
          investment from Abhishek Srivastava.
        </p>
        <Button 
          className="bg-gold-500 hover:bg-gold-600 text-investment-900 px-8 py-3 text-lg"
          size="lg"
          onClick={() => window.location.href = "/submit"}
        >
          Submit Your Proposal
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
