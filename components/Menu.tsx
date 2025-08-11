import React from "react";
import Image from "next/image";

const Menu = () => {
  const menuSections = [
    {
      title: "South Indian Menu",
      discount: "10% OFF",
      price: "₹ 270/Plate Onwards",
      originalPrice: "₹ 300",
      items: [
        `Rice, Ghee, Thove (Tadka Dal), Palya (Dry Sabji), Kosambari (Salad)
        Sambar / Dal / Pappu / Muligie Hull, Rasam, Papad, Lemon Rice/Puliyogare/Vangibath
        Payasam, Sweet, Salt, Pickle, Curd
        Banana Leaf / Areca Plates, Tissue, 20L Water Can, Water Glass, Table Roll`,
      ],
      image: "/images/food/food3.JPG",
    },
    {
      title: "North Indian Menu",
      discount: "10% OFF",
      price: "₹ 315/Plate Onwards",
      originalPrice: "₹ 350",
      items: [
        `Rice, Jeera Rice, Dal Tadka/Dal Makhani
        Veg Pulav, Paneer Gravy, Chana Masala, Bhindi Masala, Aloo Fry
        Papad, Soup, French Fries / Gobi Manchurian / Baby Corn Manchurian
        Banana Leaf / Areca Plates, Tissue, 500ml Water Bottle, Table Roll`,
      ],
      image: "/images/food/food2.JPG",
    },
    {
      title: "Buffet Menu (Ideal for Events)",
      discount: "10% OFF",
      price: "₹ 315/Plate Onwards",
      originalPrice: "₹ 350",
      items: [
        `Welcome Drink: Lemon Juice / Jaljeera / Buttermilk
        Soup: Tomato / Sweet Corn / Hot & Sour
        Chaat Counter: Pani Puri / Bhel Puri / Masala Puri
        Starters: Gobi Manchurian / Babycorn Manchurian / Paneer Tikka / Aloo Kabab
        Main Course: North Indian Curries, South Indian Specialties, Biryani / Pulao / Jeera Rice, Dal Fry / Dal Tadka, Veg Kurma / Paneer Curry`,
      ],
      image: "/images/food/food3.JPG",
    },
    {
      title: "Non-Veg Menu",
      discount: "10% OFF",
      price: "₹ 315/Plate Onwards",
      originalPrice: "₹ 350",
      items: [
        `Chicken Curry (Andhra / Punjabi Style)
        Pepper Chicken / Chicken 65 / Chicken Kabab
        Chicken Biryani (Basmati)
        Mutton Curry (Optional)
        Egg Curry / Egg Masala
        Chicken Manchurian / Chilli Chicken
        Raita, Salad, Papad, Pickle`,
      ],
      image: "/images/food/food4.jpeg",
    },
    {
      title: "Snacks Menu",
      discount: "10% OFF",
      price: "₹ 315/Plate Onwards",
      originalPrice: "₹ 350",
      items: [
        `Samosa, Vada / Masala Vada, Cutlet (Veg / Aloo)
        Sandwich (Veg / Grilled)
        Chilli Bajji / Aloo Bajji, Onion Pakoda / Onion Bonda
        Crispy Vegetables, Mangalore Bajji
        Biscuits / Cookies
        Tea / Coffee / Lemon Tea
        Sandwich (Veg / Grilled)
        Chilli Bajji / Aloo Bajji, Onion Pakoda / Onion Bonda
        Crispy Vegetables, Mangalore Bajji
        Biscuits / Cookies
        Tea / Coffee / Lemon Tea`,
      ],
      image: "/images/food/food4.jpeg",
    },
  ];

  return (
    <section
      className="py-16"
      style={{ background: "linear-gradient(to bottom, #FEF3C7, #FBD65D)" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Menu Grid */}
        <div className="grid grid-cols-1 gap-8">
          {menuSections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-row-reverse items-center justify-between h-90"
            >
              {/* Food Image */}
              <div className="relative h-full w-[45%] overflow-hidden">
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
              <div className="flex-1 h-full flex flex-col items-center justify-center px-6 gap-3">
                {/* Title */}
                <h3
                  className="text-xl font-bold uppercase text-center underline"
                  style={{ color: "#214280" }}
                >
                  {section.title}
                </h3>

                {/* Description */}
                <p className="text-[#FBD65D] text-lg leading-relaxed text-center font-bold">
                  {section.discount}
                </p>

                {/* Menu Items */}
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="">
                      <p className="text-gray-600 text-xs leading-relaxed text-center">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <h4
                  className="text-xl font-bold mt-3 uppercase text-center"
                  style={{ color: "#214280" }}
                >
                  {section.price}{" "}
                  <span className="line-through text-lg text-muted-foreground ml-1.5">
                    {section.originalPrice}
                  </span>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
