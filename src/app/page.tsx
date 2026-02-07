import { Hero } from "@/components/sections/hero/Hero";
import { PawsAndPonder } from "@/components/sections/blog/PawsAndPonder";
import { HappyUsers } from "@/components/sections/testimonials/HappyUsers";
import { FAQ } from "@/components/sections/faq/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <PawsAndPonder />
      <HappyUsers />
      <FAQ />
    </>
  );
}
