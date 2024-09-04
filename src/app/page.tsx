import React from 'react'
import Hero from './components/Hero'
import Image from 'next/image'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
const page = () => {
  return (
    <div>  <Image
    src="/resturant.jpeg" // Ensure this path is correct
    alt="Restaurant"
    layout="fill" // This makes the image cover the entire div
    objectFit="cover" // Ensures the image covers the div without stretching
    quality={100} // Set image quality
    priority // This makes sure the image loads first
  />

      <Hero />
      <br />
      <br />
      <br />
      <AboutUs />
      <br />
      <br />
      <br />
      <ContactUs />
      <Footer />
      </div>
  )
}

export default page
