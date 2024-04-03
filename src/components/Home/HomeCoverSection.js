import { sortBlogs } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../elements/Tag";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const coverBlog = sortedBlogs[2];
  //   console.log(coverBlog);
  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh]">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0%
        to-dark/90 rounded-3xl z-0"
        ></div>
        <Image
          src={coverBlog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={coverBlog.image.blurhashDataUrl}
          alt={coverBlog.title}
          fill
          className="w-full h-full object-center object-cover rounded-3xl"
        />
        <div className="w-3/4 p-16 flex flex-col items-start justify-center z-0 text-light">
          <Tag
            className=""
            link={`/categories/${coverBlog.tags[0]}`}
            name={coverBlog.tags[0]}
          />
          <Link href={coverBlog.url} className="mt-6">
            <h1 className="font-bold capitalize text-light text-4xl">
              <span
                className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
              >
                {coverBlog.title}
              </span>
            </h1>
          </Link>
          <p className="inline-block mt-4 text-xl font-in">{coverBlog.description}</p>
        </div>
      </article>
      {coverBlog.tags[0]}
    </div>
  );
};

export default HomeCoverSection;
