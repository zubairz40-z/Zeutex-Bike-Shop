"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const bikes = [
  {
    name: "E52",
    tagline: "Shaping the Future",
    speed: "75 km/h",
    range: "130–140 km",
    battery: "96 V 35 Ah",
    motor: "3000 W",
    image: "/bikes/e52.png",
  },
  {
    name: "C32",
    tagline: "Built for Power",
    speed: "60 km/h",
    range: "90 km",
    battery: "72 V 35 Ah",
    motor: "1800 W",
    image: "/bikes/c32.png",
  },
  {
    name: "A12S",
    tagline: "Urban Midrange",
    speed: "45 km/h",
    range: "85–95 km",
    battery: "72 V 26 Ah",
    motor: "1000 W",
    image: "/bikes/a12s.png",
  },
  {
    name: "A11",
    tagline: "Everyday Commuter",
    speed: "45 km/h",
    range: "75–85 km",
    battery: "60 V 26 Ah",
    motor: "1000 W",
    image: "/bikes/a11.png",
  },
  {
    name: "A10",
    tagline: "City Commuter",
    speed: "35 km/h",
    range: "65–75 km",
    battery: "60 V 26–30 Ah",
    motor: "1000 W",
    image: "/bikes/a10.png",
  },
];

export default function ExploreProducts() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
          Explore Our Bikes
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
        >
          {bikes.map((bike, index) => (
            <SwiperSlide key={index}>
              <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
                
                {/* LEFT SIDE – TEXT CONTENT */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col justify-center space-y-8 px-4 md:px-0"
                >
                  <h3 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-teal-600">
                    {bike.name}
                  </h3>
                  <p className="uppercase text-gray-300 tracking-wider">{bike.tagline}</p>

                  {/* Specs row */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.15 } },
                    }}
                    className="grid grid-cols-3 gap-3 mt-2"
                  >
                    <Spec label="Top Speed" value={bike.speed} />
                    <Spec label="Range" value={bike.range} />
                    <Spec label="Capacity" value={bike.battery} />
                  </motion.div>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-wrap gap-4 mt-6"
                  >
                    <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-teal-600 text-black font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
                      View Details
                    </button>
                    <button className="px-6 py-3 rounded-lg border border-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow hover:shadow-lg">
                      Schedule a Ride
                    </button>
                  </motion.div>
                </motion.div>

                {/* RIGHT SIDE – BIKE IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex justify-center items-center"
                >
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full max-w-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Spec({ label, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center bg-gray-800 bg-opacity-30 p-4 rounded-lg shadow-md"
    >
      <p className="text-sm text-gray-300">{label}</p>
      <p className="text-xl md:text-2xl font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
        {value}
      </p>
    </motion.div>
  );
}
