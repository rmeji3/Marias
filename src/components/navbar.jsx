import { useState } from 'react'
import { Link } from 'react-router-dom';

import Logo from '../assets/logo.png';
// TODO: add logo to top left
//       Add responsiveness classes for mobile
const scrollToSection = (ref, offset = 82) => (e) => {
  e.preventDefault();
  const topPos = ref.current.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: topPos, behavior: 'smooth' });
};

function Navbar({homeRef, locationRef, orderNowRef, specialsRef}) {
  return (
      <div className="w-full">
      <header className="fixed top-0 bg-[#6B1C27] w-full h-[82px] flex text-[#fbf7f5] z-[100]">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <nav className=" w-full flex items-center h-full z-50 justify-between">
            <button onClick={scrollToSection(homeRef)} className="cursor-pointer border-none">
              <img src={Logo} alt="Maria's Tamales y Champurrado" className="h-16 w-16 lg:h-20 lg:w-20" />
            </button>
            <ul className="flex space-x-8 text-lg font-semibold text-inherit">
              <li><Link to="/menu" className="hover:underline">Menu</Link></li>
              <li><a href="" className="hover:underline" onClick={scrollToSection(locationRef)}>Location</a></li>
              <li><a href="" className="hover:underline" onClick={scrollToSection(specialsRef)}>Specials</a></li>
              <li><a href="" className="hover:underline" onClick={scrollToSection(orderNowRef)}>Order Now</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
