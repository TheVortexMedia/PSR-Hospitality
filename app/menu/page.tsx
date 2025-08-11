import Menu from "@/components/Menu";

const MenuPage = () => {
  return (
    <div>
      <section className="relative h-[65svh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/4.png"
          alt=""
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(33, 66, 128, 0.5), rgba(33, 66, 128, 0.5))",
          }}
        >
          {/* Content */}
          <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
            <h1 className={`text-5xl lg:text-8xl font-light leading-tight italic text-center font-georgia`}>
              Custom Catering Menu
            </h1>
          </div>
        </div>
      </section>
      {/* Description Section */}
      <div className="text-white py-16" style={{ backgroundColor: "#214280" }}>
        <div className="w-11/12 md:w-10/12 mx-auto px-4">
          <div className="space-y-8">
            {/* First Paragraph */}
            <p
              className="text-base lg:text-lg leading-relaxed text-left"
              style={{ color: "#FBD65D" }}
            >
              At PSR Hospitality, our thoughtfully curated menus are designed to
              meet the diverse tastes and dietary needs of colleges, hostels,
              and corporate institutions.
            </p>

            {/* Second Paragraph */}
            <p
              className="text-base lg:text-lg leading-relaxed text-left"
              style={{ color: "#FBD65D" }}
            >
              From nutritious daily meals to special event spreads, we offer
              customizable catering solutions that blend taste, health, and
              variety — all while maintaining consistency and quality.
            </p>

            <p
              className="text-base lg:text-lg leading-relaxed text-left"
              style={{ color: "#FBD65D" }}
            >
              Explore our North Indian, South Indian, and multi-cuisine
              offerings crafted for large-scale dining without compromising on
              flavor or freshness.
            </p>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default MenuPage;
