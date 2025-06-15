import { useState } from 'react'
import { Link } from 'react-router-dom';


const scrollToSection = (ref, offset = 82) => (e) => {
  e.preventDefault();
  const topPos = ref.current.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: topPos, behavior: 'smooth' });
};

function Navbar({locationRef, orderNowRef, specialsRef}) {
  return (
      <div >
      <header className="fixed top-0 bg-[#6B1C27] w-full h-[82px] flex justify-end text-[#fbf7f5] lg: justify-between  z-[1]">
        <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
          <nav className=" w-full flex justify-end items-center h-full  z-50">
            <ul className="flex space-x-8 text-lg font-semibold text-inherit">
              <li><Link to="/menu">Menu</Link></li>
              <li><a href="" onClick={scrollToSection(locationRef)}>Location</a></li>
              <li><a href="" onClick={scrollToSection(specialsRef)}>Specials</a></li>
              <li><a href="" onClick={scrollToSection(orderNowRef)}>Order Now</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
