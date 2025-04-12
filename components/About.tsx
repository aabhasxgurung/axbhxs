"use client";
import React from "react";
import { FaBolt } from "react-icons/fa6";
import { FramerMagnetic } from "./MagneticButton";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex items-center justify-center w-screen">
      <div className="flex flex-col items-center justify-center w-screen rounded-lg max-w-[128rem]">
        <div>
          <main className="flex flex-col items-start justify-center w-screen gap-3 px-4 pt-4 sm:pt-5 md:pt-10 sm:px-8 md:px-10 max-w-10xl sm:flex-row">
            <h1 className="relative left-0 max-w-3xl text-xl font-light text-text-primary sm:text-2xl md:text-3xl lg:text-4xl">
              Empowering success in the digital landscape. Together, we shape a
              visionary future, delivering on promises and continuously
              pioneering innovation.
            </h1>
            <div className="flex-grow"></div>
            <p className="max-w-xs text-sm text-text-primary sm:pl-10">
              My blend of design, coding, and interaction expertise
              distinguishes me within the tech industry.
            </p>
          </main>
        </div>
        <div className="flex flex-col w-screen gap-1 px-4 text-primarytext sm:px-8 md:px-10 sm:text-2xl max-w-[104rem]">
          <h1 className="pb-1 pr-2 mt-8 text-2xl font-semibold text-[#0AE448] sm:text-3xl md:text-4xl sm:pt-3">
            Coding the Future
            <br />
            Architecting Innovation
          </h1>
          <div className="flex items-center justify-end">
            <div className="flex-grow border border-border-bline sm:mt-2 md:mt-3"></div>
            <div className="absolute flex items-center justify-center p-2 mr-3 rounded-full w-14 h-14 bg-text-primary sm:mr-10 md:mr-14 sm:w-16 sm:h-16 md:w-20 md:h-20 sm:p-0 z-10">
              <FaBolt size={48} />
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-between">
            <div className="max-w-lg">
              <p className="mt-8 text-lg font-light sm:text-2xl text-text-primary">
                I specialize in engineering bespoke solutions, consistently
                pushing the limits in each project, with an unwavering
                dedication to prioritizing excellence.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end mt-2 mr-1 sm:mr-5 md:mr-10 lg:mr-12">
            <Link href={"/contact"} className="relative z-10">
              <FramerMagnetic
                variant="outline"
                className="flex items-center justify-center py-2 pl-5 pr-3 text-xl font-normal border rounded-full text-primarytext md:text-2xl sm:pl-8 sm:pr-5 sm:py-3 border-border-bline"
              >
                <div className="flex items-center justify-center text-text-primary">
                  <h1 className="z-10">About Me</h1>
                  <FaArrowRight />
                </div>
              </FramerMagnetic>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
