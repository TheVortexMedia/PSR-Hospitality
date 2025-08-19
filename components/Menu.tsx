"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const Menu = () => {
  const router = useRouter();
  const menuSections = [
    {
      title: "South Indian Menu",
      description:
        "Balanced and satisfying lunch options, tailored for mass dining without compromising on flavour.",
      image: "/images/food/img (4).jpg",
      menuItems: [
        `Idli / Vada / Bonda
        Upma / Khara Bath
        Chow-Chow Bath
        Set Dosa with Sweet
        Masala Dosa
        Vegetable Upma / Rava Kesari
        Pongal / Tamarind Rice / Lemon Rice
        Vegetable Sambar / Rasam / Dal
        Curd Rice
        Vegetable Curry / Sagu
        Mangalore Bajji
        Plain Rice
        Papad, Pickle, Salad`,
      ],
    },
    {
      title: "North Indian Menu",
      description:
        "Balanced and satisfying lunch options, tailored for mass dining without compromising on flavour.",
      image: "/images/food/img (2).jpg",
      menuItems: [
        `Chapathi / Poori / Batura
          Rumali Roti / Naan / Kulcha / Tandoori Roti
          North Indian Veg Curry / Paneer Butter Masala / Kadai Paneer
          Chole Masala / Rajma Curry / Dal Fry / Dal Makhani
          Aloo Gobi / Mixed Vegetable Curry
          Vegetable Pulao / Biryani (Basmati)
          Raita / Curd
          Sweet (Gulab Jamun, Rasgulla, Badam Puri, Kesari Bath)
          Salad, Papad, Pickle`,
      ],
    },
    {
      title: "Buffet Menu (Ideal for Events)",
      description:
        "Balanced and satisfying lunch options, tailored for mass dining without compromising on flavour.",
      image: "/images/food/img (3).jpg",
      menuItems: [
        `Welcome Drink: Lemon Juice / Jaljeera / Buttermilk
          Soup (Tomato / Sweet Corn / Hot & Sour)
          Chaat Counter: Pani Puri / Bhel Puri / Masala Puri
          Starters: Gobi Manchurian / Babycorn Manchurian / Paneer Tikka / Aloo Kabab
          Main Course:
          North Indian Curries
          South Indian Specialties
          Biryani / Pulao / Jeera Rice
          `,
      ],
    },
    {
      title: "Non-Veg Menu",
      description:
        "Balanced and satisfying lunch options, tailored for mass dining without compromising on flavour.",
      image: "/images/food/img (5).jpg",
      menuItems: [
        `Chicken Curry (Andhra / Punjabi Style)
          Pepper Chicken / Chicken 65 / Chicken Kabab
          Chicken Biryani (Basmati)
          Mutton Curry (optional for special occasions)
          Egg Curry / Egg Masala
          Chicken Manchurian / Chilli Chicken
          Raita, Salad, Papad, Pickle`,
      ],
    },
    {
      title: "Snacks Menu",
      description:
        "Balanced and satisfying lunch options, tailored for mass dining without compromising on flavour.",
      image: "/images/food/img (1).jpg",
      menuItems: [
        `Samosa
          Vada / Masala Vada
          Cutlet (Veg / Aloo)
          Sandwich (Veg / Grilled)
          Chilli Bajji / Aloo Bajji
          Onion Pakoda / Onion Bonda
          Crispy Vegetables
          Mangalore Bajji
          Biscuits / Cookies
          Tea / Coffee / Lemon Tea`,
      ],
    },
  ];

  return (
    <section
      className="py-16"
      style={{ background: "linear-gradient(to bottom, #FEF3C7, #FBD65D)" }}
    >
      <div className="w-11/12 md:w-10/12 max-w-2xl mx-auto">
        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {menuSections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row-reverse items-center justify-center min-h-80"
            >
              {/* Food Image */}
              <div className="relative h-56 md:h-full overflow-hidden w-full md:w-[45%]">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4 flex-1 space-y-4 flex flex-col border h-11/12 my-3 mx-3 rounded-lg border-[#d4a50c]/25">
                {/* Title */}
                <h3
                  className="text-lg font-bold mb-2 text-center"
                  style={{ color: "#214280" }}
                >
                  {section.title}
                </h3>

                {/* Menu Items */}
                <p className="text-xs leading-6 font-light text-muted-foreground text-center px-2">
                  {section.menuItems}
                </p>

                <h4 className="text-center text-xs font-black text-[#214280]">
                  PRICE ON REQUEST
                </h4>

                <Button
                  onClick={() => router.push("/contact")}
                  className="w-full md:w-1/2 mx-auto bg-gradient-to-r from-[#d4a50c] to-[#FBD65D]"
                >
                  Enquire now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
