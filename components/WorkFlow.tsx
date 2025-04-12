import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const process = [
  {
    id: 1,
    title: "Design",
    desc: "With a proven track record in designing websites, I deliver robust and user-friendly digital designs that are seamlessly integrated with development. My expertise ensures that each project not only looks great but also performs flawlessly, providing an exceptional user experience from start to finish.",
  },
  {
    id: 2,
    title: "Development",
    desc: "I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions, and interaction. I use Next.js and React.js for development and incorporate GSAP and Framer Motion for animations",
  },
  {
    id: 3,
    title: "The Full Package",
    desc: "What sets me apart is my ability to deliver complete full-stack applications from concept to implementation. My keen eye for design, along with my expertise in frontend and backend development, including database integration, allows me to create exceptional projects",
  },
];

const WorkFlow = () => {
  return (
    <div>
      <h1 className="mt-12 text-xl font-medium text-accentv sm:text-2xl md:text-3xl">
        I Can Help You with{" "}
        <span className="text-6xl transition-all duration-200 ease-in-out animate-ping">
          .
        </span>
      </h1>
      <main className="flex flex-row flex-wrap w-11/12 gap-4">
        {process.map((item) => (
          <div className="flex-grow w-64">
            <div className="h-full px-2 pb-10">
              <div className="relative flex flex-col gap-2" key={item.id}>
                <h1 className="py-5 border-b text-md text-[#454533] border-bline">
                  0{item.id}
                </h1>
                <h1 className="py-8 text-xl font-normal text-text-primary sm:text-2xl md:text-3xl lg:text-4xl">
                  {item.title}
                </h1>
                <p className="text-sm text-text-primary">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </main>
      <div className="flex flex-col w-screen gap-1 px-4 pb-8 sm:pb-12 text-text-primary max-w-[104rem]">
        <div className="flex items-center justify-end">
          <div className="flex-grow border border-border-bline sm:mt-2 md:mt-3"></div>
          <Link href={"/contact"}>
            <button className="flex items-center justify-center py-2 pl-5 pr-3 text-xl font-normal border rounded-full text-text-primary md:text-2xl sm:pl-8 sm:pr-5 sm:py-3 border-border-bline">
              <div className="flex items-center justify-center z-10">
                Contact Me <FaArrowRight size={26} className="ml-2" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
