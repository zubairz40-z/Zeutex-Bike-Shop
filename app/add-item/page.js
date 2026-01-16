"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function AddItemPage() {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  // Form state
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    speed: "",
    range: "",
    battery: "",
    motor: "",
    price: "",
    image: "",
  });

  const [success, setSuccess] = useState("");

  // Check authentication
  useEffect(() => {
    const auth = Cookies.get("auth");
    if (!auth) {
      router.push("/login");
    } else {
      setAuthChecked(true);
    }
  }, [router]);

  if (!authChecked) return null;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Bike Added:", form);

    setSuccess("Bike added successfully!");

    // Reset form
    setForm({
      name: "",
      tagline: "",
      speed: "",
      range: "",
      battery: "",
      motor: "",
      price: "",
      image: "",
    });
  };

  return (
    <section className="min-h-screen bg-gray-900 py-16 px-4 lg:px-16">
      <div className="max-w-4xl mx-auto text-white">
        <h1 className="text-4xl font-bold mb-8">Add New e-Bike</h1>

        {success && (
          <p className="mb-6 text-green-400 font-semibold">{success}</p>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/70 p-8 rounded-lg shadow-lg"
        >
          {/* Bike Name */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Bike Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g., Revoo E52"
              required
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            />
          </div>

          {/* Tagline */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Tagline</label>
            <input
              type="text"
              name="tagline"
              value={form.tagline}
              onChange={handleChange}
              placeholder="Experience the Future of Electric Mobility"
              required
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            />
          </div>

          {/* Top Speed */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Top Speed</label>
            <input
              type="text"
              name="speed"
              value={form.speed}
              onChange={handleChange}
              placeholder="e.g., 75 km/h"
              required
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            />
          </div>

          {/* Range */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Range</label>
            <input
              type="text"
              name="range"
              value={form.range}
              onChange={handleChange}
              placeholder="e.g., 130-140 km"
              required
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            />
          </div>

          {/* Battery */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Battery</label>
            <input
              type="text"
              name="battery"
              value={form.battery}
              onChange={handleChange}
              placeholder="e.g., 96 V 35 Ah"
              required
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            />
          </div>

          {/* Motor */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Motor</label>
            <input
              type="text"
              name="motor"
              value={form.motor}
              onChange={handleChange}
              placeholder="e.g., 3000 W"
              required
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Price</label>
            <input
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="e.g., 225,900 BDT"
              required
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            />
          </div>

          {/* Image URL */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="e.g., /bikes/e52.png"
              required
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button className="w-full bg-teal-600 text-white py-3 rounded font-semibold hover:bg-teal-700 transition">
              Add Bike
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
