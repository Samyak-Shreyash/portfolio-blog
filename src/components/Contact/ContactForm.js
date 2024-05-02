"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 md:mt-12 text-lg md:text-xl font-medium leading-relaxed font-in dark:text-gray"
    >
      Hello! My name is &nbsp;
      <input
        type="text"
        placeholder="your name"
        {...register("name", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-0 focus:ring-0 placeholder:text-center placeholder:text-lg dark:text-light dark:placeholder:text-gray border-b border-gray dark:border-light focus:border-black dark:focus:border-light bg-transparent"
      />
      &nbsp;and I want to discuss as potential project. You can email me @ &nbsp; 
      <input
        type="text"
        placeholder="your@email"
        {...register("email", { required: true })}
        className="outline-none border-0 p-0 mx-0 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray dark:border-light focus:border-black dark:focus:border-light bg-transparent dark:text-light dark:placeholder:text-gray"
      />
      &nbsp;or reach out to me on &nbsp;
      <input
        type="tel"
        placeholder="your contact number"
        {...register("phone number", { required: true })}
        className="outline-none border-0 p-0 mx-0 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray dark:border-light focus:border-black dark:focus:border-light bg-transparent dark:text-light dark:placeholder:text-gray"
      />
      &nbsp;Here are some details about my project: <br /> <br />
      <textarea
        {...register("project details", {})}
        rows={3}
        className="w-full outline-none border-0 p-0 mx-0 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray dark:border-light focus:border-black dark:focus:border-light bg-transparent dark:text-light dark:placeholder:text-gray"
      />
      <input type="submit" value="Send Request" className="mt-8 font-medium inline-block capitalize text-xl py-3 px-8 border-2 border-solid border-black dark:border-gray rounded cursor-pointer"/>
    </form>
  );
}
