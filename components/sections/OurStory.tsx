import { bookLink } from "@/constant/navmenu";
import { Container } from "../Container";

export function OurStory() {
  return (
    <Container className="flex flex-col-reverse gap-10 lg:flex-row justify-between py-0 lg:py-10 px-8">
      <div className="flex flex-col w-full lg:w-1/4 gap-3 justify-center">
        <p className="text-sm lg:text-base uppercase  text-orange-700">
          Our Story
        </p>
        <h1 className="text-heading font-catamaran text-3xl lg:text-5xl font-medium">
          It feels like family (Because it is)
        </h1>
        <p className="font-thin text-sm lg:text-base text-desc">
          Experience a warm and welcoming atmosphere where it truly feels like
          family—because we treat you like one. Join us and become part of a
          community that cares and supports one another.
        </p>
        <div className="relative group w-fit">
          <div className="absolute inset-0 bg-gray-800 z-0 border border-gray-800 translate-0 lg:translate-x-0.5 lg:translate-y-0.5 rounded-full group-hover:translate-0 transition-transform duration-150" />
          <a
            href={bookLink}
            className="relative inline-flex rounded-full no-underline items-center justify-center border border-black transition-all duration-150 -translate-x-0.5 -translate-y-0.5 group-hover:-translate-0 z-30  bg-orange-600 group-hover:bg-gray-100 text-gray-200 group-hover:text-orange-600 w-full lg:w-auto  px-3 py-1.5 text-sm lg:text-lg font-OpenSans font-medium"
          >
            Book Now
          </a>
        </div>
      </div>
      <div className="flex gap-5">
        <img src="https://placehold.co/400x600" alt="" className="" />
        <img
          src="https://placehold.co/400x600"
          alt=""
          className="hidden lg:block"
        />
      </div>
    </Container>
  );
}
