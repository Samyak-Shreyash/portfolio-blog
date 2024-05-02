import React from "react";

const SkillList = [
  "next.js",
  "tailwind css",
  "figma",
  "javaScript",
  "web design",
  "Gatsby.js",
  "strapi",
  "firebase",
  "generative AI",
  "wireframing",
  "SEO",
  "framer motion",
  "sanity",
];

const Skills = () => {
  return (
    <section className="w-full flex flex-col p-5 sm:p-10 md:p-20 border-b-2 border-black dark:border-gray">
      <span className="semi-bold text-xl sm:text-2xl md:text-4xl text-accent dark:text-accentDark">
        I'm comfortable in . . .
      </span>
      <ul className="flex flex-wrap mt-4 md:mt-8 justify-center xs:justify-start">
        {SkillList.map((item, index) => {
          return (
            <li
              key={index}
              className="font-sm xs:font-base sm:font-semibold dark:font-normal inline-block capitalize text-base xs:text-lg sm:text-xl md:text-2xl py-2 xs:py-3 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12 border-2 border-solid border-gray dark:border-gray text-black dark:text-gray hover:font-bold dark:hover:text-light hover:border-black dark:hover:border-light rounded mr-3 mb-3 xs:mr-4 xs:mb-4 md:mr-6 md:mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
