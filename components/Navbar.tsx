import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconTerminal2,
} from "@tabler/icons-react";
import { RiLinkedinLine } from "react-icons/ri";


export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-black  dark:text-white " />
      ),
      href: "#hero",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-black  dark:text-white " />
      ),
      href: "#projects",
    },
    {
      title: "Linkedin",
      icon: (
        <RiLinkedinLine className="h-full w-full text-black  dark:text-white " />
      ),
      href: "https://www.linkedin.com/in/rakshit-kharb-a23a05207/",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-black  dark:text-white " />
      ),
      href: "https://x.com/KharbRakshit",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-black  dark:text-white " />
      ),
      href: "https://github.com/RakshitKharb",
    },
  ];
  return (
    <div className="flex items-end justify-center h-16 left-32 w-full fixed bottom-5 sm:left-0">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
