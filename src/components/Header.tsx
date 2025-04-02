
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-investment-800">
            Srivastava <span className="text-gold-500">Ventures</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-investment-700 font-medium">Home</Link>
          <Link to="#investment-thesis" className="text-gray-700 hover:text-investment-700 font-medium">Investment Thesis</Link>
          <Link to="#portfolio" className="text-gray-700 hover:text-investment-700 font-medium">Portfolio</Link>
          <Link to="/submit" className="text-gray-700 hover:text-investment-700 font-medium">Submit</Link>
        </nav>
        
        <div className="flex items-center">
          <Button 
            className="bg-investment-700 hover:bg-investment-800 text-white"
            onClick={() => window.location.href = "/submit"}
          >
            Submit Proposal
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
