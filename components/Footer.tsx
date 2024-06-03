// components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto flex items-center mb-4 sm:mb-0">
            <div className="text-red-600 text-4xl font-bold">uifry</div>
            <div className="ml-4">
              <p className="text-gray-600">Help@Frybix.Com</p>
              <p className="text-gray-600">+1234 456 678 89</p>
            </div>
          </div>
          <div className="w-full sm:w-auto flex flex-col sm:flex-row justify-between sm:space-x-10 text-gray-600">
            <div className="mb-4 sm:mb-0">
              <h5 className="font-semibold mb-2">Links</h5>
              <ul>
                <li><a href="#" className="hover:text-black">Home</a></li>
                <li><a href="#" className="hover:text-black">About Us</a></li>
                <li><a href="#" className="hover:text-black">Bookings</a></li>
                <li><a href="#" className="hover:text-black">Blog</a></li>
              </ul>
            </div>
            <div className="mb-4 sm:mb-0">
              <h5 className="font-semibold mb-2">Legal</h5>
              <ul>
                <li><a href="#" className="hover:text-black">Terms Of Use</a></li>
                <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black">Cookie Policy</a></li>
              </ul>
            </div>
            <div className="mb-4 sm:mb-0">
              <h5 className="font-semibold mb-2">Product</h5>
              <ul>
                <li><a href="#" className="hover:text-black">Take Tour</a></li>
                <li><a href="#" className="hover:text-black">Live Chat</a></li>
                <li><a href="#" className="hover:text-black">Reviews</a></li>
              </ul>
            </div>
            <div className="mb-4 sm:mb-0">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <form className="flex flex-col sm:flex-row sm:items-center">
                <input 
                  type="email" 
                  className="w-full sm:w-auto py-2 px-4 border border-gray-300 rounded mb-2 sm:mb-0 sm:mr-2" 
                  placeholder="Your email" 
                />
                <button 
                  type="submit" 
                  className="w-full sm:w-auto bg-black text-white py-2 px-4 rounded"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>Copyright © 2022 Uifry.Com All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
