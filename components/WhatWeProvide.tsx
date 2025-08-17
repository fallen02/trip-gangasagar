import {
  AirVentIcon,
  Ellipsis,
  Sandwich,
  Shield,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";
import { bookLink } from "@/constant/navmenu";

const facilities = [
  {
    text: "Delicious Food",
    icon: UtensilsCrossed,
  },
  {
    text: "Breakfast",
    icon: Sandwich,
  },
  {
    text: "Free Wifi",
    icon: Wifi,
  },
  {
    text: "AC / Non AC",
    icon: AirVentIcon,
  },
  {
    text: "Security",
    icon: Shield,
  },
  {
    text: "Others",
    icon: Ellipsis,
  },
];

export function WhatWeProvide() {
  return (
    <Container className="py-10 px-5">
      <div className="flex flex-col lg:flex-row w-full px-5 py-10 lg:px-10 lg:py-10 gap-5 bg-gray-50 rounded-xl">
        <div className="w-full lg:w-1/3 flex flex-col justify-center gap-3">
          <h1 className="text-4xl font-catamaran font-medium text-heading">
            We are Providing You Our Best Facilities
          </h1>
          <p className="font-thin text-desc">
            Experience unparalleled comfort and service with our top-notch
            facilities designed just for you. Your satisfaction is our priority,
            and we strive to exceed your expectations at every turn.
          </p>
          <a
            href={bookLink}
            className="px-5 py-2 bg-orange-500 w-fit rounded-2xl font-medium text-gray-100"
          >
            Book Now
          </a>
        </div>
        <div className="w-full lg:w-2/3 grid grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => {
            const FacilityIcon = facility.icon;
            return (
              <div
                className={cn(
                  "flex flex-col justify-center items-center border border-gray-400 p-5",
                  index + 1 == 1 ? "rounded-tl-xl lg:rounded-tl-2xl" : "",
                  index + 1 == 2 ? "rounded-tr-xl lg:rounded-tr-[0]" : "",
                  index + 1 == 3
                    ? "lg:rounded-tr-2xl lg:border-l-0 lg:border-r"
                    : "",
                  index + 1 == 4
                    ? "lg:rounded-bl-2xl lg:border-b lg:border-r-0"
                    : "",
                  index + 1 == 5 ? "rounded-bl-xl lg:rounded-bl-[0]" : "",
                  index + 1 == 6 ? "rounded-br-xl lg:rounded-br-2xl" : "",

                  (index + 1) % 2 != 0
                    ? index + 1 == facilities.length - 1
                      ? "border-r-0"
                      : "border-b-0 border-r-0"
                    : index + 1 != facilities.length
                      ? "border-b-0 "
                      : ""
                )}
                key={index}
              >
                <FacilityIcon className="size-10 stroke-1 stroke-gray-600" />
                <p className="text-lg  text-gray-700">{facility.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
