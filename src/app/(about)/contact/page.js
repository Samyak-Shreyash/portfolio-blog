import React from "react";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";
import ContactForm from "@/src/components/Contact/ContactForm";

const page = () => {
  return (
    <section className="w-full h-[50vh] sm:h-[75vh] border-b-2 border-solid border-black dark:border-gray flex flex-row items-center justify-center text-black">
      <div className="inline-block w-2/5 h-full border-r-2 border-solid border-black dark:border-gray">
        <LottieAnimation fileName="contact" />
      </div>
      <div className="w-3/5 flex flex-col items-start justify-center px-16 pb-8">
        <h2 className="font-bold capitalize text-2xl md:text-4xl dark:text-gray">Lets Connect!</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default page;
