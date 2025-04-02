
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
              <CardTitle>Technology</CardTitle>
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
              <CardTitle>Healthcare</CardTitle>
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
              <CardTitle>Sustainable Solutions</CardTitle>
              <CardDescription>Environmentally focused ventures</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Funding clean energy, green technology, and sustainable business
                models addressing climate change and environmental challenges.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-gold-500 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Consumer Products</CardTitle>
              <CardDescription>Next-generation brands</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Partnering with innovative consumer brands disrupting traditional
                markets with superior products and experiences.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-investment-600 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Financial Innovation</CardTitle>
              <CardDescription>Transforming financial services</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Backing fintech solutions that democratize access to financial
                services and improve efficiency in the financial sector.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-gold-500 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Education</CardTitle>
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
