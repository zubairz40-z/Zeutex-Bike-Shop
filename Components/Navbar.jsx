"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent px-6 py-4 flex items-center justify-between">
      
      {/* Left: Logo */}
      <Link href="/" className="flex items-center">
        <div className="relative w-36 h-16">
          <Logo />
        </div>
      </Link>

      {/* Right: Desktop Links + Login Button */}
      <div className="hidden lg:flex items-center gap-6">
        <Link
          href="/products"
          className="text-white text-md font-medium hover:text-cyan-400 transition-colors duration-300"
        >
          Products
        </Link>

        <Link
          href="/login"
          className="btn btn-primary px-6 py-3 text-md font-medium bg-white text-black hover:bg-cyan-400 hover:text-white transition-all duration-300"
        >
          Login
        </Link>
      </div>

      {/* Mobile Dropdown */}
      <div className="lg:hidden flex items-center">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-2 p-2 shadow-lg bg-black/70 rounded-box w-52 text-white"
          >
            <li>
              <Link href="/products" className="text-md">
                Products
              </Link>
            </li>
            <li>
              <Link href="/add-item" className="text-md">
                Add Product
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="btn mt-2 w-full text-md bg-cyan-400 text-black hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
