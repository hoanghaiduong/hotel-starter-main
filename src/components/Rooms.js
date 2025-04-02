import React, { useContext } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
import Room from "./Room";

//loader
import {
  SpinnerDotted,
  SpinnerRoundFilled,
  SpinnerCircular,
} from "spinners-react";
import { HotelContext } from "../context/HotelContext";
const Rooms = () => {
  const { roomTypes, loading } = useContext(HotelContext);
 
  return (
    <section className="py-24">
      {/* overlay & spinner */}
      {loading && (
        <div className="h-screen fixed bottom-0 top-0 bg-black/40 w-full z-50 flex justify-center items-center">
          <SpinnerCircular color="white" />
        </div>
      )}
      <div className="container mx-auto lg:px-0">
        <div className="text-center">
          <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
            Hotel & Spa Adina
          </div>
          <h2 className="font-primary text-[45px] mb-4">Room & Suites</h2>
        </div>
        {/* grid */}

        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {roomTypes?.map((room) => {
            return <Room room={room} key={room.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
