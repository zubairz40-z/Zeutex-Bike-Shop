"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-gray-900 py-20 px-4 lg:px-16 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/img50.jpg" // Replace with actual image
            alt="About Zeutex Electric Bikes"
            fill
            className="object-cover"
            priority
          />
          {/* Optional subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
            About Zeutex Electric Bikes
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Zeutex is redefining urban mobility with sleek, high-performance electric bikes. Our mission is to deliver a **premium, eco-friendly, and cost-efficient ride** that makes daily commuting effortless and enjoyable.
          </p>
          <p className="text-gray-300 text-sm md:text-base">
            Equipped with **cutting-edge battery technology, smart connectivity, and silent motors**, Zeutex bikes offer a **smooth and sustainable experience** for riders who value style, efficiency, and innovation.
          </p>
          <p className="text-gray-300 text-sm md:text-base">
            Join the Zeutex revolution and experience the **future of urban transport** — where performance meets sustainability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
