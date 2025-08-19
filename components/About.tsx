"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <section className="bg-gray-50 space-y-16 pt-16">
      <div className="w-11/12 md:w-10/12 mx-auto">
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center md:justify-between md:flex-row items-start gap-5">
          <h2
            className="text-4xl md:text-6xl leading-tight font-light italic"
            style={{ color: "#1c3f60" }}
          >
            Make Every Meal
            <br />
            Memorable.
          </h2>

          <p
            className="text-lg leading-relaxed max-w-lg"
            style={{ color: "#1c3f60" }}
          >
            At PSR Hospitality, we go beyond just food, we deliver reliable,
            hygienic, and customizable catering solutions tailored for
            institutions, offices, and corporate events. What sets us apart is
            our ability to scale effortlessly from daily hostel meals to high
            volume corporate gatherings without compromising on taste,
            nutrition, or timeliness.
          </p>
        </div>
        {/* Right Side - About Us Section */}
      </div>
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="relative h-96 lg:h-[500px] overflow-hidden">
          <img
            src="/images/about.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center h-full text-center px-8"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(33, 66, 128, 0.5), rgba(33, 66, 128, 0.5))",
            }}
          >
            <h3
              className="text-xl md:text-2xl font-light mb-4"
              style={{ color: "#FBD65D" }}
            >
              About Us
            </h3>

            <h4
              className={`text-[#FBD65D] text-4xl md:text-7xl font-thin italic leading-relaxed mb-8 font-georgia`}
            >
              Catering Solutions For Every Need.
            </h4>

            <Button
              className="font-medium px-8 py-3 rounded-full transition-colors hover:opacity-90"
              style={{ backgroundColor: "#FBD65D", color: "#1c3f60" }}
              onClick={() => router.push("/about")}
            >
              Know More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
