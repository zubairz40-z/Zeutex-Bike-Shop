"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "../data/mockProducts";

export default function ProductsPage() {
  return (
    <section className="min-h-screen bg-gray-900 py-16 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-teal-500 text-center mb-12 tracking-wide">
          Our Bikes
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((bike) => (
            <div
              key={bike.id}
              className="relative bg-black/20 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-3xl group"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 bg-gradient-to-b from-gray-800 via-gray-900 to-black flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <Image
                  src={bike.image}
                  alt={bike.name}
                  fill
                  style={{ objectFit: "contain" }}
                  className="z-10 p-4"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col gap-3">
                <h2 className="text-2xl font-bold text-white group-hover:text-teal-400 transition">
                  {bike.name}
                </h2>
                <p className="text-gray-300 text-sm">{bike.tagline}</p>
                <p className="text-teal-400 font-bold text-lg">{bike.price}</p>
                <Link
                  href={`/products/${bike.id}`}
                  className="mt-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-center py-2 rounded-xl font-semibold shadow-md hover:shadow-lg hover:from-teal-600 hover:to-teal-700 transition"
                >
                  View Details
                </Link>
              </div>

              {/* Floating Effect */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-teal-500/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
