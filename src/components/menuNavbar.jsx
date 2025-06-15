import { useState } from 'react';
import { Link } from 'react-router-dom';

function MenuNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#6B1C27] text-[#fbf7f5] font-montserrat fixed w-full z-50">
      
      {/* Top Bar - Only visible on desktop */}
      <div className="hidden lg:flex items-center justify-between px-4 py-7 h-[82px]">
        <ul className="flex space-x-8 text-lg font-semibold ml-auto">
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>

      {/* Mobile Hamburger - Only visible on mobile */}
      <div className="flex lg:hidden items-center px-4 py-7 h-[82px]">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="flex flex-col space-y-1.5">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <>
          {/* Optional: Background overlay */}
          <div 
            className="fixed inset-0 bg-black opacity-40 z-30"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-2/3 bg-[#6B1C27] text-[#fbf7f5] z-40 p-6 transition-transform duration-300 ease-in-out">
            <ul className="flex flex-col space-y-6 text-lg font-semibold">
              <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>
              <li><Link to="location" onClick={() => setIsOpen(false)}>Location</Link></li>
              <li><Link to="specials" onClick={() => setIsOpen(false)}>Specials</Link></li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}

export default MenuNavbar;
