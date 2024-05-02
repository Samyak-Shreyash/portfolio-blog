import React from "react";
import Link from "next/link";
import { cx } from "@/src/utils";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx("inline-block py-2 px-10 rounded-full border-2 border-solid border-black hover:scale-105 transition-all ease duration-200 m-2",
        props.className,
        active ? "bg-dark text-light dark:bg-light dark:text-black" : "bg-light text-black dark:bg-gray/80 dark:text-light/80"
      )}>
      #{name}
    </Link>
  );
};

export default Category;
