import React from "react";
import Image from "next/image";
import profileCharacter from "../../../public/character.png";
import siteMetaData from "../../utils/siteMetaData";

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="w-full md:w-1/2 h-full border-b-2 md:border-r-2 border-solid border-dark dark:border-gray flex justify-center">
        <Image
          src={profileCharacter}
          alt={siteMetaData.author} priority
          className="w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1180px) 50vw, 33vw"
        />
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16  border-b-2 md:border-r-2 border-solid border-dark dark:border-gray ">
      <h2 className="font-bold text-center lg:text-left capitalize text-2xl xs:text-3xl md:text-4xl sxl:text-6xl">Dream Big, Work Hard, Achieve More!</h2>
      <p className="font-medium capitalize mt-4 text-base">
        This Mantra Drives My Work As A Passionate Freelancer. I Blend
        Innovative Technology With Timeless Design For Captivating Digital
        Experiences. Inspired By Nature And Literature, I'm A Perpetual Learner
        Embracing Challenges. With Each Project, I Aim To Leave A Lasting
        Impact—One Pixel At A Time.
      </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;