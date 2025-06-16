import React from "react";

function OrderBox({Logo, Link}) {
    return (
        <div className="flex flex-col items-center justify-between bg-[#6B1C27] text-[#fbf7f5] p-5 rounded-lg shadow-lg w-35/100 h-[150px] 
            md:w-[20/100] md:h-[180px] lg:w-20/100 lg:h-[200px]">
           <div className="mb-2">{Logo}</div>
            <a href={Link} target="_blank" rel="noopener noreferrer" className="flex bg-white text-[#2B2B2B] font-bold text-sm rounded h-[25px] w-[100px] 
            items-center justify-center hover:bg-[#EDEBE8] transition-colors duration-300 md:text-lg md:h-[40px] md:w-[180px] lg:text-lg lg:h-[50px] lg:w-[200px]">
                Order Now
            </a>
        </div>
    );
}
export default OrderBox;