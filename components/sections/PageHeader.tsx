import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Container } from "../Container";

interface HeaderProps {
  title: string;
  desc?: string;
}

export function PageHeader({ title, desc }: HeaderProps) {
  return (
    <Container className="px-10 py-15 lg:px-20 lg:py-30  flex justify-center items-center flex-col gap-3 rounded-2xl bg-[url(./img/header.jpg)] bg-no-repeat bg-cover">
      <h1 className="text-4xl lg:text-6xl  font-semibold text-gray-100 tracking-wide">
        {title}
      </h1>
      <p className="text-base lg:text-xl text-gray-300 text-center lg:max-w-[70%]">
        {desc}
      </p>
    </Container>
  );
}
