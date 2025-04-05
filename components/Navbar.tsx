import Link from "next/link";
import React from "react";

import {
  FaBriefcase,
  FaHouseUser,
  FaMailBulk,
  FaRegIdCard,
} from "react-icons/fa";

const links = [
  {
    title: "Home",
    link: "/",
    icon: <FaHouseUser />,
  },
  {
    title: "My Projects",
    link: "/projects",
    icon: <FaBriefcase />,
  },
  {
    title: "About Me",
    link: "/about",
    icon: <FaRegIdCard />,
  },
];

const Navbar = () => {
  return (
    <div className="w-screen bg-[#0e100f]">
      <div className="px-2 pt-2 pb-1 m-auto sm:pb-2 max-w-[128rem]">
        <nav className="flex items-center justify-between mx-1 sm:mx-2 md:mx-3 lg:mx-4">
          <div className="py-2 px-3 border border-border-bline rounded-3xl gap-2 flex items-center">
            <div className="w-3 h-3 rounded-full bg-text-primary"></div>
            <Link className="text-text-primary text-md sm:text-lg" href={"/"}>
              thegr8Axbhxs
            </Link>
          </div>
          <div className="flex">
            <div className="flex items-center lg:border border-border-bline rounded-3xl lg:p-3">
              <ul className="hidden lg:flex lg:items-center text-text-primary gap-5 text-base">
                {links.map((link, i) => (
                  <Link
                    key={i} // Added key to prevent React warning
                    href={link.link}
                    className="flex items-center gap-2 transition-all hover:text-text-accent"
                  >
                    <span className="text-base">{link.icon}</span>
                    <span>{link.title}</span>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden gap-5 text-base lg:flex lg:items-center text-text-primary lg:border lg:border-border-bline rounded-3xl lg:p-3">
            <Link
              href={"/contact"}
              className="flex items-center gap-2 transition-all hover:text-text-accent"
            >
              <span>
                <FaMailBulk />
              </span>
              <span>Contact Me</span>
            </Link>
          </div>
        </nav>
      </div>
      <div className="border border-border-bline"></div>
    </div>
  );
};

export default Navbar;
