import React, { useState } from "react";
import menuData from "../data/menu_data.json";

export default function Menu({ sectionRefs }) {
  const [modalImg, setModalImg] = useState(null);

  return (
    <div className="bg-white my-10 text-gray-800 lg:px-10 max-w-5xl mx-auto min-h-[3000px] flex flex-col items-center text-[#2B2B2B] ">
      <h1 className="text-4xl font-bold text-center text-[#6B1C27] mb-10 pt-10">
        Menu
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Authentic Mexican flavors made fresh daily.
      </p>
      <br />
      <p className="text-black mb-6 font-bold pl-13 lg:pl-0">
        *Prices may vary on other ordering platforms
      </p>

      {menuData.map(({ section, items, image }) => (
        <div
          key={section}
          ref={sectionRefs[section]}
          className="mb-16 w-full flex flex-col items-center "
        >
          <div className="relative h-48 w-[90%] md:w-[90%] lg:w-full lg:h-80 md:h-70 mb-6 overflow-hidden rounded-2xl shadow-md">
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

          <ul className="flex flex-col items-center space-y-4 pl-0 w-full">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="p-4 border rounded-lg shadow-sm hover:shadow-md w-[90%] transition bg-white md:w-[90%] lg:w-full"
              >
                <div className="flex justify-between items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold text-[#6B1C27]">
                        {item.name}
                      </h3>
                      <span className="text-sm font-semibold text-gray-700 text-right ml-4">
                        {item.price}
                      </span>
                    </div>
                    <h2 className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </h2>
                  </div>
                  {item.picture && (
                    <button
                      className="ml-4 flex-shrink-0 focus:outline-none"
                      onClick={() => setModalImg(item.picture)}
                      aria-label={`View ${item.name} image`}
                    >
                      <img
                        src={item.picture}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg border hover:scale-105 transition"
                      />
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Modal for full image */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
          onClick={() => setModalImg(null)}
        >
          <div
            className="bg-white rounded-lg p-4 max-w-full max-h-full flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={modalImg}
              alt="Full size"
              className="max-w-[90vw] max-h-[80vh] rounded-lg"
            />
            <button
              className="mt-4 px-4 py-2 bg-[#6B1C27] text-white rounded hover:bg-[#8c2736] transition"
              onClick={() => setModalImg(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}