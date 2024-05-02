import React from "react";
import Link from "next/link";
import { cx } from "@/src/utils";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      className={cx(
        "inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark text-light dark:text-gray text-sm sm:text-base rounded-full capitalize font-semibold border-2 border-solid border-light dark:border-black hover:scale-105 transition-all ease duration-200",
        props.className
      )}
      href={link}
    >
      {name}
    </Link>
  );
};

export default Tag;
