// components/Testimonials.tsx
"use client";
import { testimonial } from "@/lib/data";
import { motion } from "motion/react";
import Image from "next/image";

export function Testimonials() {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [
    ...testimonial,
    ...testimonial,
    ...testimonial,
  ];

  return (
    <section className="py-16 overflow-hidden" style={{ background: 'url(/images/3.png)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic" style={{ color: '#214280' }}>
            What Our Customers Say
          </h2>
        </div>

        {/* Infinite scrolling container */}
        <div className="relative">
          <motion.div
            className="flex flex-row-reverse gap-8"
            initial={{
              x: `-${testimonial.length * (340 + 32)}px`, // Start off-screen to the left
            }}
            animate={{
              x: [0, `${testimonial.length * (340 + 32)}px`], // Move from left to right
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: testimonial.length * 4, // Adjust speed as needed
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials.map((item, index) => (
              <motion.div
                key={`${item.author}-${index}`}
                className="flex-shrink-0 w-85 h-[420px] rounded-2xl shadow-2xl relative overflow-hidden"
                style={{ background: 'linear-gradient(to bottom right, #214280, #214280, #214280)' }}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Quote mark */}
                <div className="absolute top-4 right-6 text-6xl text-white/20 font-serif">
                  &quot;
                </div>

                <div className="relative z-10">
                  {/* Customer info section */}
                  <div className="flex items-center mb-6 h-24 p-6">
                    {item.avatar && (
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                        <Image
                          src={item.avatar}
                          alt={item.author}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h3
                        className="text-xl font-bold text-white"
                      >
                        {item.author}
                      </h3>
                      <p
                        className="text-muted text-sm font-light"
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="px-6">
                    {/* Testimonial text */}
                    <div
                      className="mb-4"
                    >
                      <p className="text-white leading-relaxed text-base font-light">
                        &quot;{item.text}&quot;
                      </p>
                    </div>

                    {/* Star rating */}
                    <motion.div
                      className="flex space-x-1"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: (index % testimonial.length) * 0.1 + 0.3,
                      }}
                    >
                      {[...Array(item.rating || 5)].map((_, starIndex) => (
                        <motion.span
                          key={starIndex}
                          className="text-yellow-400 text-xl"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay:
                              (index % testimonial.length) * 0.1 +
                              0.4 +
                              starIndex * 0.1,
                            type: "spring",
                            stiffness: 500,
                          }}
                        >
                          ★
                        </motion.span>
                      ))}
                    </motion.div>
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
