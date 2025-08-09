import About from "@/components/About";
import { Clients } from "@/components/Clients";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Clients />
      <Stats />
      <Testimonials />
    </div>
  );
}
