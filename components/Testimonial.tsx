import React from 'react';
import iphone from '../public/assets/images/apple-logo.svg';
const Testimonial = () => {
  return (
    <div className="flex flex-row items-center bg-white py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say About Us?</h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="relative flex flex-col items-center justify-center mb-8 md:mb-0">
          <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 opacity-25" />
          <div className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 opacity-50" />
          <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 opacity-75" />
          <img
            src={iphone}
            alt="Main user"
            className="relative w-32 h-32 rounded-full border-4 border-white"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:ml-8">
          <h3 className="text-2xl font-semibold">The Best Financial Accounting App Ever!</h3>
          <p className="mt-4">
            “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.”
          </p>
          <div className="flex items-center mt-4">
            <img
              src={iphone}
              alt="User"
              className="w-8 h-8 rounded-full border-2 border-white mr-2"
            />
            <p className="font-semibold">Nick Jonas</p>
          </div>
        </div>
      </div>
      <div className="flex mt-8 space-x-4">
        <img
          src={iphone}
          alt="User 1"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <img
          src={iphone}
          alt="User 2"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <img
          src={iphone}
          alt="User 3"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <img
          src={iphone}
          alt="User 4"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
      </div>
    </div>
  );
};

export default Testimonial;
