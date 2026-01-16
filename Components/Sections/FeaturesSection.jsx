"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FeaturesSection() {
  return (
    <section className="bg-gray-900 py-4 px-4 lg:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400"
        >
          Our Features
        </motion.h4>

        {/* Image Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative group w-full h-[480px] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              {/* Image */}
              <Image
                src={feature.image}
                alt="Feature Image"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={index < 2}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-cyan-400/0 group-hover:ring-cyan-400/40 transition-all duration-500" />

              {/* Floating Accent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-6 left-6 text-sm font-medium text-cyan-300 tracking-wide"
              >
                Premium Electric Design
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const features = [
  { image: "/image(green).jpg" },
  { image: "/img2.jpg" },
  { image: "/img3.jpg" },
  { image: "/image(4).jpg" },
];
