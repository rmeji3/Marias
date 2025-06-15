import React from 'react';

const menuData = [
  {
    section: "A la Carte",
    items: [
      {
        name: "Tortas A la Carte",
        price: "$11.25",
        description: "Choice of meat, beans, lettuce, cheese, tomato, and sour cream. Veggie option: beans, cheese, lettuce, tomato, rice, and avocado."
      },
      {
        name: "Sopes",
        price: "$6.50",
        description: "Choice of meat, beans, lettuce, cheese, tomato, sour cream. Veggie: lettuce, tomato, cheese, beans, rice, avocado, and sour cream."
      },
      {
        name: "Gorditas",
        price: "$5.50",
        description: "Your choice of meat, beans, and cheese."
      },
      {
        name: "Nachos Locos",
        price: "$12.50",
        description: "Ground beef, beans, lettuce, nacho cheese and mozzarella, and tomato."
      },
      {
        name: "Giant Quesadilla",
        price: "$12.50",
        description: "Your choice of meat with sides of sour cream, guacamole, pico de gallo, lettuce, and tomato."
      },
      {
        name: "Quesadilla with Meat",
        price: "$4.75",
        description: "Choice of meat with melted mozzarella cheese between two flour tortillas."
      },
      {
        name: "Cheese Quesadilla",
        price: "$3.50",
        description: "Mozzarella cheese melted between two flour tortillas."
      },
      {
        name: "Tampiquena Special Dinner",
        price: "$20.99",
        description: "Skirt steak with cheese enchilada topped with red mild salsa. Served with rice, beans, lettuce, tomato, roasted jalapeño; choice of corn or flour tortillas."
      }
    ]
  },
  {
    section: "Tamales",
    items: [
      {
        name: "Green Chicken Tamale",
        price: "$3.50",
        description: "Shredded chicken with green salsa."
      },
      {
        name: "Jalapeños with Cheese Tamale",
        price: "$3.50",
        description: "Rajas con queso. Only available in singles and half dozens."
      },
      {
        name: "Pineapple Tamale",
        price: "$3.50",
        description: "Pina. Only sold in singles."
      },
      {
        name: "Red Pork Tamale",
        price: "$3.50",
        description: "Puerco rojo."
      },
      {
        name: "Beans Tamale",
        price: "$2.50",
        description: "Frijoles. Only sold in singles."
      },
      {
        name: "Strawberry Tamale",
        price: "$3.50",
        description: "Fresa. Only sold in singles."
      },
      {
        name: "Half Dozen Mix Tamale",
        price: "$11.50",
        description: "Mix of 6 tamales."
      },
      {
        name: "One Dozen Mix Tamale",
        price: "$22.00",
        description: "Mix of 12 tamales."
      }
    ]
  },
  {
    section: "Tacos",
    items: [
      {
        name: "Taco Dinner",
        price: "$12.25",
        description: "3 tacos with your choice of meat, served with rice and beans."
      },
      {
        name: "Single Taco",
        price: "$3.75",
        description: "Soft tortilla taco with your choice of meat, cilantro, and onions."
      },
      {
        name: "Hard Shell Taco",
        price: "$3.00",
        description: "Crispy taco with lettuce, cheese, and your choice of meat."
      }
    ]
  },
  {
    section: "Burritos",
    items: [
      {
        name: "Regular Burrito",
        price: "$10.75",
        description: "Flour tortilla filled with beans, cheese, lettuce, tomato, sour cream, and your choice of meat."
      },
      {
        name: "Super Burrito",
        price: "$12.50",
        description: "Includes all regular burrito ingredients plus avocado and rice."
      },
      {
        name: "Burrito Bowl",
        price: "$10.25",
        description: "All the burrito ingredients served in a bowl instead of a tortilla."
      }
    ]
  }
];

function Menu() {
  return (
    <div className="bg-white text-gray-800 p-6 max-w-5xl mx-auto min-h-[3000px] flex flex-col">
      <h1 className="text-4xl font-bold text-center text-[#6B1C27] mb-10">Menu</h1>
      {menuData.map((section, index) => (
        <div key={index} className="mb-8 w-full">
          <h2 className="text-2xl font-semibold border-b-2 border-[#6B1C27] pb-1 mb-4 pl-15 lg:pl-0">{section.section}</h2>
          <ul className="flex flex-col space-y-4 pl-15 lg:pl-0">
            {section.items.map((item, idx) => (
              <li key={idx} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition w-full">
                <div className="flex justify-between items-start flex-wrap">
                  <h3 className="text-lg font-bold text-[#6B1C27] w-full sm:w-auto ">{item.name}</h3>
                  <span className="text-sm font-semibold text-gray-700 w-full sm:w-auto text-right">{item.price}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1 w-full">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Menu;
