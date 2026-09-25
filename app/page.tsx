import Hero from "@/components/Hero";
import Flavours from "@/components/Flavours";
import Motivation from "@/components/Motivation";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Flavours />
      <Motivation />
      <Testimonials />
      <Stats />
      <Cta />
    </main>
  );
}
