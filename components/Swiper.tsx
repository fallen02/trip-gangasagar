import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const topDestinations = [
  {
    name: "Kapilmuni Temple",
  },
  {
    name: "Light House ",
  },
  {
    name: "Nag sarabar",
  },
];

export function SwiperComp() {
  //@ts-ignore
  const slideRef = useRef<Swiper | null>(null);

  const nextSlide = useCallback(() => {
    if (!slideRef) return;
    if (slideRef.current) {
      slideRef.current.slideNext();
    }
  }, []);
  const prevSlide = useCallback(() => {
    if (!slideRef) return;
    if (slideRef.current) {
      slideRef.current.slidePrev();
    }
  }, []);
  return (
    <div className="flex flex-col gap-3 lg:gap-5">
      <div className="flex justify-end px-10 gap-3">
        <div
          className="p-1 lg:p-2 bg-orange-50 rounded-full border-2 border-orange-700 cursor-pointer"
          onClick={() => prevSlide()}
        >
          <ChevronLeft className="stroke-orange-950 size-5" />
        </div>
        <div
          className="p-1 lg:p-2 bg-orange-50 rounded-full border-2 border-orange-700 cursor-pointer"
          onClick={() => nextSlide()}
        >
          <ChevronRight className="stroke-orange-950 size-5" />
        </div>
      </div>

      <Swiper
        loop={true}
        spaceBetween={100}
        slidesPerView={"auto"}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        className="w-full h-full "
        onSwiper={(swiper) => {
          slideRef.current = swiper;
        }}
      >
        {topDestinations.map((destination, index) => (
          <SwiperSlide
            key={index}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="relative isolate h-full w-full  ">
              <div className="absolute z-50 h-full w-full">
                <div className="relative h-full w-full flex justify-end items-end">
                  <div className="absolute bg-gradient-to-t  from-orange-700/30 to-50% to-transparent w-full h-full" />
                  <div className="h-full w-full flex items-end justify-between px-10 py-5 z-50">
                    <p className="text-xl lg:text-2xl font-semibold text-gray-800">
                      {destination.name}
                    </p>
                    <a
                      href="#"
                      className="px-2 lg:px-5 py-1 lg:py-2.5 bg-orange-800 rounded-full text-base lg:text-lg font-medium text-gray-200"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
              <img
                src="https://placehold.co/900x400"
                alt=""
                className="h-auto object-cover w-full z-0 rounded-2xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

type SlideProps = {
  destination: { name: string };
};
