
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutFounder = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="about-founder">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 opacity-90 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center opacity-5 z-0"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-gold-300 rounded-full blur-3xl opacity-20 z-0"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-investment-300 rounded-full blur-3xl opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-investment-800 mb-4">About Abhishek Srivastava</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the investor behind Srivastava Ventures
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5 flex flex-col items-center">
            <div className="rounded-2xl shadow-2xl overflow-hidden w-72 h-72 mb-6 border-4 border-white">
              <img
                src="/lovable-uploads/5989118a-bf08-4a81-9343-a8248661f962.png"
                alt="Abhishek Srivastava"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-investment-600 hover:text-investment-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-investment-600 hover:text-investment-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-investment-600 hover:text-investment-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-investment-800 mb-4">Abhishek Srivastava</h3>
              <p className="text-gray-700 mb-6 font-medium border-l-4 border-gold-500 pl-4">
                Founder and CFO of Mynx Softwares | CFO at Accident Centers of Texas
              </p>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Abhishek Srivastava is a seasoned financial executive and entrepreneur based in Downtown Dallas, DFW. 
                  With his extensive experience in finance and technology, Abhishek brings valuable expertise to the 
                  table as an angel investor.
                </p>
                
                <p>
                  As the Founder and CFO of Mynx Softwares, Abhishek has demonstrated his ability to build and scale 
                  successful technology ventures. Additionally, his role as CFO at Accident Centers of Texas has given 
                  him deep insights into healthcare management and operations.
                </p>
                
                <p>
                  Abhishek is passionate about investing in promising startups and innovative businesses across various 
                  sectors. His investment portfolio ranges from $10,000 to $1,000,000, supporting entrepreneurs at 
                  different stages of their journey.
                </p>

                <div className="pt-4 mt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-investment-700 mb-2">Investment Focus</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gold-100 text-gold-800 rounded-full text-sm">Renewable Energy</span>
                    <span className="px-3 py-1 bg-investment-100 text-investment-800 rounded-full text-sm">Transportation</span>
                    <span className="px-3 py-1 bg-gold-100 text-gold-800 rounded-full text-sm">AGI SaaS</span>
                    <span className="px-3 py-1 bg-investment-100 text-investment-800 rounded-full text-sm">Shale Oil</span>
                    <span className="px-3 py-1 bg-gold-100 text-gold-800 rounded-full text-sm">Quantum Computing</span>
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

export default AboutFounder;
