import React from "react";
import Category from "./Category";
import { slug } from "github-slugger";

const Categories = ({ categories, current }) => {
  return (
    <div className="px-20 mt-10 border-t-2 text-dark border-b-2 border-solid border-dark py-4 flex items-start flex-wrap font-medium mx-10">{
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
