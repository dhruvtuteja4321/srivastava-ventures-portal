
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Funding Your <span className="text-investment-700">Vision</span>,<br />
              Building <span className="text-gold-500">Tomorrow</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Abhishek Srivastava is investing $10,000 to $1,000,000 in innovative 
              businesses and ideas that can shape the future.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                className="bg-investment-700 hover:bg-investment-800 text-white px-8 py-3 text-lg"
                size="lg"
                onClick={() => window.location.href = "/submit"}
              >
                Submit Your Idea
              </Button>
              <Button 
                variant="outline" 
                className="border-investment-700 text-investment-700 hover:text-investment-800 hover:border-investment-800 px-8 py-3 text-lg"
                size="lg"
                onClick={() => document.getElementById('investment-thesis')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-auto max-w-md mx-auto md:max-w-full animate-float">
              <div className="absolute inset-0 bg-investment-500 rounded-full opacity-10 transform -translate-x-6 translate-y-6"></div>
              <div className="absolute inset-0 bg-gold-500 rounded-full opacity-10 transform translate-x-6 -translate-y-6"></div>
              <div className="relative bg-white rounded-xl shadow-xl p-8 z-10">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Investment Range</h3>
                  <div className="flex items-center justify-center mb-8">
                    <span className="text-3xl font-bold text-gold-500">$10,000</span>
                    <span className="mx-4 text-gray-400">to</span>
                    <span className="text-3xl font-bold text-investment-700">$1,000,000</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-3 h-3 bg-investment-500 rounded-full mr-3"></div>
                      <p className="text-gray-700">Pre-Seed & Seed Funding</p>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-3 h-3 bg-investment-500 rounded-full mr-3"></div>
                      <p className="text-gray-700">Growth Capital</p>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-3 h-3 bg-investment-500 rounded-full mr-3"></div>
                      <p className="text-gray-700">Strategic Partnerships</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
