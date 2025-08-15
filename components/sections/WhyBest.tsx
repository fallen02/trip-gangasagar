import { CircleCheckBig, MessageCircleMore, Smile, type LucideIcon } from "lucide-react";
import { Container } from "../Container";

const resons = [
  {
    icon: MessageCircleMore ,
    title: "24-hour Support",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: Smile ,

    title: "No hidden fees",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: CircleCheckBig ,

    title: "Booking flexibility",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: MessageCircleMore ,

    title: "Included transfers",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];


function DualIcon({Icon}: {Icon : LucideIcon}){
  return(
    <div className="relative">
      <Icon className="relative z-1 stroke-1  size-10 stroke-gray-700"/>
      <Icon className="absolute top-0 left-0 size-10 translate-2 stroke-orange-400/50 stroke-0 fill-orange-400/50"/>
    </div>
  )
}

export function WhyBest() {
  return (
    <Container className="py-20 w-full  flex flex-col">
      <h1 className="text-3xl lg:text-4xl pb-10 lg:pb-0 font-medium tracking-tight text-heading ">
        Why we are best
      </h1>
      <div className="flex flex-col lg:flex-row w-full justify-between gap-5 lg:gap-10">
        {resons.map((reson, index) => (
          <div className="w-full lg:w-1/4 py-5 flex flex-col gap-3 pr-10 lg:pr-0" key={index}>
            <DualIcon Icon={reson.icon} />
            <h1 className="text-xl font-medium text-heading">{reson.title}</h1>
            <p className="text-desc">{reson.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}


