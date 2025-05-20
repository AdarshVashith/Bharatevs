import React from 'react';

const Link = ({ to, className, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    
    // Handle in-page anchor links
    if (to.startsWith('#')) {
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    
    // Update the URL without page reload
    window.history.pushState({}, '', to);
    
    // Dispatch a custom event to notify the App component to update the route
    window.dispatchEvent(new CustomEvent('locationchange', { detail: to }));
  };
  
  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;