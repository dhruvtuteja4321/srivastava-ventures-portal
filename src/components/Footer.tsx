
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Srivastava <span className="text-gold-500">Ventures</span></h3>
            <p className="mb-4">
              Investing in exceptional founders and innovative ideas that can transform industries.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link to="#investment-thesis" className="hover:text-gold-400 transition-colors">Investment Thesis</Link></li>
              <li><Link to="#portfolio" className="hover:text-gold-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/submit" className="hover:text-gold-400 transition-colors">Submit a Proposal</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <p className="mb-2">New Delhi, India</p>
            <p className="mb-2">Email: info@srivastavaventures.com</p>
            <p className="mb-4">Phone: +91 123 456 7890</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {year} Srivastava Ventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
