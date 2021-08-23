import { useState } from "react";

import searchCategories from "./searchCategories";

import CategorySearch from "./categorySearch";
import CategoryOptions from "./categoryOptions";

const CategoriesSelector = (props: any) => {
  const [searchCategory, setSearchCategory] = useState("");

  const handlSearchCategoryChange = (e: any) => {
    setSearchCategory(e.target.value);
  };

  return (
    <>
      {searchCategories.map((category: any) => (
        <div key={category.name}>
          <h5>{category.name}</h5>
          <CategorySearch
            searchCategory={searchCategory}
            handleSearchCategoryChange={handlSearchCategoryChange}
          ></CategorySearch>
          <CategoryOptions
            category={category}
            handleOtherCategoriesChange={props.handleOtherCategoriesChange}
          ></CategoryOptions>
        </div>
      ))}
    </>
  );
};

export default CategoriesSelector;
