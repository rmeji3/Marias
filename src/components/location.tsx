import React, {useState, useEffect} from "react";
import {APIProvider, AdvancedMarker, useAdvancedMarkerRef, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

const hours = [
  { day: "Monday", time: "8:00am - 9:00pm" },
  { day: "Tuesday", time: "8:00am - 9:00pm" },
  { day: "Wednesday", time: "8:00am - 9:00pm" },
  { day: "Thursday", time: "8:00am - 9:00pm" },
  { day: "Friday", time: "8:00am - 9:00pm" },
  { day: "Saturday", time: "8:00am - 10:00pm" },
  { day: "Sunday", time: "8:00am - 10:00pm" },
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


  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <div ref ={locationRef} className="flex flex-col w-full gap-3 items-center">
      <hr className="w-[320px] h-[1.5px] bg-[#EDEBE8] border-0 lg:w-[1300px]"/>  
      <div className="flex gap-3 flex-col lg:flex-row-reverse lg:justify-around lg:w-full">
        <div className="flex flex-col items-center gap-4">
          {/* google map api */}
          <div className="w-[240px] h-[240px] lg:w-[600px] lg:h-[400px]">

            {apiKey && (
              <APIProvider apiKey={apiKey}>
                <Map
              mapId={'fb58f95f92963648c31d4eb0'}
                  defaultZoom={18}
                disableDefaultUI={true}
                  defaultCenter={{ lat: 41.66835, lng: -87.79722 }}
                  onCameraChanged={(ev: MapCameraChangedEvent) =>
                    console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
                  }
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
