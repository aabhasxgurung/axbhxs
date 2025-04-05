import About from "@/components/About";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WhatIIDo from "@/components/WhatIIDo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Banner />
      <About />
      <WhatIIDo />
    </div>
  );
}
