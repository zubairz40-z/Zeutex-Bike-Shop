"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const { isLoggedIn, login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded credentials
  const MOCK_EMAIL = "user@example.com";
  const MOCK_PASSWORD = "Zeutex@2026";

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
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
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Background glow effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-600/10 blur-3xl rounded-full" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-gray-900/90 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl p-8 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center text-white">
          Login to <span className="text-teal-500">Zeutex</span>
        </h1>

        {/* Error */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:from-teal-600 hover:to-teal-700 hover:shadow-xl transition"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
