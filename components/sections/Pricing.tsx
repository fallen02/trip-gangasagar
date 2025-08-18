import { Check, Dot } from "lucide-react";
import { Container } from "../Container";
import { bookLink } from "@/constant/navmenu";

import one from '@/app/assets/one.webp'
import two from '@/app/assets/two.webp'
import three from '@/app/assets/three.webp'

const tours = [
  {
    title: "Kolkata to Gangasagar Tour(1 days)",
    img: one,
    price: "1199",
    destination: "Gangasagar",
    duration: "1D",
    type: "Daily Tour",
    groupsize: "Unlimited",
    lang: ["Bangali", "English", "Hindi"],
    startTime: "As per your convenience",
    offers: [
      "Trip from Kolkata to Ferry Point.",
      "Trip from Lot 8(Kakdwip) to Sagar Island.",
      "Trip from Ferry Point to Gangasagar.",
    ],
    features: [
      "Delicious Meal",
      "Private Luxury Car",
      "Gangasagar Local Sightseeing.",
    ],
  },
  {
    title: "Kolkata to Gangasagar Tour(2 Days)",
    img: two,
    price: "2199",
    destination: "Gangasagar",
    duration: "2D/1N",
    type: "Daily Tour",
    groupsize: "Unlimited",
    lang: ["Bangali", "English", "Hindi"],
    startTime: "As per your convenience",
    offers: [
      "Trip from Kolkata to Ferry Point.",
      "Trip from Lot 8(Kakdwip) to Sagar Island.",
      "Trip from Ferry Point to Gangasagar.",
    ],
    features: [
      "Delicious Meal",
      "Sightseeing with Private Luxury Car",
      "1 Night Stay at Hotel",
    ],
  },
  {
    title: "Gangasagar Mela full Tour(5 days)",
    img: three,
    price: "10099",
    destination: "Gangasagar",
    duration: "5D/4N",
    type: "Specific Tour",
    groupsize: "Unlimited",
    lang: ["Bangali", "English", "Hindi"],
    startTime: "As per your convenience",
    offers: [
      "Trip from Kolkata to Ferry Point.",
      "Trip from Lot 8(Kakdwip) to Sagar Island.",
      "Trip from Ferry Point to Gangasagar.",
    ],
    features: [
      "Delicious Meal",
      "Private Luxury Car",
      "4 Nights Stay at Hotel",
    //   "Meal Plan as per Itinerary",
    //   "Puja and Havan at GS Camp",
    ],
  },
];

export function Pricing() {
  return (
    <Container className="py-20 flex flex-col gap-10">
      <div className="">
        <h1 className="text-4xl font-medium uppercase text-heading text-center">
          Pricing
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        {tours.map((tour, index) => (
          <div className="w-full lg:w-1/3 bg-gray-50 rounded-2xl" key={index}>
            <div className="h-[250px] rounded-tl-2xl rounded-tr-2xl overflow-hidden">
                <img src={tour.img} alt="Tour"  className="object-center object-cover"/>
            </div>
            <div className="px-5 py-5 w-full flex flex-col gap-3 justify-between">
              <div className="flex  justify-between items-start">
                <div className="flex flex-col gap-2">
                  <h1 className="font-catamaran text-[18px] font-semibold text-heading">
                    {tour.title}
                  </h1>
                  <div className="flex gap-3">
                    <p className="text-sm text-orange-500">{tour.type}</p>
                    <p className="text-sm text-gray-500">/</p>
                    <div className="flex gap-1">
                      {tour.lang.map((lan, idx) => (
                        <p key={idx} className="text-sm text-orange-500">
                          {lan}{" "}
                          {idx != tour.lang.length - 1 ? <span>,</span> : ""}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="p-[2px] text-sm text-orange-600 border border-orange-600 rounded">
                  {tour.duration}
                </p>
              </div>
              <div className="w-full h-[1px] bg-gray-400 " />
              <div className="flex flex-col gap-6">
                <div className="flex flex-col">
                  <p className="text-sm lg:text-base text-gray-500">
                    Trip from Kolkata to Gangsagar:
                  </p>
                  {tour.offers.map((offer, idx) => (
                    <div className="flex gap-2">
                      <div className="">
                        <Dot className="size-4 stroke-gray-600" />
                      </div>
                      <p key={idx} className="text-sm lg:text-base text-gray-600">
                        {offer}
                      </p>
                    </div>
                  ))}
                </div>
                <div className=" flex flex-col">
                  {tour.features.map((feature, idx) => (
                    <div className="flex items-center gap-2 ">
                      <div className="">
                        <Check className="size-4 stroke-orange-600" />
                      </div>

                      <p key={idx} className=" text-orange-600">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">*Special discount for Vegetarian.</p>

              <div className="p-4 flex justify-between border rounded-xl border-gray-400 bg-gray-100">
                <a href={bookLink} className="px-4 py-2 bg-orange-600 rounded-2xl font-medium text-white">Book Now</a>
                <div className="">
                  <p className="text-2xl font-medium text-heading">
                    &#8377;{tour.price}
                    <span className="text-base text-gray-500 ">/Person</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
