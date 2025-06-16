import React from "react";

function MenuCategory({ref, category, items}) {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[#6B1C27]">{category}</h2>
            <ul className="list-disc pl-5">
                {items.map((item, index) => (
                    <li key={index} className="mb-2 text-[#2B2B2B]">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default MenuCategory;