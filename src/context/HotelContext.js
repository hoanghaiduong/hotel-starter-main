import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../configs/axios.config";

export const HotelContext = createContext();

const HotelProvider = ({ children }) => {
  const [hotel, setHotel] = useState({});
  const [loading, setLoading] = useState(false);
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [total, setTotal] = useState(0);
  const [roomTypes, setRoomTypes] = useState([]);
  useEffect(() => {
    setTotal(adults + kids);
  }, [adults, kids]);
  useEffect(() => {
    // Bắt đầu trạng thái loading khi gọi API
    setLoading(true);
    // Gọi API với các tham số cần thiết
    axiosInstance
      .get(`/Hotel/query`, {
        params: {
          name: 'Khách Sạn Hà Trinh',
        },
      })
      .then((response) => {
        // Cập nhật state hotels từ dữ liệu trả về
        setHotel(response.data);

        // console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching hotel data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  // Cập nhật roomTypes khi hotel thay đổi
  useEffect(() => {
    if (hotel?.roomTypes) {
      setRoomTypes(hotel?.roomTypes);
    }
  }, [hotel]);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    // Giả sử bạn muốn lọc hoặc thay đổi dữ liệu dựa trên hành động click
    const newRoomTypes = hotel?.roomTypes?.filter((roomType) => {
      //destructure
      const { capacity } = roomType;
      return total <= capacity;
    });
    setTimeout(() => {
      setRoomTypes(newRoomTypes);
      setLoading(false);
    }, 1500);
  };

  return (
    <HotelContext.Provider
      value={{
        hotel,
        adults,
        kids,
        roomTypes,
        handleClick,
        setAdults,
        setKids,
        facilities: hotel?.amenities,
        loading,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export default HotelProvider;
