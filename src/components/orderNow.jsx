import React from "react";
import OrderBox from "./orderBox";
import { SiUbereats, SiDoordash, SiGrubhub, SiPostmates} from "react-icons/si";
// TODO:
// responsiveness classes for desktop
const logos = [
    <SiUbereats className="w-14 h-14 md:w-20 md:h-20 lg:w-20 lg:h-20" />,
    <SiDoordash className="w-14 h-14 md:w-20 md:h-20 lg:w-20 lg:h-20" />,
    <SiGrubhub className="w-14 h-14 md:w-20 md:h-20 lg:w-20 lg:h-20" />,
    <SiPostmates className="w-14 h-14 md:w-20 md:h-20 lg:w-20 lg:h-20" />
];
const Links = [
    "https://www.ubereats.com/store/marias-tamales-y-champurrado/gRpJE9MeRrehmBkwnpDhhw",
    "https://www.doordash.com/store/maria's-tamales-y-champurrado-palos-heights-23196990/12825825/",
    "https://www.grubhub.com/restaurant/marias-tamales-y-champurrado-12246-s-harlem-ave-palos-heights/3300550?utm_source=grubhub_web&utm_medium=content_owned&utm_campaign=menushare&utm_content=share-link",
    "https://postmates.com/store/marias-tamales-y-champurrado/gRpJE9MeRrehmBkwnpDhhw"
];

function OrderNow({ orderNowRef }) {
    return (
        <div ref={orderNowRef} className="flex flex-col items-center gap-5 pb-10">
            <hr className="w-[350px] h-[2px] bg-[#EDEBE8] border-0 mx-auto md:w-[800px] lg:w-[1300px]" />
            <h1 className="text-2xl font-bold lg:text-4xl text-[#2B2B2B]">Order Now</h1>
            <div className="flex flex-wrap lg:flex-row gap-5 justify-center lg:w-full">
                {logos.map((logo, index) => (
                    <OrderBox
                        key={logo.type.name + index}
                        Logo={logos[index]}
                        Link={Links[index]}
                    />
                ))}
            </div>
        </div>
    );
}
export default OrderNow;