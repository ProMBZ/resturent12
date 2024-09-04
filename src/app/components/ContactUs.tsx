"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({ email: '' });

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { email: '' };
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    setErrors(newErrors);

    if (newErrors.email) {
      // Prevent submission if there are errors
      return;
    }

    // Submission logic here (e.g., sending data to an API)
  };

  return (
    <div className="container mx-auto py-20 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-8">
          <motion.h2
            className="text-5xl font-bold text-white tracking-wide mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input 
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-5 py-3 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-600"
            />
            <input
              type="text"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-5 py-3 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-600"
            />
            <input
              type="email"
              placeholder="Email*"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-5 py-3 border rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-4 ${
                errors.email ? 'border-red-600 focus:ring-red-600' : 'border-gray-600 focus:ring-indigo-600'
              }`}
            />
            {errors.email && (
              <motion.p
                className="text-red-600 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {errors.email}
              </motion.p>
            )}
            <textarea
              placeholder="How can we serve you?"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-5 py-3 border border-gray-600 rounded-lg bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-600"
            ></textarea>
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Submit
            </motion.button>
          </form>
        </div>

        {/* Visit Us Information */}
        <div className="space-y-8 text-gray-300">
          <motion.h2
            className="text-5xl font-bold text-white tracking-wide mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Visit Us
          </motion.h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">Special Requests?</h3>
              <p className="text-lg">Do you have dietary concerns? Questions about an upcoming event? Drop us a line, and we'll get back to you soon!</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Broxden Delight</h3>
              <p className="text-lg">7-9 Whitehall Street, Dundee, DD1 4AA, United Kingdom</p>
              <p className="text-lg">01382 227759</p>
              <p className="text-lg">broxdendelight@gmail.com</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Opening Hours</h3>
              <p className="text-lg">Open 7 days a week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
