import CTA from "@/sections/CTA";
import FAQs from "@/sections/FAQ";
import FeaturesCarousel from "@/sections/Features";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import WhySovita from "@/sections/WhySovita";
import WorkWithSovita from "@/sections/WorkWithSovita";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FeaturesCarousel />
      <WorkWithSovita />
      <Pricing />
      <WhySovita />
      <FAQs />
      <CTA />
    </main>
  );
}
