import CategoryFilterSearch from "./categoryFilterSearch";
import CategoryFilterOptions from "./categoryFilterOptions";
import { useState } from "react";
import { Category } from "../Data/types";
import { CheckboxChangeParams } from "primereact/checkbox";

interface CategoriesFiltersProps {
  category: Category;
  handleOtherCategoriesChange: (e: CheckboxChangeParams) => void;
}

const CategoriesFilters = (props: CategoriesFiltersProps) => {
  const [searchCategory, setSearchCategory] = useState("");

  const handleSearchCategoryChange = (e: any) => {
    setSearchCategory(e.target.value);
  };

  return (
    <>
      <h5>{props.category.name}</h5>
      <CategoryFilterSearch
        name={props.category.name}
        searchCategory={searchCategory}
        handleSearchCategoryChange={handleSearchCategoryChange}
      ></CategoryFilterSearch>
      <CategoryFilterOptions
        searchCategory={searchCategory}
        category={props.category}
        handleOtherCategoriesChange={props.handleOtherCategoriesChange}
      ></CategoryFilterOptions>
    </>
  );
};

export default CategoriesFilters;
