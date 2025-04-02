
import React from 'react';

const AboutFounder = () => {
  return (
    <section className="py-16 bg-white" id="about-founder">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-investment-800 mb-4">About Abhishek Srivastava</h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the investor behind Srivastava Ventures
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-2/5">
            <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center overflow-hidden">
              {/* Placeholder for Abhishek's photo */}
              <div className="text-6xl font-bold text-investment-800">AS</div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h3 className="text-2xl font-bold text-investment-800 mb-4">Abhishek Srivastava</h3>
            <p className="text-gray-700 mb-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
