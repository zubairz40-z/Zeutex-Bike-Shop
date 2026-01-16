"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded credentials
  const MOCK_EMAIL = "test@example.com";
  const MOCK_PASSWORD = "password123";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      // Mark user as logged in
      Cookies.set("auth", "true", { expires: 1 });
      router.push("/products"); // Redirect to Products page
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background overlay */}
      <div className="absolute w-full h-full bg-gray-900"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-6">
          Login to Zeutex
        </h1>

        {/* Error message */}
        {error && <p className="text-red-400 mb-4">{error}</p>}

        {/* Login form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-black/50 p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          {/* Email Field */}
          <div className="flex flex-col text-left">
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
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col text-left">
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
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <button className="bg-teal-600 text-white py-3 rounded font-semibold hover:bg-teal-700 transition">
            Login
          </button>
        </form>

        {/* Demo credentials info */}
        <p className="mt-4 text-sm text-gray-300">
          Use <strong>test@example.com / password123</strong>
        </p>
      </div>
    </section>
  );
}
