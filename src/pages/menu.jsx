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

      <br></br>

      <p className ="text- text-black mb-6 bold pl-13 lg:pl-0">*Prices may vary on other ordering platforms </p>

      {menuData.map(({ section, items }) => (
        <div
          key={section}
          ref={sectionRefs[section]}
          className="mb-8 w-full"
        >
          <h2 className="text-2xl font-semibold border-b-2 border-[#6B1C27] pb-1 mb-4 pl-15 lg:pl-0">
            {section}
          </h2>
          <ul className="flex flex-col space-y-4 pl-15 lg:pl-0">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="p-4 border rounded-lg shadow-sm hover:shadow-md transition w-full"
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