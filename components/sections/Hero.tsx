import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "../Container";
import { Header } from "../Header";

export function Hero() {
  return (
    <div className="mx-auto max-w-[86rem] w-dvw">
      <Swiper loop={true} spaceBetween={50} className="relative h-[90%] w-[97%]  overflow-hidden rounded-2xl">

        <SwiperSlide className="relative h-full w-full bg-[url(img/kapil.jpg)] px-50 py-50 bg-no-repeat bg-cover">
          <div className="absolute h-full w-full  bg-radial from-gray-700/30  to-blue-400/40 top-0 left-0 -z-50" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-medium text-orange-400">
              Welcome to Gangasagar Hotel and Travels
            </p>
            <h1 className="text-6xl max-w-[750px] font-catamaran font-extrabold text-gray-100 tracking-tigh">
              Best Private Car and Hotels at Gangasagar
            </h1>
            <p className="max-w-[700px] text-base leading-snug text-gray-200 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              eius sequi, pariatur velit ipsa explicabo laboriosam accusantium
              id doloremque illo quis vitae perspiciatis, veritatis et. Quasi at
              amet iste fuga?
            </p>
            <a
              href=""
              className="px-5 py-2 w-fit text-lg font-ubuntu font-medium bg-orange-600 text-gray-200 rounded-full hover:text-orange-600 hover:bg-white transition-colors delay-150 "
            >
              Book Now
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-full w-full bg-[url(img/car.jpeg)] px-50 py-50 bg-no-repeat bg-cover">
          <div className="absolute h-full w-full  bg-radial from-gray-700/30  to-orange-600/15 top-0 left-0 -z-50" />
          <div className="flex flex-col gap-3">
            <p className="text-xl font-medium text-orange-400">
              Welcome to Gangasagar Hotel and Travels
            </p>
            <h1 className="text-6xl max-w-[850px] font-catamaran font-extrabold text-white tracking-tigh">
              Best Private Car  Service at Gangasagar
            </h1>
            <p className="max-w-[700px] text-base leading-snug text-gray-200 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              eius sequi, pariatur velit ipsa explicabo laboriosam accusantium
              id doloremque illo quis vitae perspiciatis, veritatis et. Quasi at
              amet iste fuga?
            </p>
            <a
              href=""
              className="px-5 py-2 w-fit text-lg font-ubuntu font-medium bg-orange-600 text-gray-200 rounded-full hover:text-orange-600 hover:bg-white transition-colors delay-150 "
            >
              Book Now
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
