"use client";

import { useState } from "react";

// Bikes data
const bikes = [
  { id: "1", name: "E52", price: 225900, image: "/bikes/e52.png" },
  { id: "2", name: "C32", price: 139900, image: "/bikes/c32.png" },
  { id: "3", name: "A12S", price: 105900, image: "/bikes/a12s.png" },
  { id: "4", name: "A11", price: 89900, image: "/bikes/a11.png" },
  { id: "5", name: "A10", price: 79900, image: "/bikes/a10.png" },
];

// Popular banks in Bangladesh with yearly interest rates
const banks = [
  { name: "BRAC Bank", interest: 0.08 },
  { name: "Dutch-Bangla Bank", interest: 0.09 },
  { name: "City Bank", interest: 0.10 },
  { name: "Eastern Bank", interest: 0.095 },
];

// EMI options in months
const emiMonths = [3, 6, 9, 12];

export default function ExploreEMI() {
  const [selectedBank, setSelectedBank] = useState(banks[0].name);
  const [selectedMonth, setSelectedMonth] = useState(3);

  // Get the interest rate for the selected bank
  const bankInterest = banks.find((b) => b.name === selectedBank)?.interest || 0;

  // Function to calculate EMI using flat interest
  const calculateEMI = (price, months) => {
    const totalInterest = price * bankInterest * (months / 12);
    const totalPayable = price + totalInterest;
    return totalPayable / months;
  };

  return (
    <section className="bg-gray-900 min-h-screen text-white py-16 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
          Explore EMI Plans
        </h1>

        {/* Top Filters: Bank + EMI Month */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          {/* Bank Selector */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <label className="text-gray-300 font-semibold">Choose Bank:</label>
            <select
              className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition"
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
            >
              {banks.map((bank) => (
                <option key={bank.name} value={bank.name}>
                  {bank.name}
                </option>
              ))}
            </select>
          </div>

          {/* EMI Month Selector */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="text-gray-300 font-semibold">Select EMI Duration:</span>
            <div className="flex gap-2">
              {emiMonths.map((month) => (
                <button
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedMonth === month
                      ? "bg-cyan-500 text-black shadow-lg"
                      : "bg-gray-800 hover:bg-gray-700 text-white"
                  }`}
                >
                  {month} Month
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bike Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((bike) => (
            <div
              key={bike.id}
              className="bg-black/20 backdrop-blur-md p-6 rounded-2xl shadow-2xl flex flex-col items-center transition hover:scale-105 duration-300"
            >
              <img src={bike.image} alt={bike.name} className="w-40 h-40 object-contain mb-4" />
              <h2 className="text-2xl font-bold mb-2">{bike.name}</h2>
              <p className="text-gray-300 mb-4">Price: {bike.price.toLocaleString()} BDT</p>

              {/* Show EMI for selected bank + month */}
              <p className="text-cyan-400 font-semibold mt-2 text-center">
                {selectedBank} EMI for {selectedMonth} months:{" "}
                {Math.round(calculateEMI(bike.price, selectedMonth)).toLocaleString()} BDT/month
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
