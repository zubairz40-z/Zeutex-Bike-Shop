'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../app/context/AuthContext";
import Logo from "./Logo";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <div className="relative w-36 h-16">
          <Logo />
        </div>
      </Link>

      {/* Nav Links */}
      <div className="hidden lg:flex items-center gap-4">
        <Link
          href="/products"
          className="text-teal-600 text-md font-medium hover:text-teal-500 transition"
        >
          Products
        </Link>

        {user ? (
          <>
            {/* Add Item (Trade Bike) */}
            <Link
              href="/add-item"
              className="px-5 py-2 text-md font-medium border border-teal-600 text-teal-600 rounded-sm hover:bg-teal-600 hover:text-white transition"
            >
              Trade Bike
            </Link>

            {/* Profile Image */}
            {user.photoURL ? (
              <Image
                src={user.photoURL}
                alt={user.displayName || "Profile"}
                width={40}
                height={40}
                className="rounded-full border-2 border-teal-600 object-cover"
              />
            ) : (
              <FaUserCircle className="text-teal-600 w-9 h-9" />
            )}

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="px-5 py-2 text-md font-medium bg-teal-600 text-white rounded-sm hover:bg-teal-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="px-5 py-2 text-md font-medium bg-teal-600 text-white rounded-sm hover:bg-teal-700 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2 text-md font-medium border border-teal-600 text-teal-600 rounded-sm hover:bg-teal-500 hover:text-black transition"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
