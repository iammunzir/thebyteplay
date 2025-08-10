import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="mb-4">
              <p className="text-lg font-semibold text-blue-400 mb-2">Get in Touch</p>
              <a 
                href="mailto:info@thebyteplay.com" 
                className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
              >
                info@thebyteplay.com
              </a>
            </div>
            <p className="text-gray-300">We'd love to hear from you!</p>
          </div>

          {/* About Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">TheBytePlay</h3>
            <p className="text-gray-300 mb-4">
              Your ultimate gaming community hub. Connect, compete, and conquer with fellow gamers.
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-blue-400 font-semibold">Contact Email:</p>
              <a 
                href="mailto:info@thebyteplay.com" 
                className="text-lg font-bold text-yellow-400 hover:text-yellow-300"
              >
                info@thebyteplay.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/games" className="text-gray-300 hover:text-white transition-colors">Games</a></li>
              <li><a href="/community" className="text-gray-300 hover:text-white transition-colors">Community</a></li>
              <li><a href="/tournaments" className="text-gray-300 hover:text-white transition-colors">Tournaments</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 TheBytePlay. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Contact:</span>
              <a 
                href="mailto:info@thebyteplay.com" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
              >
                info@thebyteplay.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
