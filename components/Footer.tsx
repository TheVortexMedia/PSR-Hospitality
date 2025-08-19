// components/Footer.tsx
"use client";

export function Footer() {
  return (
    <footer
      className="text-white py-16"
      style={{
        background:
          "linear-gradient(to bottom right, #214280, #214280, #214280)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          {/* Left Side - Call to Action and Logo */}
          <div className="text-left">
            <h2 className="text-3xl md:text-6xl font-thin text-white mb-4 leading-tight">
              Ready to Serve Your Next Event
              <br />
              Let&apos;s Talk!
            </h2>
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-8 flex flex-col md:flex-row items-start md:items-center justify-between">
            {/* Logo Frame */}
            <div
              className="inline-block p-1 shadow-lg max-w-xl"
              style={{
                background:
                  "linear-gradient(to bottom right, #FEF3C7, #FBD65D)",
              }}
            >
              <img src="/images/PSR Mockup.jpg" alt="" />
            </div>
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Office Address */}
              <div className="space-y-1">
                <h4 className="font-semibold text-zinc-400">Office Address</h4>
                <p className="text-white leading-relaxed">
                  Acharya Hostels, Dr. Sarvepalli
                  <br />
                  Radhakrishnan Road,
                  <br />
                  Hesarghatta, Soldevanahalli,
                  <br />
                  Bengaluru.
                </p>
              </div>

              {/* Phone Number */}
              <div className="space-y-1">
                <h4 className="font-semibold text-zinc-400">Phone Number</h4>
                <p className="text-white">+91 9731755669</p>
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <h4 className="font-semibold text-zinc-400">Email Address</h4>
                <a
                  href="mailto:psrhospitalityservices@gmail.com"
                  className="text-white transition-colors underline"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#FBD65D")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  psrhospitalityservices@gmail.com
                </a>
              </div>

              {/* Business Hours */}
              <div className="space-y-1">
                <h4 className="font-semibold text-zinc-400">Business Hours</h4>
                <p className="text-white">
                  9 am - 5 pm
                  <br />
                  Monday - Saturday
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-500 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted">
          <p className="text-center md:text-left">
            {" "}
            2025 PSR Hospitality. All rights reserved. Crafted by Vortex Media
          </p>
          <div className="mt-4 md:mt-0 space-x-6 md:space-x-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
