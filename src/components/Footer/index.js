"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../icons";
import siteMetaData from "../../utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-16 rounded-2xl bg-accent dark:bg-accentDark/90 m-5 sm:m-10 flex flex-col items-center text-light dark:text-black">
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl md:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5 members
        community to stay up to date with latest news.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4"
      >
        <input
          type="text"
          placeholder="Enter your email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full bg-transparent text-black dark:text-light dark:focus:border-light focus:border-black focus:ring-0 border-0 border-b mr-2 pb-1 pl-0"
        />

        <input
          type="submit"
          className="bg-dark dark:bg-light/90 text-light dark:text-dark cursor-pointer font-medium dark:font-semibold rounded px-3 sm:px-5 py-1"
        />
      </form>
      <div className="flex items-center mt-8">
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
          className="inline-block w-6 h-6 mr-4 fill-light dark:fill-dark"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetaData.socialLinks.youtube}
          className="inline-block w-6 h-6 mr-4"
        >
          <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
      <div className="w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light dark:border-black py-6 px-8 flex flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy;2024 {siteMetaData.title}. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          className="text-center underline my-2 md:my-0"
        >
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by
          <a href="/" className="underline">
            &nbsp;{siteMetaData.author}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
