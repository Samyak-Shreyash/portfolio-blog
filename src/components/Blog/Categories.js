import React from "react";
import Category from "./Category";
import { slug } from "github-slugger";

const Categories = ({ categories, current }) => {
  return (
    <div className="px-8 md:px-20 mt-10 border-t-2 text-black border-b-2 border-solid border-black dark:border-gray/80 py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">{
      categories.map(category =>
      <Category
        key={category}
        link={`/categories/${category}`}
        name={category}
        active={current=== slug(category)}
      />
      )}
    </div>
  );
};

export default Categories;
