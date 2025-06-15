import React from "react";
import HomeImg from "../assets/placeholder.jpg";
import logo from "../assets/logobanner.png";

function Home({ homeRef }) {
    return (
        <div ref={homeRef} className="pb-5">
            <div className="h-[82px]"></div>
            <div className="relative w-full h-[400px]">
                <img 
                    src={HomeImg} 
                    alt="home image" 
                    className="w-full h-full object-cover" 
                />
                <div className="absolute top-10 left-10 bg-white p-2 rounded-full shadow-lg">
                    <img 
                        src={logo} 
                        alt="logo" 
                        className="w-70 h-70 object-contain rounded-full "
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
