import { Hero } from "@/components/sections/Hero";
import type { Route } from "./+types/home";
import { Feature } from "@/components/sections/Feature";
import { OurOffer } from "@/components/sections/OurOffer";
import { Process } from "@/components/sections/Process";
import { Destinations } from "@/components/sections/Destination";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gangasagar Travels & Hotels" },
    { name: "description", content: "The best private cars and hotels at Gangasagar" },
    
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <OurOffer />
      <Process />
      <Destinations />
    </>
  );
}
