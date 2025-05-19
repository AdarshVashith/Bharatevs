export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  specifications: Record<string, string>;
  imageUrl: string;
}

export const products: Product[] = [
  // 2 Wheeler Products
  {
    id: '2w-001',
    name: 'BharatScooter Pro',
    category: '2-wheeler',
    description: 'Premium electric scooter with extended range and smart features for urban commuters.',
    price: 89999,
    originalPrice: 99999,
    features: ['120km Range', 'Smart Connectivity', 'Fast Charging', 'Regenerative Braking'],
    specifications: {
      'Battery': '2.5 kWh Lithium-ion',
      'Motor': '1800W BLDC',
      'Top Speed': '60 km/h',
      'Charging Time': '4 hours',
      'Weight': '85 kg'
    },
    imageUrl: 'https://images.pexels.com/photos/8412091/pexels-photo-8412091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2w-002',
    name: 'BharatScooter Lite',
    category: '2-wheeler',
    description: 'Affordable electric scooter for daily commuting with reliable performance.',
    price: 69999,
    features: ['80km Range', 'Digital Display', 'Economy Mode', 'Tubeless Tires'],
    specifications: {
      'Battery': '1.8 kWh Lithium-ion',
      'Motor': '1200W BLDC',
      'Top Speed': '45 km/h',
      'Charging Time': '5 hours',
      'Weight': '78 kg'
    },
    imageUrl: 'https://images.pexels.com/photos/5359273/pexels-photo-5359273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2w-003',
    name: 'BharatBike Sport',
    category: '2-wheeler',
    description: 'High-performance electric motorcycle with sporty design and impressive acceleration.',
    price: 129999,
    features: ['150km Range', 'Multiple Riding Modes', 'Disc Brakes', 'LED Lighting'],
    specifications: {
      'Battery': '3.5 kWh Lithium-ion',
      'Motor': '3000W BLDC',
      'Top Speed': '90 km/h',
      'Charging Time': '3.5 hours',
      'Weight': '115 kg'
    },
    imageUrl: 'https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2w-004',
    name: 'BharatBike City',
    category: '2-wheeler',
    description: 'Comfortable electric city bike with upright seating position and practical features.',
    price: 99999,
    features: ['100km Range', 'Comfortable Seat', 'Luggage Carrier', 'Anti-theft Alarm'],
    specifications: {
      'Battery': '2.2 kWh Lithium-ion',
      'Motor': '2000W BLDC',
      'Top Speed': '60 km/h',
      'Charging Time': '4 hours',
      'Weight': '95 kg'
    },
    imageUrl: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  
  // 3 Wheeler Products
  {
    id: '3w-001',
    name: 'BharatAuto Passenger',
    category: '3-wheeler',
    description: 'Electric auto rickshaw designed for passenger transport with comfortable seating and reliability.',
    price: 149999,
    features: ['100km Range', '4 Passenger Capacity', 'Low Maintenance', 'Weather Protection'],
    specifications: {
      'Battery': '5 kWh Lithium-ion',
      'Motor': '2500W BLDC',
      'Top Speed': '40 km/h',
      'Charging Time': '6 hours',
      'Weight': '320 kg'
    },
    imageUrl: 'https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3w-002',
    name: 'BharatAuto Cargo',
    category: '3-wheeler',
    description: 'Heavy-duty electric cargo vehicle for last-mile delivery and small businesses.',
    price: 169999,
    features: ['80km Range', '500kg Load Capacity', 'Robust Build', 'Low Running Cost'],
    specifications: {
      'Battery': '7.5 kWh Lithium-ion',
      'Motor': '3000W BLDC',
      'Top Speed': '35 km/h',
      'Charging Time': '7 hours',
      'Weight': '380 kg'
    },
    imageUrl: 'https://images.pexels.com/photos/544339/pexels-photo-544339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3w-003',
    name: 'BharatAuto Premium',
    category: '3-wheeler',
    description: 'Luxury electric rickshaw with enhanced features and comfort for premium passenger transport.',
    price: 179999,
    originalPrice: 199999,
    features: ['120km Range', 'Air-cooled Seats', 'Entertainment System', 'GPS Navigation'],
    specifications: {
      'Battery': '6 kWh Lithium-ion',
      'Motor': '2800W BLDC',
      'Top Speed': '45 km/h',
      'Charging Time': '5 hours',
      'Weight': '340 kg'
    },
    imageUrl: 'https://images.pexels.com/photos/8000510/pexels-photo-8000510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  
  // Battery Service Products
  {
    id: 'bat-001',
    name: '2-Wheeler Battery Service',
    category: 'battery',
    description: 'Comprehensive battery service for 2-wheeler electric vehicles including diagnostics, maintenance, and optimization.',
    price: 1999,
    features: ['Battery Health Check', 'Cell Balancing', 'Performance Optimization', 'Warranty Support'],
    specifications: {
      'Service Duration': '2-3 hours',
      'Warranty': '6 months',
      'Includes': 'Full diagnostics report',
      'Compatible': 'All 2W EV models',
      'Support': '24/7 assistance'
    },
    imageUrl: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'bat-002',
    name: '3-Wheeler Battery Service',
    category: 'battery',
    description: 'Professional battery maintenance and repair service for 3-wheeler electric vehicles with enhanced durability focus.',
    price: 2999,
    features: ['Deep Cycle Testing', 'Thermal Management Check', 'Performance Tuning', 'Extended Support'],
    specifications: {
      'Service Duration': '3-4 hours',
      'Warranty': '1 year',
      'Includes': 'Comprehensive analysis',
      'Compatible': 'All 3W EV models',
      'Support': 'Priority assistance'
    },
    imageUrl: 'https://images.pexels.com/photos/4195327/pexels-photo-4195327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'bat-003',
    name: 'Emergency Battery Service',
    category: 'battery',
    description: 'Quick response battery service for emergency situations with immediate support and temporary solutions.',
    price: 3999,
    features: ['24/7 Availability', 'Rapid Response', 'On-site Service', 'Temporary Replacement'],
    specifications: {
      'Response Time': 'Within 2 hours',
      'Service Area': 'City-wide coverage',
      'Includes': 'Emergency repairs',
      'Compatible': 'All EV models',
      'Support': 'Round-the-clock'
    },
    imageUrl: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'bat-004',
    name: 'Premium Battery Care',
    category: 'battery',
    description: 'Comprehensive annual battery maintenance program with regular checkups and priority service.',
    price: 5999,
    features: ['Quarterly Checkups', 'Priority Service', 'Performance Reports', 'Extended Warranty'],
    specifications: {
      'Duration': '1 year program',
      'Checkups': '4 times/year',
      'Includes': 'All battery services',
      'Compatible': 'All EV models',
      'Support': 'VIP assistance'
    },
    imageUrl: 'https://images.pexels.com/photos/6615076/pexels-photo-6615076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];