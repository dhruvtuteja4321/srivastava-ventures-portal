
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Rocket, Car, Atom, Leaf, ChartLine } from "lucide-react";

const InvestmentThesis = () => {
  return (
    <section id="investment-thesis" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Thesis</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Abhishek Srivastava focuses on industries and ventures with significant growth potential
            and innovative solutions to real-world problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-investment-600 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-investment-600" />
                Technology
              </CardTitle>
              <CardDescription>Disruptive platforms and solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Investing in SaaS, AI, blockchain, cybersecurity, and other
                scalable technology solutions with global market potential.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-gold-500 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChartLine className="h-5 w-5 text-gold-500" />
                Healthcare
              </CardTitle>
              <CardDescription>Innovative health solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Supporting digital health, biotechnology, and medical devices
                that improve patient outcomes and healthcare efficiency.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-investment-600 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-investment-600" />
                Renewable Energy
              </CardTitle>
              <CardDescription>Sustainable power technologies</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Funding solar, wind, hydrogen, and energy storage technologies 
                that accelerate the transition to clean, renewable energy sources.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-gold-500 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5 text-gold-500" />
                Transportation
              </CardTitle>
              <CardDescription>Future mobility solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Investing in electric vehicles, autonomous driving technologies,
                and innovative transportation platforms that redefine mobility.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-investment-600 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-investment-600" />
                AGI SaaS
              </CardTitle>
              <CardDescription>Artificial General Intelligence software</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Supporting platforms leveraging artificial general intelligence
                to create powerful, adaptable software solutions across industries.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-gold-500 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChartLine className="h-5 w-5 text-gold-500" />
                Hydrocarbons & Shale Oil
              </CardTitle>
              <CardDescription>Energy transition solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Investing in innovative extraction technologies, carbon capture, 
                and cleaner hydrocarbon solutions during the energy transition phase.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-investment-600 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Atom className="h-5 w-5 text-investment-600" />
                Quantum Computing
              </CardTitle>
              <CardDescription>Next-generation computing</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Backing quantum hardware, algorithms, and software applications 
                that will revolutionize computing capabilities and solve previously 
                intractable problems.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-gold-500 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChartLine className="h-5 w-5 text-gold-500" />
                Financial Innovation
              </CardTitle>
              <CardDescription>Transforming financial services</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Backing fintech solutions that democratize access to financial
                services and improve efficiency in the financial sector.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-investment-600 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChartLine className="h-5 w-5 text-investment-600" />
                Education
              </CardTitle>
              <CardDescription>Future of learning</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Investing in edtech platforms that enhance learning outcomes
                and provide access to quality education globally.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvestmentThesis;
