"use client";

import { useState } from "react";
import { format, addDays, isBefore } from "date-fns";
import { products } from "@/app/data/mockProducts";

export default function BookTestRidePage() {
  const tomorrow = addDays(new Date(), 1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bike: "",
    date: "",
    location: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isBefore(new Date(form.date), tomorrow)) {
      setError("Please select a future date for the test ride.");
      return;
    }

    console.log("Test Ride Booked:", form);
    setSuccess("🚴 Test ride booked successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      bike: "",
      date: "",
      location: "",
    });
  };

  const selectedBike = products.find((b) => b.id === form.bike);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 lg:px-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600 text-center mb-4">
          Book a Test Ride
        </h1>

        <p className="text-gray-400 text-center mb-12 text-lg">
          Choose your bike. Pick a date. Experience the future.
        </p>
 
       <div>
        
       </div>
        <form
          onSubmit={handleSubmit}
          className="relative bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_60px_-15px_rgba(45,212,191,0.4)] p-8 space-y-6"
        >
          {/* Accent Glow */}
          <div className="absolute -top-8 -right-8 w-28 h-28 bg-teal-500/30 rounded-full blur-3xl animate-pulse pointer-events-none" />

          {/* Name */}
          <div>
            <label className="text-gray-300 text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full mt-2 bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full mt-2 bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-gray-300 text-sm">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="+880XXXXXXXXX"
              className="w-full mt-2 bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Bike Select */}
          <div>
            <label className="text-gray-300 text-sm">Select Bike</label>
            <select
              name="bike"
              required
              value={form.bike}
              onChange={handleChange}
              className="w-full mt-2 bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500"
            >
              <option value="">Choose a model</option>
              {products.map((bike) => (
                <option key={bike.id} value={bike.id}>
                  {bike.name}
                </option>
              ))}
            </select>
          </div>

          {/* Selected Bike Preview */}
          {selectedBike && (
            <div className="p-4 rounded-xl bg-black/40 border border-gray-700">
              <p className="text-teal-400 font-bold">{selectedBike.name}</p>
              <p className="text-gray-400 text-sm">{selectedBike.tagline}</p>
              <p className="text-white font-semibold mt-1">
                {selectedBike.price}
              </p>
            </div>
          )}

          {/* Date */}
          <div>
            <label className="text-gray-300 text-sm">Preferred Date</label>
            <input
              type="date"
              name="date"
              min={format(tomorrow, "yyyy-MM-dd")}
              required
              value={form.date}
              onChange={handleChange}
              className="w-full mt-2 bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500"
            />

            {form.date && (
              <p className="text-teal-400 text-sm mt-2">
                📅 {format(new Date(form.date), "EEEE, MMMM d, yyyy")}
              </p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="text-gray-300 text-sm">Test Ride Location</label>
            <input
              type="text"
              name="location"
              required
              value={form.location}
              onChange={handleChange}
              placeholder="Dhaka, Chattogram, etc."
              className="w-full mt-2 bg-gray-900/80 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Messages */}
          {error && <p className="text-red-400 font-medium">{error}</p>}
          {success && <p className="text-green-400 font-medium">{success}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-teal-500 via-teal-400 to-teal-600 text-black py-3 rounded-xl font-bold tracking-wide shadow-lg hover:shadow-teal-500/40 hover:scale-[1.02] transition"
          >
            Book Test Ride 
          </button>
        </form>
      </div>
    </section>
  );
}
