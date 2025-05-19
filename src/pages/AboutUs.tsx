import React from 'react';
import { Award, ThumbsUp, ShieldCheck, Zap } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About BHARAT EVs</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pioneering the future of electric mobility in India with innovative, 
              sustainable, and affordable transportation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                BHARAT EVs founded in 2025 with a vision to transform the Indian transportation landscape. 
                In a country facing increasing air pollution and dependency on fossil fuels, we saw an opportunity 
                to make a difference by introducing high-quality, affordable electric vehicles.
              </p>
              <p className="text-gray-700 mb-6">
                Starting with a small team of engineers and EV enthusiasts, we developed our first electric scooter prototype. 
                Today, we've grown into a comprehensive EV company offering a range of two-wheelers, three-wheelers, and 
                battery solutions designed specifically for Indian conditions and requirements.
              </p>
              <p className="text-gray-700">
                Our journey is driven by innovation, sustainability, and a commitment to make clean transportation 
                accessible to all Indians. We believe in the power of electric mobility to create a greener, 
                healthier future for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                To accelerate India's transition to sustainable mobility by providing innovative, 
                reliable, and affordable electric vehicles and services. We aim to reduce carbon 
                emissions, decrease air pollution, and create a cleaner environment for all Indians.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4">Our Vision</h3>
              </div>
              <p className="text-gray-700">
                To be India's leading electric vehicle manufacturer, recognized for excellence in 
                innovation, quality, and customer satisfaction. We envision a future where electric 
                vehicles are the standard, not the exception, contributing to a sustainable and 
                energy-independent India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at BHARAT EVs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full inline-flex mb-4">
                <ShieldCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality & Safety</h3>
              <p className="text-gray-600">
                We never compromise on the quality and safety of our vehicles. 
                Each product undergoes rigorous testing to ensure reliability and performance.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full inline-flex mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of what's possible in EV technology, 
                seeking better solutions for range, charging, and performance.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full inline-flex mb-4">
                <ThumbsUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer-Centric</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We're committed to 
                providing exceptional service and support throughout the ownership experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experts leading the electric revolution at BHARAT EVs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Rajesh Kumar</h3>
                <p className="text-green-600 mb-3">CEO & Founder</p>
                <p className="text-gray-600">
                  With 20+ years in automotive engineering, Rajesh leads our vision for an electric future.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64">
                <img 
                  src="https://images.pexels.com/photos/5792667/pexels-photo-5792667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="CTO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Priya Sharma</h3>
                <p className="text-green-600 mb-3">Chief Technology Officer</p>
                <p className="text-gray-600">
                  Priya oversees our R&D efforts, focusing on battery technology and vehicle efficiency.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64">
                <img 
                  src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="COO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">Amit Patel</h3>
                <p className="text-green-600 mb-3">Chief Operations Officer</p>
                <p className="text-gray-600">
                  Amit ensures the smooth operation of our manufacturing facilities and supply chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;