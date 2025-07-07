import React from "react";
import menuData from "../data/menu_data.json";


export default function Menu({ sectionRefs }) {
  return (
    <div className="bg-white text-gray-800 pl-9.5 max-w-5xl mx-auto min-h-[3000px] flex flex-col text-[#2B2B2B] lg:pl-0">
      <h1 className="text-4xl font-bold text-center text-[#6B1C27] mb-10">
        Menu
      </h1> 
      <p className="text-center text-gray-600 mb-6">
        Authentic Mexican flavors made fresh daily.
      </p>

      <br></br>

      <p className ="text- text-black mb-6 bold pl-13 lg:pl-0">*Prices may vary on other ordering platforms </p>

      {menuData.map(({ section, items, image }) => (
  <div
    key={section}
    ref={sectionRefs[section]}
    className="mb-16 w-full"
  >
    <div className="relative h-48 sm:h-64 w-full mb-6 overflow-hidden rounded-2xl shadow-md">
      <img
        src={image}
        alt={section}
        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end p-4">
        <h2 className="text-3xl font-bold text-white drop-shadow">
          {section}
        </h2>
      </div>
    </div>

    <ul className="flex flex-col space-y-4 pl-0">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="p-4 border rounded-lg shadow-sm hover:shadow-md transition w-full bg-white"
        >
          <div className="flex justify-between items-start flex-wrap">
            <h3 className="text-lg font-bold text-[#6B1C27] w-full sm:w-auto">
              {item.name}
            </h3>
            <span className="text-sm font-semibold text-gray-700 w-full sm:w-auto text-right">
              {item.price}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1 w-full">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  </div>
))}
    </div>
  );
}