import React, { useContext } from "react";
//import swpier
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";
//images
import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img3 from "../assets/img/heroSlider/3.jpg";
import { HotelContext } from "../context/HotelContext";
import GlobalConfigs from "../configs/GlobalConfig";
import { Link } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation 1",
    bg: Img1,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation 2",
    bg: Img2,
    btnText: "See our rooms",
  },
  {
    title: "Your Luxury Hotel For Vacation 3",
    bg: Img3,
    btnText: "See our rooms",
  },
];
const HeroSlider = () => {
  const { roomTypes, loading } = useContext(HotelContext);
  console.log(roomTypes);
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="heroSlider h-[600px] lg:h-[860px]"
    >
      {roomTypes !== null ? (
        <>
          {roomTypes?.map((item, index) => {
            //detructure slide
            const { id, name, thumbnail, description } = item;
            return (
              <SwiperSlide
                key={index}
                className="h-full relative flex justify-center items-center"
              >
                <div className="z-20 text-white text-center">
                  <div className="uppercase font-tertiary tracking-[6px] mb-5">
                    Just Enjoy and Relax
                  </div>
                  <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] mb-6 leading-tight">
                    {name}
                  </h1>
                  <button className="btn btn-lg btn-primary mx-auto">
                    <Link to={`/room/${id}`}>SEE OUR ROOM</Link>
                  </button>
                </div>

                <div className="absolute top-0 w-full h-full">
                  <img
                    className="object-cover h-full w-full"
                    src={GlobalConfigs.BASE_BACKEND_URL + "/" + thumbnail ?? Img1}
                  />
                </div>
                {/* overlay */}
                <div className="absolute w-full h-full bg-black/70"></div>
              </SwiperSlide>
            );
          })}
        </>
      ) : (
        <div className="h-screen fixed bottom-0 top-0 bg-black/40 w-full z-50 flex justify-center items-center">
          <SpinnerCircular color="white" />
        </div>
      )}
    </Swiper>
  );
};

export default HeroSlider;
