import Image from "next/image";
import Hero from "./home/Hero";
import TrustStrip from "./home/TrustStrip";
import Services from "./home/Services";
import Process from "./home/Process";
import WhyUs from "./home/WhyUs";
import CaseStudies from "./home/CaseStudies";
import TechStack from "./home/TechStack";

export default function Home() {
  return (
    <main className=" bg-gradient-to-b from-gray-100 to-gray-300">
      <Hero></Hero>
      <TrustStrip></TrustStrip>
      <Services></Services>
      <Process></Process>
      <WhyUs></WhyUs>
      <CaseStudies></CaseStudies>
      <TechStack></TechStack>
    </main>   
  );
}
