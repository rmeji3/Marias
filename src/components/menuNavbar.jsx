import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuData from "../data/menu_data.json";  

const scrollToSection = (ref, offset = 82) => (e) => {
  e.preventDefault();
  if (!ref.current) return;
  const topPos =
    ref.current.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: topPos, behavior: "smooth" });
};

export default function MenuNavbar({ sectionRefs }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed flex items-center justify-center  top-0 left-[0] w-12 h-12 lg:w-20 lg:h-20 md:w-16 md:h-16 bg-[#6B1C27] text-[#fbf7f5] z-40 p-2 transition-transform duration-300 ease-in-out lg:w-[20] lg:left-0 lg:p-6">
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label="Toggle menu"
        className={`mb-8 cursor-pointer transition-transform duration-300 ${
          isOpen ? "rotate-90" : ""
        } flex items-center justify-center h-full`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-2/3 bg-[#6B1C27] text-[#fbf7f5] z-40 p-6
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:w-1/6
        `}
      >
        <ul className="flex flex-col space-y-6 text-lg font-semibold">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          {menuData.map(({ section }) => (
            <li key={section}>
              <a
                href="#"
                onClick={(e) => {
                  scrollToSection(sectionRefs[section])(e);
                  setIsOpen(false);
                }}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
