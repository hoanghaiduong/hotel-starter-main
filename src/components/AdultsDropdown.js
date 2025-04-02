import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import { Menu } from "@headlessui/react";
const lsAdults = [
  { name: "1 Adult", value: 1 },
  { name: "2 Adult", value: 2 },
  { name: "3 Adult", value: 3 },
  { name: "4 Adult", value: 4 },
];
const AdultsDropdown = () => {
  const { adults, setAdults } = useContext(RoomContext);
  return (
    <Menu as="div" className={"w-full h-full bg-white relative"}>
      <Menu.Button
        className={"w-full h-full flex items-center justify-between px-8"}
      >
        {adults} Adult
        <i className="bi bi-chevron-down text-base"></i>
      </Menu.Button>
      <Menu.Items
        as="ul"
        className={`bg-white absolute w-full flex flex-col z-40`}
      >
        {lsAdults.map((item, index) => {
          return (
            <Menu.Item
              as={"li"}
              className={`border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white flex justify-center items-center`}
              onClick={()=>{
                setAdults(item.value)
              }}
              key={index}
            >
              {item.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;
