"use client";

import About from "@/components/About";
import { Clients } from "@/components/Clients";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import Image from "next/image";

const colors = {
  primary: "#214280", // deep royal blue
  accent: "#FBD65D", // warm yellow
  secondary: "#DB5426", // orange
  dark: "#0f1f49",
};

export default function Page() {
  return (
    <div
      className="relative min-h-[100dvh] text-white"
      style={{ backgroundColor: colors.primary }}
    >
      {/* Background texture and soft spotlight */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_600px_at_10%_-20%,#ffffff10,transparent_60%),radial-gradient(900px_480px_at_90%_-10%,#FBD65D14,transparent_60%)]" />
        <Image
          src="/images/noise.png"
          alt=""
          fill
          className="opacity-20 object-cover mix-blend-overlay"
          priority
        />
      </div>

      <main className="relative">
        <Hero />
        <About />
        <Clients />
        <Stats />
        <Testimonials />
      </main>
    </div>
  );
}
