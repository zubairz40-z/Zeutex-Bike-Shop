"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero({ id }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 10;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 30) {
        video.currentTime = 10;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section id={id} className="relative w-full h-screen overflow-hidden">
      {/* Hero Video */}
      <video
        ref={videoRef}
        className="absolute w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop={false}
        playsInline
        poster="/images/hero-fallback.jpg"
      />
      <div className="absolute w-full h-full bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Ride Smart. Ride Zeutex.
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white drop-shadow-md max-w-xl">
          Experience the future of e-bikes with intelligent mobility, comfort, and speed.
        </p>
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <Link href="/schedule-ride" className="btn btn-primary btn-lg px-8 py-3">
            Book a Ride
          </Link>
          <Link
            href="/products"
            className="btn btn-outline btn-lg px-8 py-3 text-white border-white hover:bg-white hover:text-black"
          >
            Explore Bikes
          </Link>
        </div>
      </div>
    </section>
  );
}
