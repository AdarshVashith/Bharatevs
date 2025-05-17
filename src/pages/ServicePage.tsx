import React, { useState } from 'react';
import Button from '../components/Button';
import { PenTool as Tools, Calendar, Clock, CheckSquare } from 'lucide-react';
import { engineers } from '../data/engineers';

const ServicePage: React.FC = () => {
  const [selectedEngineer, setSelectedEngineer] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSchedule = (engineerId: string) => {
    setSelectedEngineer(engineerId);
    setShowForm(true);
    window.scrollTo({ top: document.getElementById('schedule-form')?.offsetTop || 0, behavior: 'smooth' });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setShowForm(false);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Expert EV Service & Maintenance</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team of certified technicians provide comprehensive service to keep your electric vehicle running at peak performance.
            </p>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-green-100 p-4 rounded-full inline-flex mb-6">
                <Tools className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Regular Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Keep your EV in top condition with our comprehensive maintenance service including inspection of electrical systems, battery health check, and software updates.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckSquare className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Battery health analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Motor and controller check</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Brake system inspection</span>
                </li>
              </ul>
              <p className="font-medium text-gray-800 mb-4">Starting at ₹999</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-green-100 p-4 rounded-full inline-flex mb-6">
                <Tools className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Repairs & Diagnostics</h3>
              <p className="text-gray-600 mb-4">
                Our advanced diagnostic tools and skilled technicians can identify and fix any issues with your electric vehicle quickly and effectively.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckSquare className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Advanced diagnostic scanning</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Electrical system repairs</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Component replacement</span>
                </li>
              </ul>
              <p className="font-medium text-gray-800 mb-4">Starting at ₹1499</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="bg-green-100 p-4 rounded-full inline-flex mb-6">
                <Tools className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Battery Service</h3>
              <p className="text-gray-600 mb-4">
                Specialized service for your EV's battery including capacity testing, cell balancing, and replacement if necessary to maximize range and longevity.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckSquare className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Capacity and health testing</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Cell balancing and optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Battery replacement services</span>
                </li>
              </ul>
              <p className="font-medium text-gray-800 mb-4">Starting at ₹1999</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Engineers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Expert Engineers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineers.map((engineer) => (
              <div key={engineer.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64">
                  <img 
                    src={engineer.imageUrl} 
                    alt={engineer.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{engineer.name}</h3>
                  <p className="text-green-600 mb-3">{engineer.position}</p>
                  <p className="text-gray-600 mb-4">{engineer.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {engineer.specialties.map((specialty, index) => (
                      <span 
                        key={index} 
                        className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="primary" 
                    onClick={() => handleSchedule(engineer.id)}
                    className="w-full"
                  >
                    Schedule with {engineer.name.split(' ')[0]}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Form */}
      <section id="schedule-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Schedule Service</h2>
          
          {formSubmitted ? (
            <div className="max-w-md mx-auto p-8 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="mb-4 inline-flex p-3 bg-green-100 rounded-full">
                <CheckSquare className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Service Scheduled Successfully!</h3>
              <p className="text-gray-600">
                Thank you for scheduling service with BHARAT EVs. We'll confirm your appointment shortly via email or phone.
              </p>
            </div>
          ) : showForm ? (
            <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-6">
                Schedule with {engineers.find(e => e.id === selectedEngineer)?.name || 'Our Engineer'}
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="vehicle" className="block text-gray-700 mb-2">Vehicle Model</label>
                  <select 
                    id="vehicle" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="">Select your vehicle</option>
                    <option value="BharatScooter Pro">BharatScooter Pro</option>
                    <option value="BharatScooter Lite">BharatScooter Lite</option>
                    <option value="BharatBike Sport">BharatBike Sport</option>
                    <option value="BharatBike City">BharatBike City</option>
                    <option value="BharatAuto Passenger">BharatAuto Passenger</option>
                    <option value="BharatAuto Cargo">BharatAuto Cargo</option>
                    <option value="BharatAuto Premium">BharatAuto Premium</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service-type" className="block text-gray-700 mb-2">Service Type</label>
                  <select 
                    id="service-type" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="">Select service type</option>
                    <option value="Regular Maintenance">Regular Maintenance</option>
                    <option value="Repairs & Diagnostics">Repairs & Diagnostics</option>
                    <option value="Battery Service">Battery Service</option>
                    <option value="Test Drive">Test Drive</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="date" className="block text-gray-700 mb-2">Preferred Date</label>
                  <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-green-500 focus-within:border-green-500">
                    <span className="pl-3 text-gray-400">
                      <Calendar className="h-5 w-5" />
                    </span>
                    <input 
                      type="date" 
                      id="date" 
                      className="w-full px-4 py-2 border-0 focus:ring-0"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="time" className="block text-gray-700 mb-2">Preferred Time</label>
                  <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-green-500 focus-within:border-green-500">
                    <span className="pl-3 text-gray-400">
                      <Clock className="h-5 w-5" />
                    </span>
                    <input 
                      type="time" 
                      id="time" 
                      className="w-full px-4 py-2 border-0 focus:ring-0"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="notes" className="block text-gray-700 mb-2">Additional Notes</label>
                  <textarea 
                    id="notes" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="Please describe any specific issues or concerns..."
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="primary"
                    type="submit"
                  >
                    Schedule Service
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="max-w-md mx-auto text-center">
              <p className="text-gray-600 mb-8">
                Please select an engineer from the list above to schedule a service appointment with them, or use our general scheduling option below.
              </p>
              <Button 
                variant="primary"
                onClick={() => {
                  setSelectedEngineer(null);
                  setShowForm(true);
                }}
              >
                Schedule Service Now
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServicePage;