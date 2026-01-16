"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HowItWorksSection({ id }) {
  return (
    <section id={id} className="bg-gray-900 py-20 px-4 lg:px-16 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
            How It Works
          </h2>
          <p className="mt-3 text-gray-400 text-sm md:text-base">
            Simple steps to switch to smarter, cleaner electric mobility
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } } }}
              whileHover={{ scale: 1.04 }}
              className="relative group h-[420px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer will-change-transform"
            >
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
                quality={90}
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
              <div className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/90 text-black">
                Step {index + 1}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-200 leading-relaxed">{step.description}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-cyan-400/0 group-hover:ring-cyan-400/40 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl p-8 text-center text-black shadow-2xl"
        >
          <h4 className="text-2xl font-bold mb-2">Ride More. Spend Less. Stay Eco-Friendly.</h4>
          <p className="text-sm md:text-base font-medium">No petrol • No noise • No stress • Just smooth electric rides</p>
        </motion.div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Charge at Home",
    description: "Plug in your electric bike at night using a normal household power socket.",
    image: "/image(5).jpg",
  },
  {
    title: "Ride Daily",
    description: "Enjoy smooth, silent rides with zero fuel cost and ultra-low maintenance.",
    image: "/images(8).jpg",
  },
  {
    title: "Save Every Month",
    description: "Cut petrol expenses and service costs while protecting the environment.",
    image: "/image(7).jpg",
  },
];
