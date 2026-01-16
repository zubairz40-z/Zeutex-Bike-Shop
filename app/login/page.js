"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext"; // Auth context
import toast, { Toaster } from "react-hot-toast"; // Toast notifications

export default function LoginPage() {
  const router = useRouter();
  const { isLoggedIn, login } = useAuth(); // login function from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded credentials
  const MOCK_EMAIL = "user@example.com";
  const MOCK_PASSWORD = "Zeutex@2026";

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/"); // redirect to home
    }
  }, [isLoggedIn, router]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      login();
      toast.success("Login successful!", { duration: 3000 });
      setTimeout(() => router.push("/"), 300);
    } else {
      setError("Invalid email or password");
      toast.error("Invalid email or password", { duration: 3000 });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-800 via-black to-gray-800 flex items-center justify-center px-4">
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col gap-6">
        <h1 className="text-3xl md:text-3xl font-bold text-white drop-shadow-lg text-center">
          Login to Zeutex
        </h1>

        {/* Error message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-white mb-1 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            />
          </div>

          <button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:from-teal-600 hover:to-teal-700 transition mt-2">
            Login
          </button>
        </form>

    
      </div>
    </section>
  );
}
