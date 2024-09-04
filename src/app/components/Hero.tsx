import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <Image
        src="/resturant.jpeg" // Ensure this path is correct
        alt="Restaurant"
        layout="fill" // This makes the image cover the entire div
        objectFit="cover" // Ensures the image covers the div without stretching
        quality={100} // Set image quality
        priority // This makes sure the image loads first
        className="object-cover"
      />
    </div>
  );
};

export default Hero;
