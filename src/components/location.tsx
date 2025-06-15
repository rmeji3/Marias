import React, {useState, useEffect} from "react";
import {APIProvider, AdvancedMarker, useAdvancedMarkerRef, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
import { CiPhone } from "react-icons/ci";

const hours = [
  { day: "Mon", time: "8:00am - 9:00pm" },
  { day: "Tue", time: "8:00am - 9:00pm" },
  { day: "Wed", time: "8:00am - 9:00pm" },
  { day: "Thu", time: "8:00am - 9:00pm" },
  { day: "Fri", time: "8:00am - 9:00pm" },
  { day: "Sat", time: "8:00am - 10:00pm" },
  { day: "Sun", time: "8:00am - 10:00pm" },
];

type Poi ={ key: string, location: google.maps.LatLngLiteral }


const Location = ({locationRef }) => {
  const [apiKey, setApiKey] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/maps-key') // change this when we deploy
      .then(res => res.json())
      .then(
        data => setApiKey(data.key))
  }, []);

  const openMaps = () => {
    const address = encodeURIComponent("12246 S Harlem Ave Palos Heights, IL 60463");
    const isApple = /iPhone|iPad|Macintosh/.test(navigator.userAgent);
    const url = isApple
      ? `http://maps.apple.com/?q=${address}`
      : `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(url, "_blank");
  };

  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <div ref ={locationRef} className="flex flex-col w-full gap-3 items-center py-5">
      <hr className="w-[320px] h-[2px] bg-[#EDEBE8] border-0 lg:w-[1300px] md:w-[800px]"/>  
      <div className="flex gap-3 flex-col md:flex-row-reverse lg:flex-row-reverse lg:justify-around lg:w-full py-5 md:py-2">
        <div className="flex flex-col items-center gap-4">
          {/* google map api */}
          <div className="border-3 border-[#EDEBE8] w-[300px] h-[200px] lg:w-[650px] lg:h-[300px] md:w-[400px] md:h-[190px]">

            {apiKey && (
              <APIProvider apiKey={apiKey}>
                <Map
              mapId={'fb58f95f92963648c31d4eb0'}
                  defaultZoom={18}
                disableDefaultUI={true}
                  defaultCenter={{ lat: 41.66835, lng: -87.79722 }}
                  className="w-full h-full"
              >
                <AdvancedMarker
                  position={{ lat: 41.66835, lng: -87.79722 }}
                  title="My Marker"
                  ref={markerRef}
                  onClick={() => {
                    setInfowindowOpen(!infowindowOpen);
                  }}
                ></AdvancedMarker>
              </Map>
              </APIProvider>
            )}
          </div>
          <div className="flex justify-between w-[300px] lg:w-[650px] md:w-[400px]">
            <div className="items-center text-sm md:text-m lg:text-lg">
              <p className="text-left ">12246 S Harlem Ave <br />
                Palos Heights, IL 60463 <br />
                <a className="flex gap-2 items-center hover:text-[#6B1C27]" href="tel:7085862251">
                  (708) 586-2251
                  <CiPhone />
                </a>
              </p>
            </div>
            <div className="flex items-end">
              <button className="bg-[#2B2B2B] text-white font-bold text-sm rounded w-[100px] h-[30px] 
              lg:h-[60px] lg:w-[200px] lg:text-xl cursor-pointer hover:bg-[#6B1C27] md:h-[45px] md:w-[130px] md:text-lg"
              onClick={openMaps}
              >Directions</button>
            </div>
          </div>
        </div>
        <div className="w-[320px] h-[2px] bg-[#EDEBE8] border-0 lg:bg-[#EDEBE8] lg:h-[400px] lg:w-[2px] md:h-[250px] md:w-[2px]"></div>
        <div className="flex">
          <div className="flex flex-col lg:gap-3">
            <h1 className="text-2xl text-[#2B2B2B] text-center font-bold lg:text-4xl md:text-2xl">Hours</h1>
            <div className="flex flex-col lg:gap-2 lg:pt-5">
              {hours.map((entry, index) => (
              <div key={index} className="flex justify-between w-[300px] text-sm lg:text-2xl text-[#2B2B2B md:text-lg">
                <span>{entry.day}</span>
                <span>{entry.time}</span>
              </div>
            ))}
            </div>
            <p className="text-[7px] lg:pt-5 text-sm">*Hours may vary during holidays</p>
          </div>
        </div>
      </div>
      <hr className="w-[320px] h-[2px] bg-[#EDEBE8] border-0 md:w-[800px] lg:w-[1300px]"/>
    </div>
  );
};

export default Location;
