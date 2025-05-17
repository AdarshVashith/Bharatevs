import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, CheckSquare } from 'lucide-react';
import Button from '../components/Button';

const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get in touch with our team for inquiries, support, or to schedule a visit to our showroom.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">Visit Us</h3>
                    <address className="text-gray-600 not-italic">
                      123 EV Park, Green Street,<br />
                      New Delhi, India - 110001
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@bharatevs.com" className="hover:text-green-500 transition-colors">info@bharatevs.com</a><br />
                      <a href="mailto:support@bharatevs.com" className="hover:text-green-500 transition-colors">support@bharatevs.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-600">
                      <a href="tel:+919876543210" className="hover:text-green-500 transition-colors">+91 98765 43210</a><br />
                      <a href="tel:+911123456789" className="hover:text-green-500 transition-colors">+91 11 2345 6789</a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-green-100 transition-colors">
                    <Facebook className="h-5 w-5 text-gray-600 hover:text-green-600" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-green-100 transition-colors">
                    <Twitter className="h-5 w-5 text-gray-600 hover:text-green-600" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-green-100 transition-colors">
                    <Instagram className="h-5 w-5 text-gray-600 hover:text-green-600" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-green-100 transition-colors">
                    <Linkedin className="h-5 w-5 text-gray-600 hover:text-green-600" />
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="mb-4 inline-flex p-3 bg-green-100 rounded-full">
                      <CheckSquare className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600">
                      Thank you for contacting BHARAT EVs. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                          <input 
                            type="text" 
                            id="name" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                          <input 
                            type="email" 
                            id="email" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                        <input 
                          type="text" 
                          id="subject" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                          required
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                        <textarea 
                          id="message" 
                          rows={5}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                          required
                        ></textarea>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button 
                          variant="primary"
                          type="submit"
                        >
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Location</h2>
          <div className="rounded-lg overflow-hidden shadow-md h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.935173215105!2d77.19995781508095!3d28.6306791824172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1635774593619!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="BHARAT EVs Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;