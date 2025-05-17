import React from 'react';
import { ChevronRight, Battery, Zap } from 'lucide-react';
import { Link } from '../components/Link';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3359019/pexels-photo-3359019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Revolutionary Electric Vehicles for a Greener India
            </h1>
            <p className="text-xl mb-8">
              Join the sustainable mobility revolution with BHARAT EVs. 
              Eco-friendly, cost-effective, and powered by innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => {
                  window.history.pushState({}, '', '/category/2-wheeler');
                  window.dispatchEvent(new CustomEvent('locationchange', { detail: '/category/2-wheeler' }));
                }}
              >
                Explore Vehicles
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
                onClick={() => {
                  window.history.pushState({}, '', '/about');
                  window.dispatchEvent(new CustomEvent('locationchange', { detail: '/about' }));
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white" id="about-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.pexels.com/photos/4068383/pexels-photo-4068383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="About BHARAT EVs" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">About BHARAT EVs</h2>
              <p className="text-gray-700 mb-6">
                Founded with a vision to revolutionize transportation in India, BHARAT EVs is committed to providing sustainable mobility solutions that are not only environmentally friendly but also economically viable.
              </p>
              <p className="text-gray-700 mb-6">
                Our mission is to accelerate the adoption of electric vehicles across India, contributing to cleaner air and reduced carbon emissions while offering cutting-edge technology and exceptional customer service.
              </p>
              <Link to="/about" className="inline-flex items-center text-green-500 font-medium hover:text-green-600 transition-colors">
                Learn more about us
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Product Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our range of electric vehicles and accessories designed for various needs and preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 2 Wheeler Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="2 Wheeler EVs" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">2 Wheeler EVs</h3>
                <p className="text-gray-600 mb-4">
                  Efficient, stylish electric scooters and motorcycles for daily commute and leisure rides.
                </p>
                <Link 
                  to="/category/2-wheeler" 
                  className="inline-flex items-center text-green-500 font-medium hover:text-green-600 transition-colors"
                >
                  View models
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* 3 Wheeler Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7039953/pexels-photo-7039953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="3 Wheeler EVs" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">3 Wheeler EVs</h3>
                <p className="text-gray-600 mb-4">
                  Versatile electric rickshaws and cargo vehicles for commercial and passenger transport.
                </p>
                <Link 
                  to="/category/3-wheeler" 
                  className="inline-flex items-center text-green-500 font-medium hover:text-green-600 transition-colors"
                >
                  View models
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Battery Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6952886/pexels-photo-6952886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="EV Batteries" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">EV Batteries</h3>
                <p className="text-gray-600 mb-4">
                  High-performance, long-lasting batteries for all types of electric vehicles.
                </p>
                <Link 
                  to="/category/battery" 
                  className="inline-flex items-center text-green-500 font-medium hover:text-green-600 transition-colors"
                >
                  Explore batteries
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive service and maintenance for all our electric vehicles to ensure optimal performance and longevity.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Expert Service & Maintenance</h3>
              <p className="text-gray-700 mb-6">
                Our team of certified engineers and technicians are trained to provide the best service for your electric vehicles. From routine maintenance to complex repairs, we've got you covered.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-2">
                    <Zap className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Quick Diagnostics</h4>
                    <p className="text-gray-600">Advanced diagnostic tools to quickly identify issues.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 rounded-full p-2">
                    <Battery className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Battery Service</h4>
                    <p className="text-gray-600">Specialized care for EV batteries to maximize lifespan.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button 
                  variant="primary"
                  onClick={() => {
                    window.history.pushState({}, '', '/service');
                    window.dispatchEvent(new CustomEvent('locationchange', { detail: '/service' }));
                  }}
                >
                  Schedule Service
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="EV Service" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;