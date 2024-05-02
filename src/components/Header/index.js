"use client";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  SunIcon,
  TwitterIcon,
} from "../icons";
import Logo from "./Logo";
import Link from "next/link";
import siteMetaData from "../../utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <button className="inline-block sm:hidden z-50" onClick={toggle}>
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>
      <nav
        className="w-max py-3 px-6 sm:px-8 border border-solid border-black rounded-full font-medium 
      capitalize items-center flex sm:hidden fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
      transition-all ease duration-300"
      style={{
        top: click
          ? "1rem"
          : "-5rem",
      }}
      >
        <Link href="/" className="mx-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button>
          <SunIcon
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          />
        </button>
      </nav>
      <nav
        className="w-max py-3 px-8 border border-solid border-black rounded-full font-medium 
      capitalize items-center hidden sm:flex fixed top-6 right-1/2 translate-x-1/2 bg-light/50 dark:bg-gray/50 dark:text-light backdrop-blur-sm z-50"
      >
        <Link href="/" className="mx-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button>
          <SunIcon
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          />
        </button>
      </nav>
      <div className="hidden sm:flex items-center">
        <a
          href={siteMetaData.socialLinks.linkedIn}
          className="inline-block w-6 h-6 mr-4"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetaData.socialLinks.twitter}
          className="inline-block w-6 h-6 mr-4"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetaData.socialLinks.github}
          className="inline-block w-6 h-6 mr-4"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a
          href={siteMetaData.socialLinks.youtube}
          className="inline-block w-6 h-6 mr-4"
        >
          <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
};

export default Header;
