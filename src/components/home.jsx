import React from "react";
import HomeImg from "../assets/placeholder.jpg";
import logo from "../assets/logobanner.png";

function Home() {
    return (
        <div className="pb-5">
            <div className="h-[82px]"></div>
            <div className="relative w-full h-[200px] lg:h-[400px]">
                <img 
                    src={HomeImg} 
                    alt="home image" 
                    className="w-full h-full object-cover" 
                />
                <div className="absolute top-8 left-5 lg:top-10 lg:left-10 bg-white lg:p-2 rounded-full shadow-lg">
                    <img 
                        src={logo} 
                        alt="logo" 
                        className="w-35 h-35 lg:w-70 lg:h-70 object-contain rounded-full "
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
