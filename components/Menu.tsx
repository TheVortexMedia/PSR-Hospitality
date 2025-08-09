import React from 'react'
import Image from 'next/image'

const Menu = () => {
  const menuSections = [
    {
      title: "Breakfast Specials",
      description: "Balanced and satisfying lunch options, tailored for mass dining without compromising on flavour.",
      image: "/images/4.png"
    },
    {
      title: "Lunch Menu", 
      description: "Balanced and satisfying lunch options, tailored for mass dining without compromising on flavour.",
      image: "/images/4.png"
    },
    {
      title: "Evening Snacks",
      description: "Balanced and satisfying lunch options, tailored for mass dining without compromising on flavour.", 
      image: "/images/4.png"
    }
  ]

  const menuItems = [
    {
      category: "Rice Specialities",
      items: "Biryani/Pulao (Basmati) with Raita, Sambar, Rasam, Plain Rice"
    },
    {
      category: "Bread & Curry", 
      items: "Chapathi/Poori with North Indian Curry, Chicken Curry/Paneer Curry"
    },
    {
      category: "Complete Meal",
      items: "Dal, Curd, Papad, Pickle included with every serving"
    }
  ]

  return (
    <section className="py-16" style={{ background: 'linear-gradient(to bottom, #FEF3C7, #FBD65D)' }}>
      <div className="w-11/12 md:w-10/12 mx-auto">
        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuSections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              {/* Food Image */}
              <div className="relative h-48 overflow-hidden">
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
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold mb-3" style={{ color: '#214280' }}>
                  {section.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {section.description}
                </p>

                {/* Menu Items */}
                <div className="space-y-4">
                  {menuItems.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-base mb-2" style={{ color: '#214280' }}>
                        {item.category}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.items}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu