import React from "react";
import menuData from "../data/menu_data.json";

export default function Menu({ sectionRefs }) {
  return (
    <div className="bg-white text-gray-800 p-6 max-w-5xl mx-auto min-h-[3000px] flex flex-col text-[#2B2B2B]">
      <h1 className="text-4xl font-bold text-center text-[#6B1C27] mb-10">
        Menu
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Authentic Mexican flavors made fresh daily.
      </p>

      {menuData.map(({ section, items }) => (
        <div
          key={section}
          ref={sectionRefs[section]}
          className="mb-8 w-full"
        >
          <h2 className="text-2xl font-semibold border-b-2 border-[#6B1C27] pb-1 mb-4">
            {section}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-start flex-wrap">
                  <h3 className="text-lg font-bold text-[#6B1C27]">
                    {item.name}
                  </h3>
                  <span className="text-sm font-semibold text-gray-700 text-right">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
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