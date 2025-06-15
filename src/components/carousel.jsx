import React from "react";
import SimpleSlider from "./slider";
import pic from '../assets/placeholder.jpg';
import yard1 from '../assets/logo.png';
import yard2 from '../assets/logobanner.png';
import yard3 from '../assets/maps.png';

const images = [
    yard1,
    yard2,
    yard3
]

const Carousel = ({text}) => {
  return (
    <div
      className="flex flex-col lg:flex-row overflow-hidden"
    >
      {/* Right: Carousel */}
      <div className="w-full flex flex-col items-center justify-center">
        <SimpleSlider images={images} text={text}/>
      </div>
    </div>
  );
};

export default Carousel;