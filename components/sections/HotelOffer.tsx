import { bookLink } from "@/constant/navmenu";
import { Container } from "../Container";

export function HotelOffer() {
  return (
    <Container className="w-full my-15 flex flex-col lg:flex-row gap-10 bg-gray-50 rounded-2xl">
      <div className="w-full lg:w-1/2 p-5 lg:p-10">
        <img
          src="/img/kapilmuni.webp"
          className="w-full h-full object-cover rounded-2xl"
          alt=""
        />
      </div>
      <div className="w-full lg:w-1/2 p-5 lg:p-10 flex flex-col gap-2">
        <p className="text-base lg:text-lg uppercase font-medium tracking-wider text-orange-600">
          Exclusive Offer
        </p>
        <h1 className="text-4xl lg:text-5xl font-catamaran font-medium text-heading">
          Enjoy Your Dream Tour In Gangasagar
        </h1>
        <p className="text-sm lg:text-base text-desc font-thin">
          Gangasagar is a unique destination famed for its spiritual atmosphere
          and scenic beauty, making it a dream tour for many travelers. 
        </p>
        <div className="flex w-full items-end gap-10 py-2  lg:py-5">
          <div className="flex flex-col gap-3">
            <p className="text-lg font-medium text-heading/50">Duration</p>
            <div className=" flex flex-col gap-3">
              <p className="text-lg lg:text-xl font-medium text-heading/70">
                1 Day / 1 Night
              </p>
              <p className="text-lg lg:text-xl font-medium text-heading/70">
                2 Day / 2 Night
              </p>
            </div>
          </div>
          <div className="h-[80%] w-[1px]  bg-gray-400" />
          <div className="flex flex-col gap-3">
            <p className="text-lg font-medium text-heading/50">Only</p>
            <div className="flex flex-col gap-3">
              <p className="text-lg lg:text-xl font-medium text-heading/80">
                &#x20B9; 1199/-
              </p>
              <p className="text-lg lg:text-xl font-medium text-heading/80">
                &#x20B9; 2199/-
              </p>
            </div>
          </div>
        </div>
        <a
          href={bookLink}
          className="mt-3 lg:mt-10 px-5 lg:px-10 py-2 lg:py-4 bg-orange-500 w-fit rounded-2xl text-lg font-medium text-white "
        >
          Book Now
        </a>
      </div>
    </Container>
  );
}
