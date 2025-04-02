import React, { useState } from "react";
//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false);
  // const [endDate, setEndDate] = useState(null);
  // const onChange = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  // };
  return (
    <div className="relative flex items-center justify-end  h-full ">
      <div className="absolute z-10 pr-8">
        <div className="">
          <i className="bi bi-calendar text-accent text-base"></i>
        </div>
      </div>
      <div className={`w-full h-full`}>
        <DatePicker
          className={`w-full h-full cursor-pointer`}
          selected={startDate}
          placeholderText="Check in"
          // onChange={onChange}
          onChange={(date) => setStartDate(date)}
          startDate={startDate}
          // endDate={endDate}
          // selectsRange
          // inline
        />
      </div>
    </div>
  );
};

export default CheckIn;
