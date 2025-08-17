import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { bookLink } from "@/constant/navmenu";

export function Hero() {
  return (
    <div className="mx-auto max-w-[86rem] w-dvw">
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
        spaceBetween={50}
        speed={1200}
        className="relative h-fit lg:h-[90%] w-[97%]  overflow-hidden rounded-2xl"
      >
        <SwiperSlide className="relative h-full w-full bg-[url(/img/kapil.jpg)] px-5 lg:px-50 py-10 lg:py-50 bg-no-repeat bg-center bg-cover">
          <div className="absolute h-full w-full  bg-radial from-gray-700/50  to-blue-950/60 top-0 left-0 -z-50" />
          <div className="flex flex-col gap-1 lg:gap-3">
            <p className="text-sm lg:text-xl font-medium text-orange-400">
              Welcome to Gangasagar
            </p>
            <h1 className="text-3xl lg:text-6xl max-w-[750px] font-catamaran font-extrabold text-gray-100 tracking-tigh">
              Best Private Car and Hotels at Gangasagar
            </h1>
            <p className="max-w-[700px] text-xs lg:text-base leading-snug text-gray-200 mb-5">
              Discover the best private car services and hotels in Gangasagar,
              offering comfort and convenience for your travels. Enjoy seamless
              transportation and cozy accommodations that make your stay truly
              memorable.
            </p>
            <a
              href={bookLink}
              className="px-3 py-1 lg:px-5 lg:py-2 w-fit text-base lg:text-lg font-ubuntu font-medium bg-orange-600 text-gray-200 rounded-full hover:text-orange-600 hover:bg-white transition-colors delay-150 "
            >
              Book Now
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-full w-full bg-[url(/img/car.jpeg)] px-5 lg:px-50 py-10 lg:py-50 bg-no-repeat bg-center bg-cover">
          <div className="absolute h-full w-full  bg-radial from-gray-700/50  to-blue-950/60 top-0 left-0 -z-50" />
          <div className="flex flex-col gap-1 lg:gap-3">
            <p className="text-sm lg:text-xl font-medium text-orange-400">
              Welcome to Gangasagar
            </p>
            <h1 className="text-3xl lg:text-6xl max-w-[750px] font-catamaran font-extrabold text-gray-100 tracking-tigh">
              Affordable Private Cars to Gangasagar
            </h1>
            <p className="max-w-[700px] text-xs lg:text-base leading-snug text-gray-200 mb-5">
              Experience budget-friendly private car services to Gangasagar,
              ensuring a comfortable and hassle-free journey. Enjoy competitive
              rates without compromising on quality, making your travel both
              affordable and enjoyable.
            </p>
            <a
              href={bookLink}
              className="px-3 py-1 lg:px-5 lg:py-2 w-fit text-base lg:text-lg font-ubuntu font-medium bg-orange-600 text-gray-200 rounded-full hover:text-orange-600 hover:bg-white transition-colors delay-150 "
            >
              Book Now
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative h-full w-full bg-[url(/img/hotel.jpeg)] px-5 lg:px-50 py-10 lg:py-50 bg-no-repeat bg-center bg-cover">
          <div className="absolute h-full w-full  bg-radial from-gray-700/50  to-blue-950/60 top-0 left-0 -z-50" />
          <div className="flex flex-col gap-1 lg:gap-3">
            <p className="text-sm lg:text-xl font-medium text-orange-400">
              Welcome to Gangasagar
            </p>
            <h1 className="text-3xl lg:text-6xl max-w-[750px] font-catamaran font-extrabold text-gray-100 tracking-tigh">
              Best Hotels of Enjoying your Tour
            </h1>
            <p className="max-w-[700px] text-xs lg:text-base leading-snug text-gray-200 mb-5">
              LExplore the best hotels that enhance your tour experience,
              offering exceptional comfort and amenities. Enjoy warm
              hospitality, stunning views, and convenient locations that make
              your stay truly unforgettable.
            </p>
            <a
              href={bookLink}
              className="px-3 py-1 lg:px-5 lg:py-2 w-fit text-base lg:text-lg font-ubuntu font-medium bg-orange-600 text-gray-200 rounded-full hover:text-orange-600 hover:bg-white transition-colors delay-150 "
            >
              Book Now
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
