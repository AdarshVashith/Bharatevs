import React from 'react';

interface LinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ to, className, children }) => {
  const handleClick = (e: React.MouseEvent) => {
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