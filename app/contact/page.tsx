"use client";
import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    eventType: "",
    guestCount: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center px-4"
        style={{
          background:
            "linear-gradient(to bottom right, #1c3f60, #214280, #1c3f60)",
        }}
      >
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-georgia font-light leading-tight italic text-center"
            style={{ color: "white" }}
          >
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mt-4 sm:mt-6 max-w-3xl mx-auto px-2">
            Let&apos;s discuss your catering needs and create an unforgettable
            experience
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-[#214280]/10 p-4 sm:p-6 lg:p-8 w-full">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 sm:mb-8 text-center"
                style={{ color: "#1c3f60" }}
              >
                Get In Touch
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#1c3f60" }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214280]/10 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#1c3f60" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214280]/10 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#1c3f60" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214280]/10 focus:border-transparent transition-all"
                    placeholder="+91 9087654321"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#1c3f60" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214280]/10 focus:border-transparent transition-all resize-vertical"
                    placeholder="Tell us about your event requirements, dietary preferences, or any special requests..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-5 text-base rounded-lg transition-all hover:opacity-90 bg-gradient-to-r from-[#d4a50c] to-[#FBD65D] uppercase font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div
              className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8"
              style={{ borderTop: "4px solid #FBD65D" }}
            >
              <h3
                className="text-xl sm:text-2xl font-light mb-6 sm:mb-8 lg:mb-10"
                style={{ color: "#1c3f60" }}
              >
                Contact Information
              </h3>

              <div className="flex flex-col justify-between space-y-4 md:space-y-12">
                <div className="flex items-start space-x-4">
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: "#FBD65D" }}
                  >
                    <Phone
                      className="size-4 md:size-6"
                      style={{ color: "#1c3f60" }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h4
                      className="font-medium mb-1"
                      style={{ color: "#1c3f60" }}
                    >
                      Phone
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      +91 8919684575
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: "#FBD65D" }}
                  >
                    <Mail
                      className="size-4 md:size-6"
                      style={{ color: "#1c3f60" }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h4
                      className="font-medium mb-1"
                      style={{ color: "#1c3f60" }}
                    >
                      Email
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      psrhospitalityservices@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: "#FBD65D" }}
                  >
                    <MapPin
                      className="size-4 md:size-6"
                      style={{ color: "#1c3f60" }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h4
                      className="font-medium mb-1"
                      style={{ color: "#1c3f60" }}
                    >
                      Address
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Acharya Hostels, Dr. Sarvepalli
                      <br />
                      Radhakrishnan Road,
                      <br />
                      Hesarghatta, Soldevanahalli,
                      <br />
                      Bengaluru.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: "#FBD65D" }}
                  >
                    <Clock
                      className="size-4 md:size-6"
                      style={{ color: "#1c3f60" }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h4
                      className="font-medium mb-1"
                      style={{ color: "#1c3f60" }}
                    >
                      Business Hours
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      9 am - 5 pm
                      <br />
                      Monday - Saturday
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
