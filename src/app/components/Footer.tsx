"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-4">
      <motion.div
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Restaurant Info */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold">Broxden Delight</h2>
          <p className="text-lg font-semibold">Fast Food Restaurant</p>
          <p className="text-gray-400">Broxden Avenue, Perth, Perthshire, PH2 0PX</p>
          <p className="text-gray-400">Trading Since: NOVEMBER 2023</p>
        </motion.div>

        {/* Opening Hours and Contact */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold">Opening Hours</h2>
          <p className="text-lg">1:00 PM to 11:00 PM</p>
          <p className="text-gray-400">(7 days a week)</p>
          <p className="text-lg font-semibold mt-4">Contact No:</p>
          <p className="text-gray-400">0141 611 231</p>
        </motion.div>

        {/* Contact Details and Tagline */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold">Contact Information</h2>
          <p className="text-lg">Mr. Adrian Venoin</p>
          <p className="text-gray-400">clearbusinessbyadrian@gmail.com</p>
          <p className="text-gray-400">Online order email: SAME</p>
          <p className="text-lg font-semibold mt-4">Tag Line:</p>
          <p className="text-gray-400 italic">"The Tasty House"</p>
        </motion.div>
      </motion.div>
      <div className="container mx-auto mt-8 border-t border-gray-700 pt-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-gray-500"
        >
          © {new Date().getFullYear()} Broxden Delight. All rights reserved.
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
