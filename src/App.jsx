import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CategoryPage from './pages/CategoryPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import SignIn from './pages/SignIn';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  useEffect(() => {
    const handleLocationChange = (event) => {
      if (event.detail) {
        setCurrentPath(event.detail);
      } else {
        setCurrentPath(window.location.pathname);
      }
    };
    
    // Listen for our custom event
    window.addEventListener('locationchange', handleLocationChange);
    
    // Listen for browser back/forward buttons
    window.addEventListener('popstate', () => {
      setCurrentPath(window.location.pathname);
    });
    
    return () => {
      window.removeEventListener('locationchange', handleLocationChange);
      window.removeEventListener('popstate', () => {});
    };
  }, []);

  const renderContent = () => {
    // Remove trailing slashes for consistent routing
    const path = currentPath.endsWith('/') && currentPath !== '/' 
      ? currentPath.slice(0, -1) 
      : currentPath;
    
    if (path === '/') {
      return <Home />;
    } else if (path === '/about') {
      return <AboutUs />;
    } else if (path.startsWith('/category/')) {
      const category = path.split('/')[2];
      return <CategoryPage category={category} />;
    } else if (path === '/service') {
      return <ServicePage />;
    } else if (path === '/contact') {
      return <ContactPage />;
    } else if (path === '/signin') {
      return <SignIn />;
    } else {
      // 404 page
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Page not found</p>
            <button 
              onClick={() => {
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new CustomEvent('locationchange', { detail: '/' }));
              }}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;