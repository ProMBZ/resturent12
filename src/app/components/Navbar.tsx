"use client";
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Hero from './Hero';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("home") // Set initial active state to "home"

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleMenuClick = (menu:any) => {
    setActive(menu)
    setIsOpen(false) // Close sidebar on mobile when a menu item is clicked
  }

  useEffect(() => {
    setActive("home"); // Ensure "home" is highlighted by default on page load
  }, []);

  return (
    <div className='bg-transparent  flex items-center justify-between py-4 px-4 sticky top-0 z-50'

>

      <div className='md:hidden flex justify-center w-full'>
        <FaBars className='text2 cursor-pointer' style={{ fontSize: '1.5rem', fontWeight: 'lighter' }} onClick={toggleSidebar} />
      </div>
      <div className=' text-left md:text-center'>
  
      
        <a href="/" className='text4 text-2xl md:text-3xl whitespace-nowrap font-light mb-3'>Broxden Delight</a> {/* Restaurant name with thin font */}
      </div>
      <div className='hidden md:flex justify-center items-center flex-grow'>
        <a
          href="#home"
          onClick={() => handleMenuClick('home')}
          className={`text1 text-white mx-2 text-xl font-light ${active === 'home' ? 'text-black font-bold' : 'font-light opacity-50'}`}
        >
          HOME
        </a>
        <a
          href="#hours"
          onClick={() => handleMenuClick('hours')}
          className={`text1 mx-2 text-xl font-light ${active === 'hours' ? 'text-black font-bold' : 'font-light opacity-50'}`}
        >
          HOURS
        </a>
        <a
          href="#about"
          onClick={() => handleMenuClick('about')}
          className={`text1 mx-2 text-xl font-light ${active === 'about' ? 'text-black font-bold' : 'font-light opacity-50'}`}
        >
          ABOUT
        </a>
        <a
          href="#contact"
          onClick={() => handleMenuClick('contact')}
          className={`text1 mx-2 text-xl font-light ${active === 'contact' ? 'text-black font-bold' : 'font-light opacity-50'}`}
        >
          CONTACT
        </a>
        <a
          href="#menu"
          onClick={() => handleMenuClick('menu')}
          className={`text1 mx-2 text-xl font-light ${active === 'menu' ? 'text-black font-bold' : 'font-light opacity-50'}`}
        >
          MENU
        </a>
        <a
          href="#pricing"
          onClick={() => handleMenuClick('pricing')}
          className={`text1 mx-2 text-xl font-light ${active === 'pricing' ? 'text-black font-bold' : 'font-light opacity-50'}`}
        >
          PRICING
        </a>
      </div>
      <div className='hidden md:block text-white'>
        <a href="/" className='text text-3xl font-light '>0141611231</a> {/* Phone number with thin font */}
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
        <div className='p-4'>
          <FaTimes className='text5 cursor-pointer ml-64' onClick={toggleSidebar} />
      
          <a
            href="#home"
            onClick={() => handleMenuClick('home')}
            className={` text-xl block mb-3 font-semibold ml-12  ${active === 'home' ? 'text-black font-bold' : 'font-light opacity-50'}`}
          >
            HOME
          </a>
          <hr className='border-t-2 w-full mb-6' />
          <a
            href="#hours"
            onClick={() => handleMenuClick('hours')}
            className={`text-xl block mb-3 font-semibold ml-12 ${active === 'hours' ? 'text-black font-bold' : 'font-light opacity-50'}`}
          >
            HOURS
          </a>
          <hr className='border-t-2  w-full mb-6' />
          <a
            href="#about"
            onClick={() => handleMenuClick('about')}
            className={`text-xl  block mb-3 font-semibold ml-12 ${active === 'about' ? 'text-black font-bold' : 'font-light opacity-50'}`}
          >
            ABOUT
          </a>
          <hr className='border-t-2  w-full mb-6' />
          <a
            href="#contact"
            onClick={() => handleMenuClick('contact')}
            className={`text-xl block mb-3 font-semibold ml-12 ${active === 'contact' ? 'text-black font-bold' : 'font-light opacity-50'}`}
          >
            CONTACT
          </a>
          <hr className='border-t-2  w-full mb-6' />
          <a
            href="#menu"
            onClick={() => handleMenuClick('menu')}
            className={`text-xl  block mb-3 font-semibold ml-12 ${active === 'menu' ? 'text-black font-bold' : 'font-light opacity-50'}`}
          >
            MENU
          </a>
          <hr className='border-t-2  w-full mb-6' />
          <a
            href="#pricing"
            onClick={() => handleMenuClick('pricing')}
            className={`text-xl mb-3 block font-semibold ml-12 ${active === 'pricing' ? 'text-black font-bold' : 'font-light opacity-50'}`}
          >
            PRICING
          </a>
          <br /><br />
          <a href="/" className='text text-3xl font-light md:hidden text-center ml-11'>0141611231</a>
          <br /><br />
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
