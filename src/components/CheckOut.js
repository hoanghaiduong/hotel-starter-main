import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false);
  return (
    <div className="relative flex items-center justify-end  h-full ">
      <div className="absolute z-10 pr-8">
        <div className="">
          <i className="bi bi-calendar text-accent text-base"></i>
        </div>
      </div>
      <div className={'w-full h-full'}>
        <DatePicker
          className={'w-full h-full cursor-pointer'}
          selected={endDate}
          placeholderText="Check Out"
          // onChange={onChange}
          onChange={(date) => setEndDate(date)}
          // startDate={startDate}
          // endDate={endDate}
          // selectsRange
          // inline
        />
      </div>
    </div>
  );
};

export default CheckOut;
