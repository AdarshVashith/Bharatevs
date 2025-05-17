import React from 'react';
import { Link } from '../components/Link';
import Button from '../components/Button';
import { products } from '../data/products';

interface CategoryPageProps {
  category: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  const filteredProducts = products.filter(product => product.category === category);
  
  const getCategoryTitle = () => {
    switch(category) {
      case '2-wheeler':
        return '2 Wheeler Electric Vehicles';
      case '3-wheeler':
        return '3 Wheeler Electric Vehicles';
      case 'battery':
        return 'EV Batteries';
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
        return 'Browse our collection of high-performance lithium-ion batteries designed for various electric vehicles with extended life and optimal performance.';
      default:
        return '';
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
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

      {/* Products Section */}
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

      {/* Call to Action */}
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