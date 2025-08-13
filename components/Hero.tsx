// components/Hero.tsx
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export function Hero() {
  const [formData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    eventType: "",
    guestCount: "",
    eventDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };
  return (
    <section className="relative h-svh flex items-center justify-center overflow-hidden">
      <Image
        width={4000}
        height={4000}
        src="/images/main.png"
        alt=""
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-16"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(33, 66, 128, 0.5), rgba(33, 66, 128, 0.5))",
        }}
      >
        <Image
          src="/images/logo.png"
          width={1000}
          height={1000}
          alt=""
          className="w-56"
        />
        {/* Content */}
        <div className="relative z-10 text-center text-[#FBD65D] mx-auto px-4">
          <h1
            className={`text-4xl md:text-7xl font-thin mb-6 leading-tight italic font-georgia`}
          >
            Delightful Catering, Exceptional Hospitality
          </h1>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="bg-[#FBD65D] text-[#214280] rounded-full font-normal transition-colors hover:bg-[#FBD65D]"
                size="lg"
              >
                Explore now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-base max-h-[95vh]">
              <DialogHeader>
                <DialogTitle>Contact Us</DialogTitle>
                <DialogDescription>
                  Let&apos;s discuss your catering needs and create an
                  unforgettable experience
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                    style={{ color: "#1c3f60" }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleSubmit}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214280]/10 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                    style={{ color: "#1c3f60" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleSubmit}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214280]/10 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                    style={{ color: "#1c3f60" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleSubmit}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214280]/10 focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                    style={{ color: "#1c3f60" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleSubmit}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214280]/10 focus:border-transparent transition-all resize-vertical"
                    placeholder="Tell us about your event requirements, dietary preferences, or any special requests..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-5 text-base font-medium rounded-lg transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "#FBD65D",
                    color: "#1c3f60",
                  }}
                >
                  Send Message
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
