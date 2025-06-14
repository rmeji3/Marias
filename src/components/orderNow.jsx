import React from "react";

function OrderNow({ orderNowRef }) {
    return (
        <div ref={orderNowRef} className="flex flex-col h-[500px]">
        <hr className="w-[350px] h-[1px] bg-[#EDEBE8] border-0 mx-auto my-4" />
        <h1 className="text-2xl font-bold">Order Now</h1>
        <p>Order Now component content goes here.</p>
        </div>
    );
}
export default OrderNow;