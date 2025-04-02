
import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Submit Your Proposal",
      description: "Complete our submission form with details about your business and upload your business plan PDF."
    },
    {
      number: "02",
      title: "Initial Review",
      description: "We'll review your submission within 2-3 weeks and reach out if there's potential alignment."
    },
    {
      number: "03",
      title: "Due Diligence",
      description: "If selected, we'll conduct deeper analysis and schedule meetings with your team."
    },
    {
      number: "04",
      title: "Investment Decision",
      description: "Based on due diligence, we'll make a decision on investment terms and structure."
    },
    {
      number: "05",
      title: "Partnership & Growth",
      description: "Beyond capital, we provide strategic guidance and connections to help scale your business."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Investment Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A transparent and efficient process designed to help founders secure funding and strategic support.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row mb-12 last:mb-0">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="flex items-center md:justify-center">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-investment-700 text-white font-bold text-xl">
                    {step.number}
                  </span>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block h-24 w-px bg-gray-300 mx-auto my-4"></div>
                  )}
                </div>
              </div>
              <div className="md:w-3/4 md:pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="md:hidden h-px w-full bg-gray-300 my-6"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
