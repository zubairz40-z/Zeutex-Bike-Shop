'use client';

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import toast, { Toaster } from "react-hot-toast"; // react-hot-toast

export default function SignupPage() {
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // URL for profile image
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Email/password signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const userCredential = await signup(email, password);
      if (userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: name,
          photoURL: imageUrl || null,
        });
      }
      toast.success("Signup successful!", {
        position: "top-center",
        style: {
          background: "#059669", // teal-600
          color: "#fff",
          fontWeight: "bold",
          padding: "16px",
          borderRadius: "12px",
          fontSize: "16px",
        },
      });
      setName(""); setEmail(""); setPassword(""); setImageUrl("");
    } catch (err) {
      setError(err.message);
      toast.error(err.message, {
        position: "top-center",
        style: {
          background: "#dc2626", // red-600
          color: "#fff",
          fontWeight: "bold",
          padding: "16px",
          borderRadius: "12px",
          fontSize: "16px",
        },
      });
    }
    setLoading(false);
  };

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("Signed up with Google!", {
        position: "top-center",
        style: {
          background: "#059669",
          color: "#fff",
          fontWeight: "bold",
          padding: "16px",
          borderRadius: "12px",
          fontSize: "16px",
        },
      });
    } catch (err) {
      setError(err.message);
      toast.error(err.message, {
        position: "top-center",
        style: {
          background: "#dc2626",
          color: "#fff",
          fontWeight: "bold",
          padding: "16px",
          borderRadius: "12px",
          fontSize: "16px",
        },
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      {/* Toast container */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full max-w-md bg-gray-800 rounded-3xl shadow-2xl p-10 text-white">
        <h1 className="text-3xl font-extrabold mb-6 text-teal-400 text-center">
          Create Account
        </h1>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
            required
          />

          <input
            type="text"
            placeholder="Profile Image URL (optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold hover:from-teal-600 hover:to-teal-700 transition"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full py-3 rounded-xl bg-red-700 text-white font-semibold hover:bg-red-600 transition"
          >
            Sign Up with Google
          </button>
        </form>

        <p className="text-gray-400 text-center mt-6 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-teal-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
