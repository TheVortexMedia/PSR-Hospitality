import React from "react";
import Image from "next/image";
import { Clients } from "@/components/Clients";
import { DM_Serif_Display } from "next/font/google";

const serifFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="w-11/12 md:w-10/12 mx-auto px-4 py-24 bg-[url('/images/3.png')]">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Heading */}
          <div className="flex-1 lg:pr-8">
            <h1
              className={`text-5xl lg:text-8xl font-light leading-tight italic text-center ${serifFont.className}`}
              style={{ color: "#214280" }}
            >
              Catering Solutions For Every Need.
            </h1>
          </div>

          {/* Right Side - Team Photo */}
          <div className="flex-1">
            <div className="relative bg-[#214280] p-1.5 rounded-xl shadow-lg">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/Chefs.png"
                  alt="PSR Hospitality Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="text-white py-16" style={{ backgroundColor: "#214280" }}>
        <div className="w-11/12 md:w-10/12 mx-auto px-4">
          <div className="space-y-8">
            {/* First Paragraph */}
            <p className="text-base lg:text-lg leading-relaxed text-right" style={{ color: '#FBD65D' }}>
              Founded with a vision to revolutionize institutional dining, PSR
              Hospitality has been serving colleges and educational institutions
              for over a decade. We understand that proper nutrition is
              fundamental to academic success and student well-being.
            </p>

            {/* Second Paragraph */}
            <p className="text-base lg:text-lg leading-relaxed text-right" style={{ color: '#FBD65D' }}>
              Our team of experienced chefs, nutritionists, and service
              professionals work tirelessly to create meal programs that not
              only satisfy hunger but also promote health, wellness, and
              cultural diversity through food.
            </p>
          </div>
        </div>
      </div>

      <Clients />
    </div>
  );
};

export default AboutPage;
