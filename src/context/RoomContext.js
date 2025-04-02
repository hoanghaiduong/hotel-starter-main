import React, { createContext, useEffect, useState } from "react";
import { roomData } from "../data";
export const RoomContext = createContext();
const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTotal(adults + kids);
  }, [adults, kids]);
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false);
    }, 1500);
  };
  return (
    <RoomContext.Provider
      value={{ rooms, adults, setAdults, kids, setKids, handleClick, loading }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
