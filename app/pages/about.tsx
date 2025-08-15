import { Hero } from "@/components/sections/Hero";
import { NeedHelp } from "@/components/sections/NeedHelp";
import { OurStory } from "@/components/sections/OurStory";
import { PageHeader } from "@/components/sections/PageHeader";
import { Stats } from "@/components/sections/Stats";
import { WhyBest } from "@/components/sections/WhyBest";

export default function AboutUs() {
  return (
    <>
      <PageHeader
        title="About Us"
        desc="Experience seamless travel with our private car booking service, offering comfort, safety, and reliability at your fingertips. "
      />
      <WhyBest />
      <OurStory />
      <Stats />
      <NeedHelp />
    </>
  );
}
