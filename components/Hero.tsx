"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FramerMagnetic } from "./MagneticButton";

const Hero = () => {
  return (
    <div className="py-24 my-auto">
      <div className="w-screen">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center justify-center pt-1 rounded-full w-11 h-11 bg-text-primary lg:w-16 lg:h-16 md:pt-2">
            <Image src="/hero.jpg" width={100} height={100} alt="" />
          </div>
          <div className="p-2 pl-4 pr-4 border rounded-full border-border-bline lg:py-4">
            <h1 className="text-text-primary text-md sm:text-xl">
              Hello, I'm Aabhas
            </h1>
          </div>
        </div>
        {/* animation */}
        <div className="sm:hidden"></div>
        <div className="text-text-primary flex text-[10px] items-center justify-center gap-2 pr-6 sm:ml-10">
          <h1 className="sm:hidden">Frontend Developer</h1>
          <h1 className="sm:text-5xl font-semibold text-accentv md:text-6xl lg:text-8xl">
            DIGITAL
          </h1>
          <h1 className="sm:text-xs md:text-sm lg:text-base">
            // Based in <br />
            Kathmandu, Nepal
          </h1>
        </div>
        <div className="text-text-primary flex text-[10px] items-center justify-center gap-4">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold text-accenty">
            EXPERIENCE
          </h1>
        </div>
        <div className="text-text-primary flex text-[10px] items-center justify-center gap-1">
          <h1 className="text-5xl font-semibold md:text-6xl lg:text-8xl">
            DESIGNER
          </h1>
          <div>
            <FramerMagnetic
              variant="outline"
              className="flex items-center justify-center gap-2 p-3 font-semibold rounded-full border border-border-bline text-text-primary text-[10px] sm:text-xs md:text-sm lg:text-base md:py-3 lg:py-4"
            >
              <div className="relative mb-0.5 z-10">
                <div className="absolute w-2 h-2 rounded-full mt-0.5 bg-green-500 sm:w-3 sm:h-3 md:h-4 md:w-4 flex items-center justify-center"></div>
                <div className="w-2 h-2 rounded-full mt-0.5 bg-green sm:w-3 sm:h-3 md:h-4 md:w-4 animate-ping"></div>
              </div>

              <Link href={"/contact"} className="relative z-10">
                Let's Connect
              </Link>
            </FramerMagnetic>

            <div></div>
          </div>
        </div>
        <div className="text-text-primary flex text-[10px] items-center justify-center gap-4 sm:mr-24">
          <h1 className="hidden sm:inline-block sm:text-xs md:text-sm lg:text-base">
            // UI/UX Designer
            <br />
            Full-Stack Devloper
          </h1>
          <h1 className="text-5xl font-semibold text-accentc md:text-6xl lg:text-8xl">
            <span className="text-text-primary">&</span>
            DEVLOPER
          </h1>
        </div>
        <div className="pt-2">
          <h1 className="pt-2 font-medium leading-5 text-center text-text-primary text-md sm:text-xl sm:pt-4 md:text-2xl lg:text-3xl">
            I create a digital experience that borders on
            <br />
            <span className="text-accentv">efficiency</span>,
            <span className="text-accenty"> aesthetics</span> and
            <span className="text-accentc">functionality</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
