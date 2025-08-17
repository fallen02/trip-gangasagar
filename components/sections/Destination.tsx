import { bookLink } from "@/constant/navmenu";
import { Container } from "../Container";
import { SwiperComp } from "../Swiper";

export function Destinations() {
  return (
    <Container className="w-full flex py-5 lg:py-10 flex-col lg:flex-row gap-1 lg:gap-10">
      <div className="w-full lg:w-4/12 py-2.5 lg:py-5 px-5 lg:px-10 flex flex-col gap-2 lg:gap-5">
        <p className="text-sm lg:text-base uppercase  text-orange-700 ">
          top destination
        </p>
        <h1 className="text-heading text-2xl lg:text-4xl font-medium">
          Together, Let's Make Your Holidays Unforgettable!
        </h1>
        <p className="text-sm lg:text-lg font-thin text-desc">
          Together, we can craft an unforgettable holiday experience filled with
          joy, adventure, and cherished memories.
        </p>
        <a
          href={bookLink}
          className="px-3 lg:px-5 py-1.5 lg:py-2.5 rounded-full border-2 border-orange-700 w-fit text-orange-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors delay-100  font-medium"
        >
          Call Us Now
        </a>
      </div>
      <div className="w-full lg:w-8/12 ">
        <SwiperComp />
      </div>
    </Container>
  );
}
