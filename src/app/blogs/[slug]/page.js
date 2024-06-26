import { allBlogs } from "generatedContent";
import Tag from "../../../components/Elements/Tag";
import Image from "next/image";
import BlogDetails from "../../../components/Blog/BlogDetails";
import RenderMdx from "../../../components/Blog/RenderMdx";
import { slug } from "github-slugger";
import siteMetaData, { socialBanner, title } from "../../../utils/siteMetaData";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) return;

  let imageList = [siteMetaData.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetaData.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }

  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetaData.siteUrl + img };
  });

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetaData.siteUrl + blog.url,
      images: ogImages,
      imageAlt: blog.title,
      locale: "en_US",
      keywords: blog.tags.join(", "),
      type: "article",
      publishedTime: new Date(blog.publishedAt).toISOString(),
      modifiedTime: new Date(blog.updatedAt).toISOString(),
      author: {
        "@type": "Person",
        name: siteMetaData.author,
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.description,
        images: ogImages, // Must be an absolute URL
      },
    },
  };
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[50vh] sm:h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Tag
            name={blog.tags[0]}
            link={`/categories/${slug(blog.tags[0])}`}
            className="px-6 text-sm py-2"
          />
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl sm:text-3xl md:text-5xl leading-normal relative w-5/6">
            {blog.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
        />
      </div>
      <BlogDetails blog={blog} blogSlug={params.slug} />
      <div className="grid grid-cols-12 gap-y-8 lg:gap:8 sxl:gap-16 mt-8 px-5 md:px-10">
        <div className="col-span-12 lg:col-span-4">
          <details
            className="border-[1px] border-solid border-black dark:border-gray text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              Table Of Content
            </summary>
            <ul className="mt-4 font-in text-base">
              {blog.toc.map((heading) => {
                return (
                  <li key={`#${heading.slug}`} className="py-1">
                    <a
                      href={`#${heading.slug}`}
                      data-level={heading.level}
                      className="data-[level=two]:pl:0 data-[level=two]:pt-2 data-[level=two]: border-t border-solid border-black/40 dark:border-gray
                      data-[level=three]:pl6 flex items-center justify-start"
                    >
                      {heading.level === "three" ? (
                        <span className="flex w-1 h-1 rounded-full bg-dark dark:bg-light mr-2">
                          &nbsp;
                        </span>
                      ) : null}
                      <span className="hover:underline">{heading.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <div className="col-span-8">
          <RenderMdx blog={blog} />
        </div>
      </div>
    </article>
  );
}
