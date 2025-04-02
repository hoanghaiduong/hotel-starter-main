import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { RoomContext } from "../context/RoomContext";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import { FaCheck } from "react-icons/fa";
import { HotelContext } from "../context/HotelContext";
import GlobalConfigs from "../configs/GlobalConfig";
import axiosInstance from "../configs/axios.config";
import { SpinnerCircular } from "spinners-react";
const RoomDetails = () => {
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(true);
  const { facilities } = useContext(HotelContext);
  const { id } = useParams();
  useEffect(() => {
    axiosInstance
      .get(`/RoomType/${id}`)
      .then((response) => {
        setRoom(response?.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(facilities);

  //detructure room
  const { name, description, thumbnail, pricePerNight } = room;
  // console.log(facilities)

  return (
    <section className="">
      {loading ? (
        <div className="h-screen fixed bottom-0 top-0 bg-black/40 w-full z-50 flex justify-center items-center">
          <SpinnerCircular color="white" />
        </div>
      ) : (
        <div>
          {/* banner */}
          <div
            className=" bg-cover bg-center h-[560px] relative flex justify-center items-center"
            style={{
              backgroundImage: `url('${GlobalConfigs.BASE_BACKEND_URL}/${thumbnail}')`,
            }}
          >
            {/* overlay */}
            <div className="absolute bg-black/70  w-full h-full"></div>
            <h1 className="text-6xl text-white z-20 font-primary text-center">
              {name}
            </h1>
          </div>

          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row h-full py-24">
              {/* left */}
              <div className="w-full h-full lg:w-[60%] px-6">
                <h2 className="h2">{name}</h2>
                <p className="mb-8">{description}</p>
                <img
                  className="mb-8"
                  src={`${GlobalConfigs.BASE_BACKEND_URL}/${thumbnail}`}
                  alt=""
                />
                {/* Facilities */}
                <div className="mt-12">
                  <h3 className="h3 mb-3">Room Facilities</h3>
                  <p className="mb-12">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae harum nisi quia sequi neque repellendus libero,
                    quaerat eaque animi perferendis deserunt error ratione ipsum
                    eius facere, ducimus quidem quod aliquam!
                  </p>
                  {/* grid */}
                  <div className="grid grid-cols-3 gap-6 mb-12">
                    {facilities?.map((item, index) => {
                      //destructure item2
                      const { name, icon } = item;
                      console.log(item);
                      return (
                        <div
                          className="flex items-center gap-x-3 flex-1 w-full"
                          key={index}
                        >
                          <div className="text-accent">
                            <i
                              className={`w-[32px] justify-end text-end text-2xl ${
                                typeof icon === "string" ? icon : ""
                              }`}
                            />
                          </div>
                          <div className="text-base">{name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* right */}
              <div className="w-full h-full lg:w-[40%]">
                {/* reservation */}
                <div className="py-8 px-6 bg-accent/20 mb-12">
                  <div className="flex flex-col space-y-4 mb-4">
                    <h3>Your Reservation</h3>
                    <div className="h-[60px]">
                      <CheckIn />
                    </div>
                    <div className="h-[60px]">
                      <CheckOut />
                    </div>
                    <div className="h-[60px]">
                      <AdultsDropdown />
                    </div>
                    <div className="h-[60px]">
                      <KidsDropdown />
                    </div>
                  </div>
                  <button className="btn btn-lg btn-primary w-full">
                    Book now
                  </button>
                </div>
                {/* Rules */}
                <div>
                  <h3 className="h3">Hotel Rules</h3>
                  <p className="mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    recusandae exercitationem pariatur labore velit architecto
                    aliquid repellendus molestiae sequi, voluptate reiciendis
                    laborum, aspernatur magnam aperiam nisi ipsum nulla neque
                    obcaecati.
                  </p>
                </div>
                <ul className="flex flex-col gap-y-4">
                  <li className="flex items-center gap-x-4">
                    <FaCheck className="text-accent" />
                    Check-in: 3:00 PM - 9:00 PM
                  </li>
                  <li className="flex items-center gap-x-4">
                    <FaCheck className="text-accent" />
                    Check-out: 10:30 AM
                  </li>
                  <li className="flex items-center gap-x-4">
                    <FaCheck className="text-accent" />
                    No Pets
                  </li>
                  <li className="flex items-center gap-x-4">
                    <FaCheck className="text-accent" />
                    No Smoking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RoomDetails;
