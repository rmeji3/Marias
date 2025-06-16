import React from 'react';
import { useRef } from 'react';

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
        price: "$6.50+",
        description: "Choice of meat, beans, lettuce, cheese, tomato, sour cream. Veggie: lettuce, tomato, cheese, beans, rice, avocado, and sour cream."
      },
      {
        name: "Gorditas",
        price: "$5.50",
        description: "Your choice of meat, beans, and cheese."
      },
      {
        name: "Nachos Locos",
        price: "$13.75",
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
    ]
  },
  {
    section: "Speciality Dinners",
    items: [
      {
        name: "Tampiquena Special Dinner",
        price: "$22.50",
        description: "Skirt steak with cheese enchilada topped with red mild salsa. Served with rice, beans, lettuce, tomato, roasted jalapeño; choice of corn or flour tortillas."
      },
      {
        name: "Torta Special Dinner",
        price: "$16.99",
        description: "Torta with rice and beans."
      },
      {
        name: "Fajitas Special Dinner",
        price: "$20.00",
        description: "Served with rice, beans, lettuce, tomato, and sour cream."
      },
      {
        name: "Burrito Special Dinner",
        price: "$16.99",
        description: "Large burrito with rice and beans on the side."
      },
      {
        name: "Chile Relleno Special Dinner",
        price: "$20.00",
        description: "Stuffed pepper with cheese, rice, and beans."
      },
      {
        name: "Enchiladas Special Dinner",
        price: "$20.00",
        description: "Three enchiladas with your choice of meat and sauce."
      },
      {
        name: "Taco Dinner Special Dinner",
        price: "$16.99+",
        description: "Three tacos with rice and beans."
      },
      {
        name: "Milanesa Special Dinner",
        price: "$20.00",
        description: "Breaded steak with rice and beans."
      },
      {
        name: "Carnitas Special Dinner",
        price: "$20.00",
        description: "Slow-cooked pork with rice and beans."
      },
      {
        name: "Chilaquiles con Carne Special Dinner",
        price: "$20.00",
        description: "Tortilla chips cooked in salsa with meat and cheese."
      },
      {
        name: "Flautas Special Dinner",
        price: "$20.00",
        description: "Five beef or shredded chicken flautas topped with cheese and sour cream, lettuce, tomato and guacamole on the side. Served with rice and beans."
      },
      {
        name: "Chimichanga Special Dinner",
        price: "$16.99",
        description: "Fried burrito with cheese, sour cream, rice, and beans."
      },
      
      {
        name: "Carne Asada Special Dinner",
        price: "$20.99",
        description: "Grilled skirt steak with rice, beans, and tortillas."
      },
      
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
        name: "Red Pork Tamale",
        price: "$3.50",
        description: "Puerco rojo."
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
        name: "Veggie Taco",
        price: "$4.25",
        description: "Corn or flour tortilla topped with rice, beans, lettuce, tomato, cheese, and avocado."
      },
      {
        name: "Single Taco",
        price: "$4.25",
        description: "Soft tortilla taco with your choice of meat, cilantro, and onions."
      },
      {
        name: "Chorizo con Huevo Taco",
        price: "$4.25",
        description: "Mexican sausage and egg topped with cilantro and onions."
      }
    ]
  },
  {
    section: "Burritos",
    items: [
      
      {
        name: "Burrito",
        price: "$11.25",
        description: "Burrito with your choice of meat."
      },
      {
        name: "Veggie Burrito",
        price: "$11.25",
        description: "Includes rice, beans, lettuce, tomato, cheese, and avocado.."
      },
      {
        name: "Chorizo con Huevo Burrito",
        price: "$11.25",
        description: "Mexican sausage and egg with lettuce, tomato, cheese, and beans."
      }
    ]
  },

  {
    section: "Soups",
    items: [
      {
        name: "Pozole",
        price: "$14.25",
        description: "32oz cup of pork meat with hominy served with cabbage, jalapeños, onions, cilantro, and limes. Choice of corn or flour tortillas, or tostadas."
      },
      {
        name: " White Pozole",
        price: "$14.25",
        description: "Pork soup with hominy. Sides with onions, cilantro, cabbage, jalapeños. Choice of corn or flour tortillas or tostadas."
      },
      {
        name: " Large Pozole Soup",
        price: "$35.00",
        description: "Pork meat with hominy soup served onions, cilantro, jalapeños, cabbage, and limes. Choice of corn or flour tortillas, or tostadas."
      },
      {
        name: "Menudo",
        price: "$12.00",
        description: "Hearty beef tripe soup with hominy, served with lime and oregano."
      },
      {
        name: "Large Menudo Soup",
        price: "$35.00",
        description: "Tripe soup served with onions, cilantro, jalapeños, and limes. Choice of corn or flour tortilla. "
      },
      {
        name: "Caldo de Res",
        price: "$14.25",
        description: "32oz cup of beef stew served with rice, onions, cilantro, jalapeños, and limes. Choice of corn or flour tortillas."
      },
      {
        name: "Caldo de Pollo",
        price: "$14.25",
        description: "32oz cup of chicken stew served with rice, onions, cilantro, jalapeños, and limes. Choice of corn or flour tortillas."
      },
    ]
  },


  {
    section: "Seafood",
    items: [
      {
        name: "Shrimp Cocktail",
        price: "$18.99",
        description: "Coctel de Camaron"
      },
      {
        name: "Fish Fillet",
        price: "$18.99",
        description: "Tilapia fish with lettuce and tomato. Served with rice and beans. Choice of corn or flour tortillas."
      },
      {
        name: "Fajitas De Camarones",
        price: "$18.99",
        description: "Shrimp mixed with strips of green peppers and onions. Served with rice and beans. Choice of corn or flour tortillas"
      },
      {
        name: "Chiptole Shrimp",
        price: "$18.99",
        description: "Grilled shrimp topped with salsa and chipotle peppers, avocados, lettuce and tomato, and side of rice and beans. Comes with choice of corn or flour tortillas. "
      }
    ]
  },


  {
    section: "Salads",
    items: [
      {
        name: "Grilled Chicken Salad",
        price: "$12.00",
        description: "Grilled chicken with lettuce, tomato, onion, sliced carrots, and avocados. "
      },
      {
        name: "Grilled Shrimp Salad",
        price: "$14.00",
        description: "Grilled shrimp with lettuce, tomato, onion, sliced carrots, and avocados."
      },
      
    ]
  },
  // NEW SECTIONS ADDED BELOW
  {
    section: "Drinks",
    items: [
      {
        name: "Champurrado",
        price: "$3.50",
        description: "Traditional Mexican hot chocolate drink."
      },
      {
        name: "Coffee",
        price: "$1.50",
        description: ""
      },
      {
        name: "Horchata",
        price: "$3.50",
        description: "Sweet rice milk with cinnamon."
      },
      {
        name: "Jamaica (Hibiscus Tea)",
        price: "$3.50",
        description: "Refreshing tart hibiscus tea."
      },
      {
        name: "Sodas",
        price: "$1.75",
        description: "Coke, Sprite, Fanta, etc."
      },
      {
        name: "Jarritos",
        price: "$3.00",
        description: ""
      },
      {
        name: "Lemonade",
        price: "$3.50",
        description: ""
      },
      {
        name: "Bottled Water",
        price: "$2.00",
        description: "Purified bottled water."
      }
    ]
  },
  {
    section: "Sides & Extras",
    items: [
      {
        name: "Rice",
        price: "$3.50",
        description: "Mexican-style rice."
      },
      {
        name: "Beans",
        price: "$3.50",
        description: "Refried topped with cheese."
      },
      {
        name: "Guacamole",
        price: "$9.00",
        description: "8oz dip of avocado, onions, tomatoes, and cilantro. Bag of chips on the side."
      },
      {
        name: "Sour Cream",
        price: "$1.25",
        description: "Side of crema."
      },
      {
        name: "Pico de Gallo",
        price: "$2.00",
        description: "3oz cup of mixed tomato, onions, cilantro and lime juice."
      },
      {
        name: "French Fries",
        price: "$4.50",
        description: ""
      },
      {
        name: "Cheese Fries",
        price: "$5.75",
        description: "3oz cup of mixed tomato, onions, cilantro and lime juice."
      },
      {
        name: "Carrots and Peppers",
        price: "$2.00",
        description: ""
      },
      {
        name: "Cheese Fries with Meat",
        price: "$8.00",
        description: "Cheese fries with Steak"
      }, 
      {
        name: "Mexican Potatoes",
        price: "$6.75",
        description: "Potatoes with jalapeños, tomatoes, and onions. Choice of corn or flour tortillas."
      }, 
      {
        name: "Corn in a Cup",
        price: "$4.50",
        description: "Sweet corn topped with cojita cheese, mayo, butter, and Chile powder."
      },
      
      {
        name: "Chips & Salsa",
        price: "$2.50",
        description: "Fresh tortilla chips with salsa."
      }
    ]
  },
  {
    section: "Desserts",
    items: [
      {
        name: "Choco-Flan",
        price: "$4.50",
        description: "Classic caramel custard."
      },
      {
        name: "Homemade Italian Ice Cream",
        price: "$4.25",
        description: ""
      },{
        name: "Flan",
        price: "$3.50",
        description: "Sweet custard with a caramel topping."
      },
      {
        name: "Strawberry Glazed Cheesecake",
        price: "$4.50",
        description: "Moist sponge cake soaked in three milks."
      },
      {
        name: "Churros",
        price: "$3.00",
        description: "Fried dough pastry with cinnamon sugar."
      }
    ]
  },
  {
    section: "Breakfast",
    items: [
      {
        name: "Huevos Rancheros Breakfast",
        price: "$15.00",
        description: "Three over easy eggs topped with mild red salsa. Served with rice and cheese, choice of corn or flour tortillas. "
      },
      {
        name: "Huevos a la Mexicana Breakfast",
        price: "$15.00",
        description: "Scrambled eggs with jalapeños, tomatoes, and onions. Served rice and beans, choice of corn or flour tortillas. "
      },
      {
        name: "Cheese Omelette Breakfast",
        price: "$15.00",
        description: "Three egg omelet with cheese. Served with rice and beans, choice of corn or flour tortillas."
      },

      {
        name: "Ham and Cheese Omelette Breakfast",
        price: "$15.00",
        description: "Three egg omelet with ham and cheese. Served with rice and beans, choice of corn or flour tortillas. "
      },
      {
        name: "Huevos con Jamon Breakfast",
        price: "$15.00",
        description: "Scrambled eggs with ham. Served with rice and beans, choice of corn or flour tortillas."
      },
      {
        name: "Huevos con Chorizo Breakfast",
        price: "$15.00",
        description: "Three scrambled eggs with Mexican sausage. Served with rice and beans, choice of corn or flour tortillas."
      },
      {
        name: "Chilaquiles con Huevo Breakfast",
        price: "$15.00",
        description: "Tortilla strips dipped in a mild red sauce or hot green sauce with three eggs of your choice topped with sour cream, cheese, and onions. Served with rice and beans."
      },
      {
        name: "Huevos con Bistek Breakfast",
        price: "$15.00",
        description: "Steak and eggs of your choice, side of tomato and lettuce. Served with rice and beans, choice of corn or flour tortillas."
      },
    ]
  }
];

function Menu({ 
  tacoRef, soupRef, burritoRef, alacarteRef, breakfastRef,
  dessertRef, sidesRef, drinksRef, tamalesRef,
  seafoodRef, saladsRef, specialtyRef 
}) {
  const getRefForSection = (section) => {
    switch (section) {
      case "A la Carte": return alacarteRef;
      case "Tacos": return tacoRef;
      case "Tamales": return tamalesRef;
      case "Burritos": return burritoRef;
      case "Breakfast": return breakfastRef;
      case "Soups": return soupRef;
      case "Speciality Dinners": return specialtyRef;
      case "Seafood": return seafoodRef;
      case "Salads": return saladsRef;
      case "Sides & Extras": return sidesRef;
      case "Desserts": return dessertRef;
      case "Drinks": return drinksRef;
      default: return null;
    }
  };

  return (
    <div className="bg-white text-gray-800 p-6 max-w-5xl mx-auto min-h-[3000px] flex flex-col">
      <h1 className="text-4xl font-bold text-center text-[#6B1C27] mb-10">Menu</h1>
      <p className="text-center text-gray-600 mb-6">Authentic Mexican flavors made fresh daily.</p>

      {menuData.map((section, index) => (
        <div key={index} ref={getRefForSection(section.section)} className="mb-8 w-full">
          <h2 className="text-2xl font-semibold border-b-2 border-[#6B1C27] pb-1 mb-4 pl-15 lg:pl-0">{section.section}</h2>
          <ul className="flex flex-col space-y-4 pl-15 lg:pl-0">
            {section.items.map((item, idx) => (
              <li key={idx} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition w-full">
                <div className="flex justify-between items-start flex-wrap">
                  <h3 className="text-lg font-bold text-[#6B1C27] w-full sm:w-auto">{item.name}</h3>
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
