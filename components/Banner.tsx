"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import gsap from "gsap";
import SocialIcons from "./HoverAnimation";
import { IoMdMail } from "react-icons/io";

const socials = [
  {
    id: 1,
    logo: <FaXTwitter size={24} />,
    link: "/",
  },
  {
    id: 2,
    logo: <FaLinkedin size={24} />,
    link: "/",
  },
  {
    id: 3,
    logo: <FaGithub size={24} />,
    link: "/",
  },
];

const Banner = () => {
  return (
    <div className="w-screen max-w-[128rem]">
      <div className="h1 border-border-bline border-t"></div>
      <main className="px-2 pt-2 pb-2 m-auto mx-1 max-w-[128rem] sm:mx-2 md:mx-3 lg:mx-4">
        <nav className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 pt-1 pb-1 pl-1 pr-3 rounded-3xl">
              <p className="text-[10px] text-text-primary sm:text-xs md:text-sm lg:text-base">
                // Design, Code,
                <br />
                Engage
              </p>
            </div>
          </div>

          {/* Social Icons */}

          {/* {socials.map((icon) => (
              <div
                key={icon.id}
                className="social-icon flex aspect-square cursor-pointer items-center justify-center rounded-full bg-neutral-400/40"
              >
                <Link
                  href={icon.link}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-text-primary"
                >
                  {icon.logo}
                </Link>
              </div>
            ))} */}
          <SocialIcons />

          <div className="flex items-center justify-center p-1 border rounded-full border-border-bline text-text-primary">
            <Link
              href={"/"}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-text-primary text-background"
            >
              <IoMdMail size={26} />
            </Link>
            <span className="hidden p-2 md:inline-block">
              <h1>aabhas.gurung001@gmail.com</h1>
            </span>
          </div>
        </nav>
      </main>
    </div>
  );
};

export default Banner;
