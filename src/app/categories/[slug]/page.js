import { allBlogs } from "generatedContent";
import GithubSlugger, { slug } from "github-slugger";
import Categories from "../../../components/Blog/Categories";
import BlogLayoutThree from "../../../components/Blog/BlogLayoutThree";

const slugger = new GithubSlugger();
export async function generateStaticParams() {
  const categories = new Set();
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        categories.add({ slug: slugified });
      });
    }
  });
  return paths;
}

const CategoryPage = ({ params }) => {
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") return true;
      return slugified === params.slug;
    });
  });
  return (
    <article className="mt-12 flex flex-col text-dark">
      <div className="px-32 flex flex-col ">
        <h1 className="mt-6 font-semibold text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more Categories and expand your knowledge !
        </span>
      </div>
      <Categories categories={allCategories} current={params.slug} />
      <div className="grid grid-cols-3 grid-rows-3 gap-16 mt-24 px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />{" "}
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;