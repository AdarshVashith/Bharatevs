import React, { useState } from 'react';
import { Link } from '../components/Link';
import Button from '../components/Button';
import { products } from '../data/products';
import { CheckSquare } from 'lucide-react';

interface CategoryPageProps {
  category: string;
}

const BatteryServiceForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="mb-4 inline-flex p-3 bg-green-100 rounded-full">
          <CheckSquare className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Service Request Submitted!</h3>
        <p className="text-gray-600">
          Thank you for choosing BHARAT EVs. Our team will contact you shortly to confirm your service appointment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Customer Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
            <input
              type="tel"
              id="contact"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Battery Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="batteryType" className="block text-sm font-medium text-gray-700 mb-1">Battery Type</label>
            <select
              id="batteryType"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            >
              <option value="">Select battery type</option>
              <option value="lead-acid">Lead Acid</option>
              <option value="lithium-ion">Lithium Ion</option>
            </select>
          </div>
          <div>
            <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">Brand Name</label>
            <input
              type="text"
              id="brand"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">Model Number</label>
            <input
              type="text"
              id="model"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="serial" className="block text-sm font-medium text-gray-700 mb-1">Serial Number</label>
            <input
              type="text"
              id="serial"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="voltage" className="block text-sm font-medium text-gray-700 mb-1">Voltage</label>
            <input
              type="text"
              id="voltage"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 mb-1">Capacity</label>
            <input
              type="text"
              id="capacity"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Reported Problems</h3>
        <div className="space-y-2">
          {[
            'Not Charging',
            'Low Backup',
            'Overheat',
            'Swelling',
            'Leakage',
            'Others'
          ].map((problem) => (
            <div key={problem} className="flex items-center">
              <input
                type="checkbox"
                id={problem.toLowerCase().replace(' ', '-')}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor={problem.toLowerCase().replace(' ', '-')} className="ml-2 text-sm text-gray-700">
                {problem}
              </label>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <label htmlFor="additional" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
          <textarea
            id="additional"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
          ></textarea>
        </div>
      </div>

      <div>
        <Button type="submit" variant="primary" className="w-full">
          Submit Service Request
        </Button>
      </div>
    </form>
  );
};

const VehicleServiceForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="mb-4 inline-flex p-3 bg-green-100 rounded-full">
          <CheckSquare className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Service Request Submitted!</h3>
        <p className="text-gray-600">
          Thank you for choosing BHARAT EVs. Our team will contact you shortly to confirm your service appointment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Customer Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
            <input
              type="tel"
              id="contact"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Vehicle Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
            <select
              id="vehicleType"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            >
              <option value="">Select vehicle type</option>
              <option value="2w">2 Wheeler</option>
              <option value="3w">3 Wheeler</option>
              <option value="erickshaw">E-Rickshaw</option>
              <option value="loader">Loader</option>
            </select>
          </div>
          <div>
            <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Make</label>
            <input
              type="text"
              id="make"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">Model</label>
            <input
              type="text"
              id="model"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Year of Manufacture</label>
            <input
              type="number"
              id="year"
              required
              min="2000"
              max={new Date().getFullYear()}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="registration" className="block text-sm font-medium text-gray-700 mb-1">Registration Number</label>
            <input
              type="text"
              id="registration"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="vin" className="block text-sm font-medium text-gray-700 mb-1">VIN/Chassis Number</label>
            <input
              type="text"
              id="vin"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="batteryType" className="block text-sm font-medium text-gray-700 mb-1">Battery Type</label>
            <select
              id="batteryType"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            >
              <option value="">Select battery type</option>
              <option value="lead-acid">Lead Acid</option>
              <option value="lithium-ion">Lithium Ion</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Reported Issues</h3>
        <div className="space-y-2">
          {[
            'Battery Not Charged',
            'Reduced Range',
            'Motor Not Running',
            'Unusual Noise',
            'Dashboard Warning Light',
            'Brake Issue',
            'Software Glitches',
            'Charging Port Problem'
          ].map((issue) => (
            <div key={issue} className="flex items-center">
              <input
                type="checkbox"
                id={issue.toLowerCase().replace(' ', '-')}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor={issue.toLowerCase().replace(' ', '-')} className="ml-2 text-sm text-gray-700">
                {issue}
              </label>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <label htmlFor="additional" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
          <textarea
            id="additional"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
          ></textarea>
        </div>
      </div>

      <div>
        <Button type="submit" variant="primary" className="w-full">
          Submit Service Request
        </Button>
      </div>
    </form>
  );
};

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  const [selectedService, setSelectedService] = useState<'battery' | 'vehicle' | null>(null);
  
  if (category === 'battery') {
    return (
      <div className="pt-16">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Battery Services</h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Professional battery maintenance and repair services for all types of electric vehicles.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {!selectedService ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div 
                  className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:border-green-500 cursor-pointer transition-all"
                  onClick={() => setSelectedService('battery')}
                >
                  <h2 className="text-2xl font-bold mb-4">Battery Service</h2>
                  <p className="text-gray-600 mb-4">
                    Complete battery diagnostics, maintenance, and repair services for your electric vehicle battery.
                  </p>
                  <Button variant="primary" className="w-full">Select Battery Service</Button>
                </div>

                <div 
                  className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:border-green-500 cursor-pointer transition-all"
                  onClick={() => setSelectedService('vehicle')}
                >
                  <h2 className="text-2xl font-bold mb-4">Vehicle Service</h2>
                  <p className="text-gray-600 mb-4">
                    Comprehensive vehicle diagnostics and maintenance services for your entire electric vehicle.
                  </p>
                  <Button variant="primary" className="w-full">Select Vehicle Service</Button>
                </div>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto">
                <button
                  onClick={() => setSelectedService(null)}
                  className="mb-6 text-green-500 hover:text-green-600 font-medium flex items-center"
                >
                  ← Back to Services
                </button>
                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                  <h2 className="text-2xl font-bold mb-6">
                    {selectedService === 'battery' ? 'Battery Service Request' : 'Vehicle Service Request'}
                  </h2>
                  {selectedService === 'battery' ? <BatteryServiceForm /> : <VehicleServiceForm />}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  const filteredProducts = products.filter(product => product.category === category);
  
  const getCategoryTitle = () => {
    switch(category) {
      case '2-wheeler':
        return '2 Wheeler Electric Vehicles';
      case '3-wheeler':
        return '3 Wheeler Electric Vehicles';
      case 'battery':
        return 'Battery Services';
      default:
        return 'Products';
    }
  };
  
  const getCategoryDescription = () => {
    switch(category) {
      case '2-wheeler':
        return 'Explore our range of electric scooters and motorcycles designed for urban commute and leisure rides. Combining style, performance, and affordability.';
      case '3-wheeler':
        return 'Discover our electric rickshaws and cargo vehicles built for commercial and passenger transport with durability and efficiency in mind.';
      case 'battery':
        return 'Professional battery maintenance and repair services for all types of electric vehicles.';
      default:
        return '';
    }
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{getCategoryTitle()}</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {getCategoryDescription()}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-64">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    <span className="text-green-500 font-bold text-lg">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="ml-2 text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <span 
                          key={index} 
                          className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mt-4">
                    <Button variant="primary" className="w-full">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to make the switch to electric?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Visit our showroom to test drive our vehicles or contact us for more information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-500"
              onClick={() => {
                window.history.pushState({}, '', '/contact');
                window.dispatchEvent(new CustomEvent('locationchange', { detail: '/contact' }));
              }}
            >
              Contact Us
            </Button>
            <Button 
              variant="primary"
              className="bg-white text-green-500 hover:bg-gray-100"
              onClick={() => {
                window.history.pushState({}, '', '/service');
                window.dispatchEvent(new CustomEvent('locationchange', { detail: '/service' }));
              }}
            >
              Schedule Test Drive
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;