import React from "react";
import Map from "../assets/maps.png";

const Location = ({locationRef }) => {
  return (
    <div ref ={locationRef} className="flex flex-col">
        <hr className="w-[350px] h-[500px] bg-[#EDEBE8] border-0 mx-auto my-4" />  
        <h1 className="text-2xl font-bold">Location</h1>
        <img src={Map} alt="map" />
        <p>Location component content goes here.</p>
    </div>
  );
};

export default Location;
