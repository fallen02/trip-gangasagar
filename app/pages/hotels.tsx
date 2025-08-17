import { HotelOffer } from "@/components/sections/HotelOffer";
import { HotelStats } from "@/components/sections/HotelStats";
import { HotelSwiper } from "@/components/sections/HotelSwiper";
import { PageHeader } from "@/components/sections/PageHeader";
import { WhatWeProvide } from "@/components/WhatWeProvide";

export default function Hotels() {
  return (
    <>
      <PageHeader title="Hotels" desc="The best hotels and Dharmashalas, you will find in Gangasagar"/>
      <HotelSwiper />
      <HotelOffer />
      <HotelStats />
      <WhatWeProvide />
    </>
  );
}
{/* <PageHeader
        title="Hotels"
        desc="The best hotels and Dharmashalas, you will find in Gangasagar"
      /> */}