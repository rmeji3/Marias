import React from "react";
import Map from "../assets/maps.png";

const hours = [
  { day: "Monday", time: "8:00am - 9:00pm" },
  { day: "Tuesday", time: "8:00am - 9:00pm" },
  { day: "Wednesday", time: "8:00am - 9:00pm" },
  { day: "Thursday", time: "8:00am - 9:00pm" },
  { day: "Friday", time: "8:00am - 9:00pm" },
  { day: "Saturday", time: "8:00am - 10:00pm" },
  { day: "Sunday", time: "8:00am - 10:00pm" },
];
//todo: add a link to google maps api
// and add a map that can be interacted with
// add a phone icon to phone
const Location = ({locationRef }) => {
  return (
    <div ref ={locationRef} className="flex flex-col w-full gap-3 items-center">
      <hr className="w-[320px] h-[1.5px] bg-[#EDEBE8] border-0 lg:w-[1300px]"/>  
      <div className="flex gap-3 flex-col lg:flex-row-reverse lg:justify-around lg:w-full">
        <div className="flex flex-col items-center gap-4">
          <img src={Map} className="w-[300px] lg:w-[600px]" alt="map"/>
          <div className="flex justify-center">
            <div className="items-center">
              <p className="text-left text-sm lg:text-lg">12246 S Harlem Ave <br />
                Palos Heights, IL 60463 <br />
                <a href="tel:7085862251">
                  (708) 586-2251
                </a>
              </p>
            </div>
            {/* spacer */}
            <div className="w-[50px] lg:w-[200px]"></div>
            <div className="flex items-end">
              <button className="bg-[#2B2B2B] text-white font-bold text-sm rounded w-[100px] h-[30px] lg:h-[60px] lg:w-[200px] lg:text-xl cursor-pointer">Directions</button>
            </div>
          </div>
        </div>
        <div className="w-[320px] h-[1.5px] bg-[#EDEBE8] border-0 lg:bg-[#EDEBE8] lg:h-[400px] lg:w-[1.5px]"></div>
        <div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg text-[#2B2B2B] text-center font-bold lg:text-3xl">Hours</h1>
            {hours.map((entry, index) => (
              <div key={index} className="flex justify-between w-[300px] text-sm lg:text-lg">
                <span>{entry.day}</span>
                <span>{entry.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="w-[320px] h-[1.5px] bg-[#EDEBE8] border-0 lg:w-[1300px]"/>
    </div>
  );
};

export default Location;
