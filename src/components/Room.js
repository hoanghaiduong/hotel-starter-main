import React from "react";
import { Link } from "react-router-dom";

const Room = ({room}) => {
  const { id, name, image, size, maxPerson, description, price } = room;
  return (
    <div className="bg-white shadow-2xl min-h-[500px] group">
      {/* img */}
      <div className="overflow-hidden">
        <img
          className="group-hover:scale-110 transition-all duration-300 w-full"
          src={image}
          alt=""
        />
      </div>
      {/* details */}
      <div className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base">
        <div className="flex justify-between w-[80%]">
          {/* size */}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <i className="bi bi-arrows-fullscreen text-[15px]"></i>
            </div>
            <div className="flex gap-x-1">
              <div className="normal-case text-accent">{size}m2</div>
            </div>
          </div>
          {/* room capacity */}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <i className="bi bi-people font-bold text-[15px]"></i>
            </div>
            <div className="flex gap-x-1">
              <div className="normal-case  text-accent">{maxPerson} Guest</div>
            </div>
          </div>
          {/* room beds */}
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <i className="fa-solid font-bold fa-bed text-[15px]" />
            </div>
            <div className="flex gap-x-1">
              <div className="normal-case text-accent">{size}m2</div>
            </div>
          </div>
        </div>
      </div>
      {/* name and description */}
      <div className="max-w-[300px] mx-auto text-center">
        <Link to={`/room/${id}`}>
          <h3 className="h3">{name}</h3>
        </Link>
        <p className="text-left mx-auto mb-3 lg:mb-6">
          {description.slice(0, 120)}...
        </p>
        {/* <Link className="relative transition-all duration-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-slate-600 after:transition-all after:duration-500 hover:after:w-full">
        View more
      </Link> */}
      </div>
      <Link to={`/room/${id}`} className="mt-4 btn btn-secondary btn-sm ">
        Book now from ${price}
      </Link>
    </div>
  );
};

export default Room;
