import React from "react";
import Carousel from "./carousel";

function Specials({specialsRef}) {
    const specialsText = [

        
        "$10 breakfast starting from 8am to 12am, Mon-Fri!",
        "Taco Tuesday is here! Enjoy single tacos for $2.75!" ,
        "Thursday: But one get one 50% off on all burritos!",
        "Tuesday and Thursday: Enjoy 50% off on all margaritas!",
        
    ];
    return (
        <div ref={specialsRef} className="flex flex-col py-5">
            <h1 className="text-2xl font-bold text-center md:text-3xl lg:text-4xl">Specials</h1>
            <p className = "text-center font-bold p-3">  * Not all tacos and burritos included. Exclusions apply.

 *</p>
            <div className="flex-1 overflow-hidden">
                <Carousel text={specialsText}/>
            </div>
        </div>
    );
}
export default Specials;