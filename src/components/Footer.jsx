import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importing social media icons


export function Footer() {
  return (
    <footer className="text-red bg-blue-200 py-12">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl font-bold">PP Cake Shop</h1>
            <p className="mt-2 text-gray-800">
              Baking happiness for your special moments!
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="/home" className="hover:underline text-red hover:text-cyan-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline text-black hover:text-cyan-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline text-black hover:text-cyan-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:underline text-black hover:text-cyan-400">
                  Cart
                </a>
              </li>
            </ul>
          </div>

        
          <div className="text-center md:text-right">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="flex justify-center md:justify-end mt-4 space-x-4">
              {/* Social Media Icons */}
              <a
                href="https://facebook.com"
                className="text-black hover:text-cyan-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://instagram.com"
                className="text-black hover:text-cyan-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://twitter.com"
                className="text-black hover:text-cyan-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12 border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} PP Cake Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
