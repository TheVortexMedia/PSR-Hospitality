"use client";
import { motion } from "motion/react";
import { stats } from "@/lib/data";

export function Stats() {
  // Duplicate at least twice for seamless loop
  const duplicatedStats = [...stats, ...stats, ...stats];

  // Width of one card + gap (in px)
  const cardWidth = 320;
  const gap = 24;
  const singleSetWidth = stats.length * (cardWidth + gap);

  return (
    <section
      className="py-16 overflow-hidden"
      style={{
        background: "url(/images/2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-light text-white mb-4">
            Serving Institutions Since 2016
          </h2>
        </div>

        {/* Infinite scrolling container */}
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -singleSetWidth] }}
            transition={{
              duration: stats.length * 3, // Adjust speed
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ willChange: "transform" }}
          >
            {duplicatedStats.map((stat, index) => (
              <div
                key={`${stat.title}-${index}`}
                className="flex-shrink-0 w-85 h-96 bg-white/25 backdrop-blur border border-white/20 p-5 rounded-xl shadow-xl flex items-center justify-center group hover:bg-white"
              >
                <div className="text-center h-11/12 flex flex-col justify-center">
                  <div className="h-2/5">
                    <div
                      className="text-4xl md:text-6xl font-semibold mb-4"
                      style={{ color: "#FBD65D" }}
                    >
                      {stat.number}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-[#214280] text-white mb-3">
                      {stat.title}
                    </h3>
                  </div>
                  <div className="h-2/5 flex items-center">
                    <p className="text-white leading-relaxed text-sm group-hover:text-[#214280]">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
