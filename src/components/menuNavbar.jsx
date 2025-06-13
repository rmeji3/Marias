import { useState } from 'react';
import { Link } from 'react-router-dom';


function MenuNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div >
           <nav className="fixed top-0 bg-[#6B1C27] w-full h-[82px] flex items-center text-[#fbf7f5] lg:px-7 justify-between font-montserrat z-[100]">
             <ul className = "flex space-x-8 text-lg font-semibold text-inherit flex: lg:flex-row flex-col items-center justify-between h-full gap-9">
               <button className="lg:hidden flex flex-col space-y-1.5" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
               <span className="block w-6 h-0.5 bg-white"></span>
               <span className="block w-6 h-0.5 bg-white"></span>
               <span className="block w-6 h-0.5 bg-white"></span>
               </button>
                 <li><a href="/">Home</a></li> 
                <li><a href="#" onClick={() => setIsOpen(false)}>Tacos </a></li>
                <li><a href="#"onClick={() => setIsOpen(false)}>Burritos</a></li>
                <li><a href="#"onClick={() => setIsOpen(false)}>Tortas</a></li>
            </ul>
           </nav>
        </div>
    );
}
export default MenuNavbar;