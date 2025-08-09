// components/Stats.tsx
"use client";
import { motion } from "motion/react";
import { stats } from "@/lib/data";

export function Stats() {
  // Duplicate stats array enough times for seamless infinite scroll
  // We need at least 2 full sets to create seamless loop
  const duplicatedStats = [...stats, ...stats];

  return (
    <section className="py-16 overflow-hidden" style={{ background: 'url(/images/2.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Serving Institutions Since 2016
          </h2>
        </div>

        {/* Infinite scrolling container */}
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, `-${stats.length * (320 + 24)}px`], // 320px width + 24px gap
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: stats.length * 3, // Adjust speed as needed
                ease: "linear",
              },
            }}
          >
            {duplicatedStats.map((stat, index) => (
              <motion.div
                key={`${stat.title}-${index}`} // Better key for duplicated items
                className="flex-shrink-0 w-80 h-96 bg-white/25 backdrop-blur border border-white/20 p-8 rounded-xl shadow-xl flex items-center justify-center group"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-center h-11/12 flex flex-col justify-center">
                  <div className="h-1/3">
                    <motion.div
                      className="text-4xl md:text-5xl font-bold mb-4"
                      style={{ color: '#FBD65D' }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: (index % stats.length) * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <motion.h3
                      className="text-xl font-semibold group-hover:text-[#214280] text-white mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: (index % stats.length) * 0.1 + 0.1 }}
                    >
                      {stat.title}
                    </motion.h3>
                  </div>
                  <div className="h-1/2 flex items-center">
                    <motion.p
                      className="text-white leading-relaxed text-sm group-hover:text-[#214280]"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: (index % stats.length) * 0.1 + 0.2 }}
                    >
                      {stat.description}
                    </motion.p>
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
