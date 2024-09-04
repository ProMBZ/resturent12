"use client"; // This ensures that the component runs in a browser environment
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const AboutUs = () => {
  return (
    <div id="about" className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between p-8">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2"
      >
        <Image
          src="/abouts.jpeg" // Ensure this path is correct
          alt="Restaurant"
          height={700}
          width={700}
          className="rounded-full shadow-lg"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-12"
      >
        <h1 className="text-5xl font-semibold text-white mb-6">
          About Us - Broxden Delight
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Welcome to Broxden Delight, the ultimate destination for fast food lovers in Perth! 
          Located at Broxden Avenue, Perth, Perthshire, PH2 0PX, our restaurant has been serving up delicious meals since November 2023. 
          We are proud to be a go-to spot for locals and visitors alike, offering a mouthwatering menu that satisfies all cravings.
          <br /><br />
          At Broxden Delight, we believe in the power of great food to bring people together. 
          Whether you're grabbing a quick bite on the go or enjoying a meal with friends and family, 
          we promise a dining experience that&apos;s as delightful as our name. 
          Our team, led by Mr. Adrian Venoin, is dedicated to providing you with fast, friendly service 
          and food that keeps you coming back for more.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
