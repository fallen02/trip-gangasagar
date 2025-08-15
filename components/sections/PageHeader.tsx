import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

interface HeaderProps {
  title: string;
  desc: string;
}

export function PageHeader({ title, desc }: HeaderProps) {
  return (
    <div className="mx-auto max-w-[86rem] w-dvw ">
      <div className="relative flex justify-center mx-auto max-w-[86rem] w-dvw">
        <div className="absolute h-full w-[97%] bg-black/50 z-10 px-10 py-20 flex flex-col justify-center items-center gap-0 lg:gap-2 rounded-2xl">
          <h1 className="text-2xl lg:text-6xl font-medium text-orange-600">
            {title}
          </h1>
          <p className="w-full lg:w-[650px] text-sm text-center lg:text-lg text-gray-100">
            {desc}
          </p>
        </div>
        <Swiper
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay, EffectFade]}
          spaceBetween={50}
          className="relative h-fit lg:h-[90%] w-[97%]  overflow-hidden rounded-2xl"
          effect="fade"
        >
          <SwiperSlide className="relative z-10 h-full w-full bg-[url(/img/kapil.jpg)] px-10 lg:px-50 py-20 lg:py-50 bg-no-repeat bg-center bg-cover"></SwiperSlide>
          <SwiperSlide className="relative z-10 h-full w-full bg-[url(/img/car.jpeg)] px-10 lg:px-50 py-20 lg:py-50 bg-no-repeat bg-center bg-cover"></SwiperSlide>
          <SwiperSlide className="relative z-10 h-full w-full bg-[url(/img/car.jpeg)] px-10 lg:px-50 py-20 lg:py-50 bg-no-repeat bg-center bg-cover"></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
