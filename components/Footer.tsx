import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <main className="flex items-center justify-center mx-1 sm:mx-2 md:mx-3 lg:mx-4">
        <footer className=" overflow-hidden relative flex flex-wrap items-center justify-center w-screen pb-56 mt-6 border border-border-bline rounded-xl max-w-[128rem]">
          <div className="flex items-start justify-between w-full px-3 pt-12 flex-warp max-w-10xl md:px-6 xl:mx-10">
            <div className="flex flex-col items-start justify-between flex-grow gap-10 sm:flex-row md:gap-20 xl:gap-36 2xl:gap-56">
              <div className="flex items-start justify-between flex-grow w-full">
                <div>
                  <h1 className="text-2xl font-semibold text-text-primary">
                    where <span className="text-customPink">aesthetics</span> &{" "}
                    <br />{" "}
                    <span className="text-customBlue">functionality</span> meet
                  </h1>
                </div>
                <div className="">
                  <h1 className="text-xl font-semibold text-customOrange">
                    Explore
                  </h1>
                  <div className="flex flex-col mt-5">
                    <Link
                      href={"/"}
                      className="mt-2 text-lg transition-all text-text-primary hover:text-text-accent"
                    >
                      Home
                    </Link>
                    <Link
                      href={"/"}
                      className="mt-2 text-lg transition-all text-text-primary hover:text-text-accent"
                    >
                      Home
                    </Link>
                    <Link
                      href={"/"}
                      className="mt-2 text-lg transition-all text-text-primary hover:text-text-accent"
                    >
                      Home
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between w-full gap-10">
                <div className="flex flex-col ">
                  <h1 className="text-xl font-semibold text-customBlue">
                    Follow Me
                  </h1>
                  <div className="flex flex-col items-start justify-center gap-3 mt-6 lg:flex-row lg:gap-10">
                    <div>
                      <div className="flex items-center justify-center gap-2 cursor-pointer group">
                        <h1 className="text-lg transition-all text-text-primary group-hover:text-text-accent">
                          LinkedIn
                        </h1>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-2 cursor-pointer group">
                        <h1 className="text-lg transition-all text-text-primary group-hover:text-text-accent">
                          LinkedIn
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex gap-2 border-b border-border-bline group">
                    <div>
                      <Link
                        href={"/"}
                        className="text-xl font-semibold transition-all text-text-primary group-hover:text-text-accent"
                      >
                        Contact Me
                      </Link>
                      <h1 className="pb-3 text-sm text-[#d1d1d1]">Say Hello</h1>
                    </div>
                    <div>
                      <div className="pl-3">
                        <FaArrowRight
                          className="transition-all ease-in-out rotate-45 group-hover:rotate-0"
                          color="#0AE448"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between gap-2 pt-3 group">
                    <div>
                      <Link
                        href={"/"}
                        className="text-xl font-semibold transition-all text-text-primary group-hover:text-text-accent"
                      >
                        My Projects
                      </Link>
                      <h1 className="pb-2 text-sm text-[#d1d1d1]">
                        Explore Projects
                      </h1>
                    </div>
                    <div>
                      <div className="pl-3">
                        <FaArrowRight
                          className="transition-all ease-in-out rotate-45 group-hover:rotate-0"
                          color="#0AE448"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full mt-16">
            <Image
              src="/iamAxbhxs.svg"
              width={1556}
              height={177}
              alt=""
              className="w-full bottom-0 2xl:-bottom-12 absolute -z-40"
            />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Footer;
