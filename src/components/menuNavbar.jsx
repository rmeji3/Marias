import { useState } from 'react';
import { Link } from 'react-router-dom';

const scrollToSection = (ref, offset = 82) => (e) => {
  e.preventDefault();
  const topPos = ref.current.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: topPos, behavior: 'smooth' });
};

function MenuNavbar({ tacoRef }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 h-full w- bg-[#6B1C27] text-[#fbf7f5] z-40 p-6 transition-transform duration-300 ease-in-out lg:w-20">
      <div className="flex items-center  ]">
       <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className={`cursor-pointer transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
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
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-40 z-30 transition-opacity duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sliding Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-1/3 bg-[#6B1C27] text-[#fbf7f5] z-40 p-6
          transition-transform duration-300 ease-in-out transform
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:w-2/15
        `}
      >
        <ul className="flex flex-col space-y-6 text-lg font-semibold">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          {[
            "A la Carte", "Speciality Dinners", "Taco", "Soups", "Seafood", "Salads",
            "Side Orders", "Drinks", "Desserts", "Breakfast", "Burritos", "Tamales"
          ].map((item) => (
            <li key={item}>
              <a href="#" onClick={(e) => { scrollToSection(tacoRef)(e); setIsOpen(false); }}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MenuNavbar;
