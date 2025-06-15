import React from "react";

function OrderBox({Logo, Link}) {
    return (
        <div className="flex flex-col items-center justify-between bg-[#6B1C27] text-[#fbf7f5] p-5 rounded-lg shadow-lg w-35/100 h-[150px]">
           <div className="mb-2">{Logo}</div>
            <a href={Link} target="_blank" rel="noopener noreferrer" className="flex bg-white text-black text-sm rounded h-[25px] w-[100px] items-center justify-center">
                Order Now
            </a>
        </div>
    );
}
export default OrderBox;