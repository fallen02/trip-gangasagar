import {
  BadgePercent,
  CircleCheckBig,
  MessageCircleMore,
  Smile,
  type LucideIcon,
} from "lucide-react";
import { Container } from "../Container";
import { DualIcon } from "../DualIcon";

const resons = [
  {
    icon: MessageCircleMore,
    title: "24-hour Support",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: Smile,
    title: "No hidden fees",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: CircleCheckBig,
    title: "Booking flexibility",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: BadgePercent,
    title: "Affordable Price",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];



export function WhyBest() {
  return (
    <Container className="py-10 w-full  flex flex-col">
      <h1 className="text-3xl lg:text-4xl font-catamaran font-medium tracking-tight text-heading ">
        Why we are best?
      </h1>
      <div className="flex flex-col lg:flex-row w-full justify-between gap-0 lg:gap-10">
        {resons.map((reson, index) => (
          <div
            className="w-full lg:w-1/4 py-5 flex flex-row lg:flex-col gap-5 lg:gap-3 items-center lg:items-start"
            key={index}
          >
            <DualIcon Icon={reson.icon} />
            <div className="flex flex-col gap-1">
              <h1 className="text-lg lg:text-xl font-medium text-heading">
              {reson.title}
            </h1>
            <p className="text-sm lg:text-base font-light text-desc ">{reson.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
