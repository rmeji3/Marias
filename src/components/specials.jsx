import React from "react";
// TODO: Add content to the Specials component:
//       carousel with images of specials, text over
//       Add responsiveness classes for desktop
function Specials({specialsRef}) {
    return (
        <div ref={specialsRef} className="flex flex-col h-[500px]">
            <h1 className="text-2xl font-bold">Specials</h1>
            <p>Specials component content goes here.</p>
        </div>
    );
}
export default Specials;