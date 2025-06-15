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

function Navbar({locationRef, orderNowRef, specialsRef}) {
  return (
      <div className="w-full">
      <header className="fixed top-0 bg-[#6B1C27] w-full h-[82px] flex text-[#fbf7f5] z-[100]">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <nav className=" w-full flex items-center h-full z-50 lg:justify-end md:justify-center">
            <ul className="flex items-center space-x-8 text-lg w-full font-semibold text-inherit justify-evenly md:justify-evenly md:text-lg lg:justify-end">
              <li className="m-0 lg:m-8"><Link to="/menu" className="hover:underline">Menu</Link></li>
              <li className="m-0 lg:m-8"><a href="" className="hover:underline" onClick={scrollToSection(locationRef)}>Location</a></li>
              <li className="m-0 lg:m-8"><a href="" className="hover:underline" onClick={scrollToSection(specialsRef)}>Specials</a></li>
              <button onClick={scrollToSection(orderNowRef)} 
                className="cursor-pointer bg-[#F7F6F3] text-[#2B2B2B] font-bold text-md rounded h-[30px] w-[110px] md:text-lg md:h-[40px] md:w-[150px]
                lg:text-lg lg:h-[40px] lg:w-[150px] flex items-center justify-center hover:bg-[#EDEBE8] transition-colors duration-300"
              >Order Now</button>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
