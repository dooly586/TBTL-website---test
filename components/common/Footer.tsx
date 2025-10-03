import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <p>
            <a href="mailto:contact@tbtl.com" className="hover:text-blue-400 transition-colors">contact@tbtl.com</a>
            <span className="mx-2">|</span>
            <a href="tel:+82-2-1234-5678" className="hover:text-blue-400 transition-colors">+82-2-1234-5678</a>
          </p>
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} TBTL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
