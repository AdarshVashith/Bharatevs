import React from 'react';
import { Link } from './Link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-2xl font-bold">BHARAT <span className="text-green-500">EVs</span></span>
            </div>
            <p className="text-gray-600 mb-4">
              Leading the electric vehicle revolution in India with sustainable and affordable mobility solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-green-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link to="/category/2-wheeler" className="text-gray-600 hover:text-green-500 transition-colors">2 Wheeler EVs</Link></li>
              <li><Link to="/category/3-wheeler" className="text-gray-600 hover:text-green-500 transition-colors">3 Wheeler EVs</Link></li>
              <li><Link to="/category/battery" className="text-gray-600 hover:text-green-500 transition-colors">Batteries</Link></li>
              <li><Link to="/service" className="text-gray-600 hover:text-green-500 transition-colors">Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/service" className="text-gray-600 hover:text-green-500 transition-colors">Maintenance</Link></li>
              <li><Link to="/service" className="text-gray-600 hover:text-green-500 transition-colors">Repairs</Link></li>
              <li><Link to="/service" className="text-gray-600 hover:text-green-500 transition-colors">Battery Replacement</Link></li>
              <li><Link to="/service" className="text-gray-600 hover:text-green-500 transition-colors">Upgrades</Link></li>
              <li><Link to="/service" className="text-gray-600 hover:text-green-500 transition-colors">Warranty Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">123 EV Park, Green Street, New Delhi, India - 110001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-600">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-600">info@bharatevs.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} BHARAT EVs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;