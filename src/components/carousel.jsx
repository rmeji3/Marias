import React from "react";
import SimpleSlider from "./slider";
import pic from '../assets/placeholder.jpg';
import yard1 from '../assets/logo.png';
import yard2 from '../assets/logobanner.png';
import yard3 from '../assets/maps.png';
import eggs from '../assets/eggs.jpg';
import burrito from '../assets/burrito.jpg';
import marg from '../assets/marg.webp';
import taco from '../assets/taco.jpg';

const images = [
    eggs,
    taco,
    burrito,
    marg
]

const Carousel = ({text}) => {
  return (
    <div
      className="flex flex-col overflow-hidden lg:flex-row"
    >
      {/* Right: Carousel */}
      <div className="w-full flex flex-col items-center justify-center">
        <SimpleSlider images={images} text={text}/>
      </div>
    </div>
  );
};

export default Carousel;