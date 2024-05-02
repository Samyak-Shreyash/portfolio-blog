import { sortBlogs } from "@/src/utils";
import React from "react";
import Link from "next/link";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px:5 sm:px-10 md:px-24 sxl:px-32flex flex-col items-center justify-center">
      <div className="flex w-full justify-between">
      <h2 className="w-fit inline-block font-bold capitalize text-lg xs:text-xl sm:text-2xl md:text-4xl dark:text-light">
        Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2 text-base md:text-lg"
        >
          View All
        </Link>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-6 sm:ssgrid-rows-3 md:grid-rows-2 gap-16 mt-16">
        {
        sortedBlogs.slice(4, 10).map((blog, index) => {
            return <article className="col-span-1 row-span-1 relative"><BlogLayoutThree blog={blog} key={index}/></article>
        })
        }
      </div>
    </section>
  );
};

export default RecentPosts;
