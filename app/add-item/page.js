'use client';

import { useState } from "react";

export default function AddItemPage() {
  const [form, setForm] = useState({
    oldBikeName: "",
    oldBikeModel: "",
    condition: "",
    yearsUsed: "",
    expectedTopUp: "",
    newBikeInterest: "",
    imageUrl: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trade Request Submitted:", form);
    alert("Trade request submitted successfully!");

    setForm({
      oldBikeName: "",
      oldBikeModel: "",
      condition: "",
      yearsUsed: "",
      expectedTopUp: "",
      newBikeInterest: "",
      imageUrl: "",
      notes: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl bg-gray-800 rounded-3xl shadow-2xl p-10 text-white">
        <h1 className="text-3xl font-extrabold text-teal-400 text-center mb-6">
          Trade Your Old Bike
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Submit your old bike details and trade it for a brand new one.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="oldBikeName"
            placeholder="Old Bike Name"
            value={form.oldBikeName}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-gray-700 placeholder-gray-300 focus:ring-2 focus:ring-teal-400 outline-none"
          />

          <input
            type="text"
            name="oldBikeModel"
            placeholder="Model / Year"
            value={form.oldBikeModel}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-gray-700 placeholder-gray-300 focus:ring-2 focus:ring-teal-400 outline-none"
          />

          <select
            name="condition"
            value={form.condition}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-teal-400 outline-none"
          >
            <option value="">Bike Condition</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>

          <input
            type="number"
            name="yearsUsed"
            placeholder="Years Used"
            value={form.yearsUsed}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-gray-700 placeholder-gray-300 focus:ring-2 focus:ring-teal-400 outline-none"
          />

          <input
            type="number"
            name="expectedTopUp"
            placeholder="Expected Top-up Amount (BDT)"
            value={form.expectedTopUp}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-gray-700 placeholder-gray-300 focus:ring-2 focus:ring-teal-400 outline-none"
          />

          <input
            type="text"
            name="newBikeInterest"
            placeholder="New Bike You Want (Model)"
            value={form.newBikeInterest}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-gray-700 placeholder-gray-300 focus:ring-2 focus:ring-teal-400 outline-none"
          />

          <input
            type="text"
            name="imageUrl"
            placeholder="Old Bike Image URL (optional)"
            value={form.imageUrl}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-gray-700 placeholder-gray-300 focus:ring-2 focus:ring-teal-400 outline-none"
          />

          <textarea
            name="notes"
            placeholder="Additional Notes (damage, upgrades, etc.)"
            value={form.notes}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded-xl bg-gray-700 placeholder-gray-300 focus:ring-2 focus:ring-teal-400 outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 font-semibold hover:from-teal-600 hover:to-teal-700 transition"
          >
            Submit Trade Request
          </button>
        </form>
      </div>
    </div>
  );
}
