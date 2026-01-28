"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Bike data
const bikes = [
  {
    name: "E52",
    tagline: "Experience the Future of Electric Mobility",
    speed: "75 km/h",
    range: "130–140 km",
    battery: "96 V 35 Ah",
    motor: "3000 W",
    image: "/bikes/e52.png",
  },
  {
    name: "C32",
    tagline: "Power Meets Precision",
    speed: "60 km/h",
    range: "90 km",
    battery: "72 V 35 Ah",
    motor: "1800 W",
    image: "/bikes/c32.png",
  },
  {
    name: "A12S",
    tagline: "Urban Performance for Daily Commutes",
    speed: "45 km/h",
    range: "85–95 km",
    battery: "72 V 26 Ah",
    motor: "1000 W",
    image: "/bikes/a12s.png",
  },
  {
    name: "A11",
    tagline: "Your Reliable Everyday Commuter",
    speed: "45 km/h",
    range: "75–85 km",
    battery: "60 V 26 Ah",
    motor: "1000 W",
    image: "/bikes/a11.png",
  },
  {
    name: "A10",
    tagline: "City-Friendly, Efficient Ride",
    speed: "35 km/h",
    range: "65–75 km",
    battery: "60 V 26 Ah",
    motor: "1000 W",
    image: "/bikes/a10.png",
  },
];

export default function ExploreProducts() {
  const router = useRouter();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const sectionRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => setSwiperReady(true), []);

  // Motion variants
  const leftVariants = {
    hidden: { x: -150, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  const rightVariants = {
    hidden: { x: 150, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
          Explore Our Bikes
        </h2>

        {swiperReady && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="relative"
          >
            {bikes.map((bike, index) => (
              <SwiperSlide key={index}>
                <div className="grid md:grid-cols-2 gap-6 items-center min-h-[600px]">
                  {/* LEFT SIDE – TEXT */}
                  <motion.div
                    variants={leftVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-col justify-center space-y-6 px-4 md:px-0 z-20"
                  >
                    <motion.h3
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.3 }}
                      className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-teal-600"
                    >
                      {bike.name}
                    </motion.h3>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : {}}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="text-gray-300 text-lg md:text-xl tracking-wide"
                    >
                      {bike.tagline}
                    </motion.p>

                    {/* Specs row */}
                    <motion.div
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } },
                      }}
                      className="grid grid-cols-3 gap-4 mt-4"
                    >
                      <Spec label="Top Speed" value={bike.speed} />
                      <Spec label="Range" value={bike.range} />
                      <Spec label="Battery" value={bike.battery} />
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
                      className="flex flex-wrap gap-4 mt-6 z-20"
                    >
                      <button
                        onClick={() => router.push("/products")}
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-teal-600 text-black font-semibold shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300"
                      >
                        View Details
                      </button>
                      <button className="px-6 py-3 rounded-lg border border-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow hover:shadow-lg">
                        Schedule a Ride
                      </button>
                    </motion.div>
                  </motion.div>

                  {/* RIGHT SIDE – IMAGE */}
                  <motion.div
                    variants={rightVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover={{ scale: 1.05 }}
                    className="flex justify-center items-center z-10"
                  >
                    <img
                      src={bike.image}
                      alt={bike.name}
                      className="w-full max-w-[500px] object-contain drop-shadow-2xl transition-transform duration-500"
                    />
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Custom navigation buttons */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 text-4xl md:text-5xl text-cyan-400 cursor-pointer select-none px-2 py-2 hover:text-cyan-200 transition-colors  bg-opacity-30 rounded-full shadow-lg"
        >
          &#8249;
        </button>
        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 text-4xl md:text-5xl text-cyan-400 cursor-pointer select-none px-2 py-2 hover:text-cyan-200 transition-colors bg-opacity-30 rounded-full shadow-lg"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}

// SPEC COMPONENT
function Spec({ label, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="text-center bg-gray-800 bg-opacity-30 p-4 rounded-lg shadow-md"
    >
      <p className="text-sm text-gray-300">{label}</p>
      <p className="text-xl md:text-2xl font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
        {value}
      </p>
    </motion.div>
  );
}
