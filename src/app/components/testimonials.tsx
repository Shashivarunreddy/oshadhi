"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";


export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-gradient-to-b from-[#f5f9f6] via-[#eaf4ee] to-[#dcefe3] dark:from-[#0b1c13] dark:via-[#0f2a1b] dark:to-[#163524] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-semibold text-[#1b4d3e] dark:text-[#a8e6cf] mb-8">
        What Our Customers Say
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Oshadhi’s Ashwagandha capsules have become part of my daily routine. My stress levels are down, my sleep has improved, and I feel more balanced overall. Truly a gift from nature!",
    name: "Neha Sharma",
    title: "Bangalore",
  },
  {
    quote:
      "The Homeopathic consultation experience was so personalized. The remedies worked wonderfully for my allergies—gentle yet effective. Highly recommend Oshadhi for holistic healing.",
    name: "Ravi Menon",
    title: "Chennai",
  },
  {
    quote:
      "I’ve tried many oils, but Oshadhi’s Ayurvedic Hair Revive Oil stands out. Within weeks, my hair felt softer and thicker. You can tell it’s made with care and pure ingredients.",
    name: "Anjali Deshpande",
    title: "Pune",
  },
  {
    quote:
      "After using their Tulsi-Ginger herbal tea, I noticed fewer colds and improved digestion. The aroma alone feels like a wellness ritual every morning!",
    name: "Vikram Rao",
    title: "Hyderabad",
  },
  {
    quote:
      "Oshadhi’s Homeopathy kit for children is a blessing. Safe, natural, and effective — it eased my daughter’s seasonal flu without side effects.",
    name: "Kavita Reddy",
    title: "Vizag",
  },
  {
    quote:
      "Their Panchagavya-based skincare products brought a natural glow to my face. I’ve stopped using chemical creams entirely. It’s Ayurveda at its finest!",
    name: "Maya Iyer",
    title: "Mumbai",
  },
  {
    quote:
      "Every product I’ve ordered from Oshadhi feels premium — from packaging to purity. The herbal immunity drops are now a staple in our home.",
    name: "Sanjay Patel",
    title: "Ahmedabad",
  },
];
