"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

// Example testimonials with external avatar URLs
const testimonials = [
  {
    name: "Zubair Ibne Zahir",
    city: "Dhaka",
    review:
      "I never thought commuting could be this smooth. The E52 makes my daily rides effortless, and the battery lasts all week!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Maisha Noor",
    city: "Chittagong",
    review:
      "Riding the C32 feels like driving a futuristic bike. It's stylish, powerful, and turns heads wherever I go!",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Rahat Hossain",
    city: "Sylhet",
    review:
      "The A12S is perfect for city commutes. Compact, quiet, and reliable—I can’t imagine going back to a regular bike.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Sadia Noor",
    city: "Khulna",
    review:
      "I love how eco-friendly and smooth the A11 rides. It's become my favorite way to travel around the city without stress.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Arif Rahman",
    city: "Barishal",
    review:
      "The A10 is a perfect city commuter. Affordable, lightweight, and surprisingly fast. I highly recommend it!",
    avatar: "https://randomuser.me/api/portraits/men/72.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
          What Our Riders Say
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testi, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800 bg-opacity-30 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center text-center h-full"
              >
                {/* Avatar */}
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-cyan-400"
                />

                {/* Review */}
                <p className="text-gray-200 italic mb-4">"{testi.review}"</p>

                {/* Name & City */}
                <h4 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
                  {testi.name}
                </h4>
                <p className="text-sm text-gray-400">{testi.city}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
