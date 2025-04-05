"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import {
  MotionValue,
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ReactNode, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SCALE = 2;
const DISTANCE = 100;
const NUDGE = 30;
const SPRING = {
  mass: 0.1,
  stiffness: 170,
  damping: 12,
};

const SOCIALS = [
  {
    id: 1,
    name: "Twitter",
    icon: <FaXTwitter size={20} />,
    link: "https://twitter.com/yourhandle",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    link: "https://linkedin.com/in/yourhandle",
  },
  {
    id: 3,
    name: "GitHub",
    icon: <FaGithub size={20} />,
    link: "https://github.com/yourhandle",
  },
];

export default function SocialIcons() {
  const mouseLeft = useMotionValue(-Infinity);
  const mouseRight = useMotionValue(-Infinity);
  const left = useTransform(mouseLeft, [0, 40], [0, -40]);
  const right = useTransform(mouseRight, [0, 40], [0, -40]);
  const leftSpring = useSpring(left, SPRING);
  const rightSpring = useSpring(right, SPRING);

  return (
    <motion.div
      onMouseMove={(e) => {
        const { left, right } = e.currentTarget.getBoundingClientRect();
        const offsetLeft = e.clientX - left;
        const offsetRight = right - e.clientX;
        mouseLeft.set(offsetLeft);
        mouseRight.set(offsetRight);
      }}
      onMouseLeave={() => {
        mouseLeft.set(-Infinity);
        mouseRight.set(-Infinity);
      }}
      className="mx-auto hidden items-end gap-3 px-2 sm:flex p-1 relative h-12 border border-border-bline rounded-full text-background"
    >
      <motion.div
        className="absolute inset-y-0"
        style={{ left: leftSpring, right: rightSpring }}
      />

      {SOCIALS.map((social) => (
        <AppIcon
          key={social.id}
          mouseLeft={mouseLeft}
          name={social.name}
          link={social.link}
        >
          {social.icon}
        </AppIcon>
      ))}
    </motion.div>
  );
}

function AppIcon({
  mouseLeft,
  children,
  name,
  link,
}: {
  mouseLeft: MotionValue;
  children: ReactNode;
  name: string;
  link: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const distance = useTransform(() => {
    const bounds = ref.current
      ? { x: ref.current.offsetLeft, width: ref.current.offsetWidth }
      : { x: 0, width: 0 };

    return mouseLeft.get() - bounds.x - bounds.width / 2;
  });

  const scale = useTransform(distance, [-DISTANCE, 0, DISTANCE], [1, SCALE, 1]);
  const x = useTransform(() => {
    const d = distance.get();
    if (d === -Infinity) return 0;
    if (d < -DISTANCE || d > DISTANCE) return Math.sign(d) * -1 * NUDGE;
    return (-d / DISTANCE) * NUDGE * scale.get();
  });

  const scaleSpring = useSpring(scale, SPRING);
  const xSpring = useSpring(x, SPRING);
  const y = useMotionValue(0);

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.button
            ref={ref}
            style={{ x: xSpring, scale: scaleSpring, y }}
            onClick={() => {
              animate(y, [0, -40, 0], {
                repeat: 2,
                ease: [
                  [0, 0, 0.2, 1],
                  [0.8, 0, 1, 1],
                ],
                duration: 0.7,
              });
              setTimeout(() => {
                window.open(link, "_blank");
              }, 300);
            }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-text-primary text-black"
          >
            {children}
          </motion.button>
        </Tooltip.Trigger>
        {/* Optional Tooltip display */}
        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={10}
            className="bg-gray-700 shadow shadow-black border border-gray-600 px-2 py-1.5 text-sm rounded text-white font-medium"
          >
            {name}
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
