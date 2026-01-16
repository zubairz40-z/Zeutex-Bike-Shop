"use client";

import { useState } from "react";
import Link from "next/link";

export default function FAQCTASection({ id }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is the battery life of the bikes?", answer: "Our bikes offer 80–140 km per full charge depending on the model and riding conditions." },
    { question: "How long does it take to charge the bike?", answer: "Charging from 0% to 100% takes 4–6 hours using a normal household socket." },
    { question: "Is there a warranty?", answer: "Yes! All bikes come with a 2-year warranty covering the battery and motor." },
    { question: "Are EMI plans available?", answer: "Yes, flexible EMI options are available to make your purchase easy and affordable." },
    { question: "Where are the service centers located?", answer: "We have authorized service centers in all major cities across Bangladesh." },
  ];

  return (
    <section id={id} className="bg-gray-900 py-16 px-4 lg:px-16 text-white">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
            Have Questions? Ready to Take Action?
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Explore FAQs and take the next step towards your eco-friendly ride!
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-4 cursor-pointer shadow-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-md md:text-lg font-semibold text-cyan-400">{faq.question}</h3>
                  <span className="text-cyan-400 font-bold text-xl">{openIndex === index ? "-" : "+"}</span>
                </div>
                {openIndex === index && <p className="mt-2 text-gray-300 text-sm">{faq.answer}</p>}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center space-y-6 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-400">Take the Next Step Today</h3>
            <p className="text-gray-300 text-sm md:text-base">
              Book a test ride, contact a dealer, or explore EMI plans easily.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Link href="/book-test-ride" className="px-6 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-teal-500 transition">Book Test Ride</Link>
              <Link href="/contact-dealer" className="px-6 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-teal-500 transition">Contact Dealer</Link>
              <Link href="/emi-plans" className="px-6 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-teal-500 transition">Explore EMI Plans</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
