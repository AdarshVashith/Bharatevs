import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import { Link } from './Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Zap className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-2xl font-bold text-gray-800">BHARAT <span className="text-green-500">EVs</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-500 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-500 transition-colors">About Us</Link>
            
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-green-500 transition-colors">
                Category
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/category/2-wheeler" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-500">2 Wheeler</Link>
                  <Link to="/category/3-wheeler" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-500">3 Wheeler</Link>
                  <Link to="/category/battery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-500">Battery</Link>
                </div>
              </div>
            </div>
            
            <Link to="/service" className="text-gray-700 hover:text-green-500 transition-colors">Service</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-500 transition-colors">Contact Us</Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <Link 
              to="/signin" 
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Sign In
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-500 rounded-md">Home</Link>
          <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-500 rounded-md">About Us</Link>
          <Link to="/category/2-wheeler" className="block px-3 py-2 pl-6 text-gray-700 hover:bg-green-50 hover:text-green-500 rounded-md">2 Wheeler</Link>
          <Link to="/category/3-wheeler" className="block px-3 py-2 pl-6 text-gray-700 hover:bg-green-50 hover:text-green-500 rounded-md">3 Wheeler</Link>
          <Link to="/category/battery" className="block px-3 py-2 pl-6 text-gray-700 hover:bg-green-50 hover:text-green-500 rounded-md">Battery</Link>
          <Link to="/service" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-500 rounded-md">Service</Link>
          <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-green-500 rounded-md">Contact Us</Link>
          <Link to="/signin" className="block px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 mt-4">Sign In</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;