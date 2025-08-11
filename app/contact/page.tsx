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
        className="relative min-h-[60vh] flex items-center justify-center"
        style={{
          background:
            "linear-gradient(to bottom right, #1c3f60, #214280, #1c3f60)",
        }}
      >
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1
            className={`text-5xl lg:text-6xl font-georgia font-light leading-tight italic text-center`}
            style={{ color: "white" }}
          >
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl font-light mt-6 max-w-3xl mx-auto">
            Let&apos;s discuss your catering needs and create an unforgettable
            experience
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-[#214280]/10 p-8">
              <h2
                className="text-3xl md:text-4xl font-light mb-8 text-center"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214280]/10 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214280]/10 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214280]/10 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214280]/10 focus:border-transparent transition-all resize-vertical"
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
            </div>

            {/* Contact Information */}
            <div
              className="bg-white rounded-2xl shadow-lg p-8"
              style={{ borderTop: "4px solid #FBD65D" }}
            >
              <h3
                className="text-2xl font-light mb-10"
                style={{ color: "#1c3f60" }}
              >
                Contact Information
              </h3>

              <div className="flex flex-col justify-between h-10/12">
                <div className="flex items-start space-x-4">
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: "#FBD65D" }}
                  >
                    <Phone
                      className="w-6 h-6"
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
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: "#FBD65D" }}
                  >
                    <Mail
                      className="w-6 h-6"
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
                    <p className="text-gray-600">info@psrhospitality.com</p>
                    <p className="text-gray-600">catering@psrhospitality.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: "#FBD65D" }}
                  >
                    <MapPin
                      className="w-6 h-6"
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
                    <p className="text-gray-600">
                      123 Hospitality Avenue
                      <br />
                      Catering District
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className="p-3 rounded-full"
                    style={{ backgroundColor: "#FBD65D" }}
                  >
                    <Clock
                      className="w-6 h-6"
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
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 8:00 PM
                      <br />
                      Saturday: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: 10:00 AM - 4:00 PM
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
