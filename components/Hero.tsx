// components/Hero.tsx
"use client";
import { Button } from "@/components/ui/button";
import { DM_Serif_Display } from "next/font/google";

const serifFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export function Hero() {
  return (
    <section className="relative h-svh flex items-center justify-center overflow-hidden">
      <img src="/images/1.png" alt="" className="w-full h-full object-cover" />

      {/* Overlay */}
      <div
        className="absolute inset-0 w-full h-full flex items-center justify-center"
        style={{
          background:
            "linear-gradient(to bottom, rgba(33, 66, 128, 0.50), rgba(33, 66, 128, 0.35))",
        }}
      >
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1
            className={`text-4xl md:text-7xl font-thin mb-6 leading-tight italic ${serifFont.className}`}
          >
            Delightful Catering, Exceptional Hospitality
          </h1>

          <Button
            className="bg-[#FBD65D] text-[#214280] rounded-full font-normal transition-colors hover:bg-[#FBD65D]"
            size="lg"
          >
            Explore now
          </Button>
        </div>
      </div>
    </section>
  );
}
