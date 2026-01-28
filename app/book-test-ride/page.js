"use client";

import { useState } from "react";
import Image from "next/image";
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
    <section className="relative min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-white py-20 px-4 lg:px-16 overflow-hidden">
      {/* Soft Background Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-400/25 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600 text-center mb-4">
          Book a Test Ride
        </h1>

        <p className="text-gray-600 text-center mb-16 text-lg">
          Choose your bike. Pick a date. Experience the ride.
        </p>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: BIKE PREVIEW */}
          <div className="relative rounded-3xl bg-white/70 border border-gray-200 backdrop-blur-xl p-6 shadow-xl">
            <div className="relative w-full h-[420px] flex items-center justify-center">
              {selectedBike ? (
                <Image
                  src={selectedBike.image}
                  alt={selectedBike.name}
                  fill
                  className="object-contain p-6"
                />
              ) : (
                <p className="text-gray-500 text-lg text-center">
                  Select a bike to preview 🚲
                </p>
              )}
            </div>

            {selectedBike && (
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-teal-600">
                  {selectedBike.name}
                </h3>
                <p className="text-gray-500 mt-1">
                  {selectedBike.tagline}
                </p>
                <p className="text-gray-900 font-semibold mt-2">
                  {selectedBike.price}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT: FORM */}
          <form
            onSubmit={handleSubmit}
            className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl p-8 space-y-6"
          >
            {/* Accent Glow */}
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-teal-400/30 rounded-full blur-3xl pointer-events-none" />

            {/* Name */}
            <div>
              <label className="text-gray-700 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full mt-2 bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-700 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-gray-700 text-sm font-medium">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full mt-2 bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* Bike */}
            <div>
              <label className="text-gray-700 text-sm font-medium">
                Select Bike
              </label>
              <select
                name="bike"
                required
                value={form.bike}
                onChange={handleChange}
                className="w-full mt-2 bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:border-teal-500 focus:outline-none"
              >
                <option value="">Choose a model</option>
                {products.map((bike) => (
                  <option key={bike.id} value={bike.id}>
                    {bike.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="text-gray-700 text-sm font-medium">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                min={format(tomorrow, "yyyy-MM-dd")}
                required
                value={form.date}
                onChange={handleChange}
                className="w-full mt-2 bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:border-teal-500 focus:outline-none"
              />
            </div>

            {/* Location */}
            <div>
              <label className="text-gray-700 text-sm font-medium">
                Location
              </label>
              <input
                type="text"
                name="location"
                required
                value={form.location}
                onChange={handleChange}
                className="w-full mt-2 bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:border-teal-500 focus:outline-none"
              />
            </div>

            {error && <p className="text-red-500 font-medium">{error}</p>}
            {success && <p className="text-green-600 font-medium">{success}</p>}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-xl font-bold hover:scale-[1.02] transition"
            >
              Book Test Ride 
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
