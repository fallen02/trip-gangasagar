import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import image1 from "@/app/assets/image/image-1.webp";
import image2 from "@/app/assets/image/image-2.webp";
import image3 from "@/app/assets/image/image-3.webp";
import image4 from "@/app/assets/image/image-4.webp";
import image5 from "@/app/assets/image/image-5.webp";
import image6 from "@/app/assets/image/image-6.webp";
import image7 from "@/app/assets/image/image-7.webp";
import image8 from "@/app/assets/image/image-8.webp";
import image9 from "@/app/assets/image/image-9.webp";
import image10 from "@/app/assets/image/image-10.webp";
import image11 from "@/app/assets/image/image-11.webp";
import image12 from "@/app/assets/image/image-12.webp";
import { Container } from "../Container";

const srcs = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];
export function HotelSwiper() {
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
    <Container className="relative my-10">
      <div className="absolute top-1/2 left-0 z-50 flex w-full justify-between px-10">
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
        spaceBetween={10}
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        className="w-full h-full "
        onSwiper={(swiper) => {
          slideRef.current = swiper;
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {srcs.map((src, index) => (
          <SwiperSlide key={index} className="">
            <div className="bg-red-400 rounded-xl overflow-hidden">
              <img
                src={src}
                alt=""
                className="h-[550px]  object-cover w-full hover:scale-120 transition-transform duration-400"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
