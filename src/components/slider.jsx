import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider({ images, text }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="w-9/10 px-4 py-6">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="flex flex-col items-center bg-[#6B1C27] overflow-hidden md:flex-row lg:flex-row">
              {/* Text Section */}
              <div className="w-full p-6 text-center md:w-4/10 lg:w-1/3">
                <p className="text-lg font-semibold text-white md:text-2xl lg:text-2xl">
                  {text[index]}
                </p>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-6/10 lg:w-2/3">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[700px] object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
