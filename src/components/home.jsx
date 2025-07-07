import React from "react";
import HomeImg from "../assets/placeholder.jpg";
import logo from "../assets/logobanner.png";
import banner from "../assets/banner.jpg";
import realban from "../assets/realban.png";

function Home() {
    return (
        <div className="pb-5">
            <div className="h-[82px]"></div>
            <div className="relative w-full h-[200px] lg:h-[400px]">
                <img 
                    src={banner} 
                    alt="home image" 
                    className="w-full h-full object-cover lg:h-[400px] " 
                />
                <div className="absolute top-8 left-5 bg-white rounded-full shadow-lg lg:top-10 lg:left-10 lg:p-2">
                    <img 
                        src={logo} 
                        alt="logo" 
                        className="w-35 h-35 object-contain rounded-full lg:w-70 lg:h-70"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
