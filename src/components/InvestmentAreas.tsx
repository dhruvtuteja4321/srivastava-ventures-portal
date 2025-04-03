
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Globe } from "lucide-react";

const InvestmentAreas = () => {
  const areas = [
    {
      name: "United States",
      flag: "🇺🇸",
      description: "Innovative startups across technology hubs like Silicon Valley, Austin, and New York"
    },
    {
      name: "Dubai",
      flag: "🇦🇪",
      description: "Emerging ventures in finance, real estate, and sustainable urban development"
    },
    {
      name: "India",
      flag: "🇮🇳",
      description: "Growing tech ecosystem and infrastructure projects in major metropolitan areas"
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      description: "Clean energy solutions and technology startups in Toronto, Vancouver, and Montreal"
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      description: "Fintech innovations and AGI research centers in London and throughout the UK"
    },
    {
      name: "Bangladesh",
      flag: "🇧🇩",
      description: "Renewable energy and sustainable development projects in emerging markets"
    },
    {
      name: "Pakistan",
      flag: "🇵🇰",
      description: "Infrastructure development and technological innovation in growing urban centers"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Geographic Investment Focus</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We invest in promising ventures across key strategic regions worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <div className={`h-2 ${index % 2 === 0 ? 'bg-investment-600' : 'bg-gold-500'}`}></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl" role="img" aria-label={`${area.name} flag`}>
                    {area.flag}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">{area.name}</h3>
                </div>
                <p className="text-gray-700">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-investment-700 font-medium">
            <Globe className="h-5 w-5" />
            <span>Actively exploring opportunities in emerging markets worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentAreas;
