import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import { Menu } from "@headlessui/react";
const lsKids = [
  { name: "0 Child", value: 0 },
  { name: "1 Child", value: 1 },
  { name: "2 Child", value: 2 },
  { name: "3 Child", value: 3 },
  { name: "4 Child", value: 4 },
];
const KidsDropdown = () => {
  const { kids, setKids } = useContext(RoomContext);
  return (
    <Menu as="div" className={"w-full h-full bg-white relative"}>
      <Menu.Button
        className={"w-full h-full flex items-center justify-between px-8"}
      >
        {kids==0?'No':kids} Children
        <i className="bi bi-chevron-down text-base"></i>
      </Menu.Button>
      <Menu.Items
        as="ul"
        className={`bg-white absolute w-full flex flex-col z-40`}
      >
        {lsKids.map((item, index) => {
          return (
            <Menu.Item
              as={"li"}
              className={`border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white flex justify-center items-center cursor-pointer`}
              onClick={()=>{
                setKids(item.value);
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

export default KidsDropdown;
