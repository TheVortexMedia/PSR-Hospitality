// components/Testimonials.tsx
"use client";
import { clients } from "@/lib/data";
import { motion } from "motion/react";
import Image from "next/image";

export function Clients() {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...clients, ...clients, ...clients];

  return (
    <section className="py-16 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #e2e8f0, #f1f5f9, #cbd5e1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 italic" style={{ color: '#214280' }}>
            Clients Who Trust Us
          </h2>
          <p className="md:w-1/2" style={{ color: '#214280' }}>
            From our early days, we&apos;ve been providing reliable service to our clientele.
            We&apos;ve had the honor of being the firm of choice of the following corporations:
          </p>
        </div>

        {/* Infinite scrolling container */}
        <div className="relative">
          <motion.div
            className="flex flex-row-reverse gap-8"
            initial={{
              x: `-${clients.length * (384 + 32)}px`, // Start off-screen to the left
            }}
            animate={{
              x: [0, `${clients.length * (384 + 32)}px`], // Move from left to right
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: clients.length * 4, // Adjust speed as needed
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                className="flex-shrink-0 w-64 relative overflow-hidden"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Customer info section */}
                <div className="flex flex-col items-center">
                  {item.logo && (
                    <div className="overflow-hidden w-full">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={1200}
                        height={1200}
                        className="w-full h-60 object-cover"
                      />
                    </div>
                  )}
                  <div className="w-full h-8 text-center flex items-center justify-center bg-black">
                    <h3 className="text-[13px] font-medium my-auto text-white">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
