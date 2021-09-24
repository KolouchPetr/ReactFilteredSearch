import { useState } from "react";

import SearchBar from "./searchBar";
import Categories from "./categories";

import { Category } from "../Data/types";

import options from "../Data/searchBarOptions";
import searchCategories from "../Data/searchCategories";
import { CheckboxChangeParams } from "primereact/checkbox";

const FilteredSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTextCategory, setSearchTextCategory] = useState(options[0].name);
  const [otherCategories, setOtherCategories] = useState<Category[]>(searchCategories);
  // experimental offline part

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const handleSearchBarFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(searchText);
  };

  const handleSearchCategoryChange = (category: Category) => {
    setSearchTextCategory(category.name);
  };

  const handleOtherCategoriesChange = (e: CheckboxChangeParams) => {
    const categories = otherCategories.slice();
    const name = e.target.name;
    const target = e.target.value;
    const checked = e.target.checked;

    const index = categories.findIndex((x: { name: string }) => x.name === name);
    categories[index].options[target] = checked;
    setOtherCategories(categories);
  };

  return (
    <>
      <SearchBar
        searchText={searchText}
        options={options}
        handleSearchTextChange={handleSearchTextChange}
        searchTextCategory={searchTextCategory}
        handleSearchCategoryChange={handleSearchCategoryChange}
        handleSearchBarFormSubmit={handleSearchBarFormSubmit}
      ></SearchBar>
      <Categories
        otherCategories={otherCategories}
        handleOtherCategoriesChange={handleOtherCategoriesChange}
      ></Categories>
    </>
  );
};

export default FilteredSearch;
