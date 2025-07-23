"use client";
import { motion } from "framer-motion";
import {
  FaTruck,
  FaHeadset,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <FaTruck className="text-green-500 text-2xl mr-2" />
              <h3 className="text-xl font-bold text-green-400">Excel Parcel</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Fast, reliable, and secure courier services across the nation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-green-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Track Shipment", href: "#" },
                { name: "Calculate Cost", href: "#" },
                { name: "Services", href: "#" },
                { name: "Coverage Area", href: "#" },
                { name: "Become an Agent", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-green-400 mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Same Day Delivery",
                "Next Day Delivery",
                "International Shipping",
                "Warehouse Storage",
                "Fragile Handling",
                "Document Courier",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-green-400 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaHeadset className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">24/7 Customer Support</p>
                  <p className="text-gray-400">+880 1234 567890</p>
                </div>
              </div>
              <div className="flex items-start">
                <MdEmail className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Email Us</p>
                  <p className="text-gray-400">support@courierpathao.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Head Office</p>
                  <p className="text-gray-400">123 Business Avenue, Dhaka 1212</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-green-400 mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-300">
                Get updates on special offers and courier news.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-900 w-full"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} CourierPathao. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};