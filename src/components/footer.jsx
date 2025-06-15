import React from "react";
import { FaFacebook, FaPhone, FaYelp } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="bg-[#6B1C27] flex flex-col items-center justify-center gap-4 px-4 py-6">
      
      {/* Top Row */}
      <div className="w-full max-w-[950px] flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="text-base lg:text-xl text-[#fbf7f5] font-bold text-center lg:text-left">
            Maria's tamales y Champurrado 
        </div>

        {/* Icons */}
        <div className="flex gap-3">
          <a href="https://www.yelp.com/biz/maria-s-tamales-y-champurrado-palos-heights" className="text-white">
            <FaYelp className="h-5 w-5" />
          </a>
          <a href="tel:7085862251" className="text-white">
            <FaPhone className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/p/Marias-Tamales-Y-Champurrado-100065225223054/" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaFacebook className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="w-full max-w-[950px] border-t border-[#dbe9e6] bg-[#EDEBE8]" />

      {/* Footer */}
      <div className="w-full max-w-[950px] text-center lg:text-right text-[#fbf7f5] text-xs">
        <p>© 2025 Leal Enterprises. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;