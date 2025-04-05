import { cn } from "@/lib/utils";
import React from "react";
import { FaBolt, FaPaintBrush } from "react-icons/fa";
import { IoColorPalette } from "react-icons/io5";
import { MdOutlineDevices } from "react-icons/md";

const work = [
  {
    icon: <FaPaintBrush size={48} />,
    title: "UI & UX",
    desc: "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    color: "text-customBlue",
  },
  {
    icon: <MdOutlineDevices size={48} />,
    title: "UI & UX",
    desc: "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    color: "text-customPurple",
  },
  {
    icon: <IoColorPalette size={48} />,
    title: "UI & UX",
    desc: "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    color: "text-customPink",
  },
  {
    icon: <FaBolt size={48} />,
    title: "UI & UX",
    desc: "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    color: "text-customOrange",
  },
];

const WhatIIDo = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center w-full m-auto mt-6 max-w-[128rem]">
      <div>
        <h1 className="p-4 text-xl font-semibold text-accentv sm:text-2xl md:text-3xl sm:pb-10">
          WHAT I DO
        </h1>
      </div>
      <main className="flex flex-row flex-wrap w-11/12 gap-4">
        {work.map((item, i) => (
          <div className="flex-grow w-64">
            <div className="h-full pt-12 pb-10 pl-6 pr-10 border rounded-md bg-cardbg border-border-bline">
              <div className="relative flex flex-col gap-2 pt-28 ">
                <div className={cn(item.color)}>{item.icon}</div>
                <h1 className={cn(item.color, "text-lg font-semibold")}>
                  {item.title}
                </h1>
                <p className="text-sm text-text-primary">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};
export default WhatIIDo;
