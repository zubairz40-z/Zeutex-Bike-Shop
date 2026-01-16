"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../app/context/AuthContext";
import Logo from "./Logo";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent px-6 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative w-36 h-16">
          <Logo />
        </div>
      </Link>

      <div className="hidden lg:flex items-center gap-6">
        <Link
          href="/products"
          className="text-white text-md font-medium hover:text-cyan-400 transition-colors duration-300"
        >
          Products
        </Link>

        {isLoggedIn ? (
          <>
            <FaUserCircle className="text-white w-6 h-6" />
            <Link
              href="/add-item"
              className="btn btn-outline px-6 py-3 text-md font-medium border-white text-white hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Add Product
            </Link>
            <button
              onClick={handleLogout}
              className="btn btn-primary px-6 py-3 text-md font-medium bg-white text-black hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="btn btn-primary px-6 py-3 text-md font-medium bg-white text-black hover:bg-cyan-400 hover:text-white transition-all duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
