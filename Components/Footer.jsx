"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LOGO & ABOUT */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center">
           <div className="relative w-36 h-16">
                    <Logo />
                  </div>
          </Link>
          <p className="text-gray-400 text-sm">
            Explore our electric bikes, book test rides, and experience smooth, eco-friendly mobility with Zeutex.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            Home
          </Link>
          <Link href="/products" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            Products
          </Link>
          <Link href="/add-item" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            Add Product
          </Link>
          <Link href="/login" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
            Login
          </Link>
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="text-gray-400 text-sm">Email: support@zeutex.com</p>
          <p className="text-gray-400 text-sm">Phone: +880 123 456 789</p>
          <p className="text-gray-400 text-sm">Address: Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Zeutex E-Bike. All rights reserved.
      </div>
    </footer>
  );
}
