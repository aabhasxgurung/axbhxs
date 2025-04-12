import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col w-screen gap-1 px-4 text-text-primary sm:px-4 md:px-4 sm:text-2xl max-w-10xl">
      <h1 className="pb-6 text-4xl text-text-primary sm:text-5xl md:text-7xl lg:text-8xl">
        Hello! I'm Aabhas Gurung 👋 <br /> Crafting Digital Experience
      </h1>
      <div className="flex items-center justify-end">
        <div className="flex-grow border border-border-bline sm:mt-2 md:mt-3"></div>
        <div className="absolute flex items-center justify-center p-2 mr-3 rounded-full w-14 h-14 bg-text-primary sm:mr-10 md:mr-14 sm:w-16 sm:h-16 md:w-20 md:h-20 sm:p-0">
          <Image src="/A.png" width={80} height={80} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center w-screen gap-3 pt-10 md:pt-10 max-w-10xl sm:flex-row">
        <h1 className="max-w-3xl pr-4 text-xl font-light text-text-primary sm:text-2xl md:text-3xl lg:text-4xl">
          As a Software Engineer, I excel in building scalable applications,
          enhancing user experiences, and streamlining development processes.
        </h1>
        <div className="flex-grow"></div>
        <p className="max-w-xs text-sm mr-14 text-text-primary">
          My proficiency in design, coding, and interaction sets me apart within
          the domain of software engineering.
        </p>
      </div>
    </div>
  );
};

export default Intro;
