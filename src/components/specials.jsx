import React from "react";
import Carousel from "./carousel";

function Specials({specialsRef}) {
    const specialsText = [
        "Try our new BBQ Chicken Pizza, a perfect blend of smoky and savory flavors!",
        "Don't miss out on our limited-time offer: Buy one, get one free on all pasta dishes!",
        "Introducing our seasonal Pumpkin Spice Latte, a cozy treat for the fall!"
    ];
    return (
        <div ref={specialsRef} className="flex flex-col py-5">
            <h1 className="text-2xl font-bold text-center md:text-3xl lg:text-4xl">Specials</h1>
            <div className="flex-1 overflow-hidden">
                <Carousel text={specialsText}/>
            </div>
        </div>
    );
}
export default Specials;