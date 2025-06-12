import { useState } from 'react'

function Navbar() {
  return (
      <div>
      <header className="fixed top-0 bg-[#6B1C27] w-full h-[82px] flex items-center text-[#fbf7f5] px-4 lg:px-7 justify-between font-montserrat z-[100]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className=" w-full flex items-center">
            <ul className="flex space-x-8 text-lg font-semibold text-inherit">
              <li><a href="">Menu</a></li>
              <li><a href="">Location</a></li>
              <li><a href="">Specials</a></li>
              <li><a href="">Order Now</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
