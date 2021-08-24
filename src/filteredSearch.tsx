import { useState } from "react";

import SearchBar from "./searchBar";
import Categories from "./categories";

import options from "./searchBarOptions";
import searchCategories from "./searchCategories";

const FilteredSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTextCategory, setSearchTextCategory] = useState(options[0]);
  const [otherCategories, setOtherCategories] = useState<any>(searchCategories);

  const handleSearchTextChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const handleSearchCategoryChange = (e: any) => {
    setSearchTextCategory(e.target.value);
  };

  const handleOtherCategoriesChange = (e: any) => {
    const categories = otherCategories.slice();
    const name = e.target.name;
    const target = e.target.value;
    const checked = e.target.checked;

    const index = categories.findIndex((x: { name: any }) => x.name === name);
    categories[index].options[target] = checked;
    setOtherCategories(categories);
  };

  return (
    <>
      <SearchBar
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
        searchTextCategory={searchTextCategory}
        handleSearchCategoryChange={handleSearchCategoryChange}
      ></SearchBar>
      <Categories
        otherCategories={otherCategories}
        handleOtherCategoriesChange={handleOtherCategoriesChange}
      ></Categories>
    </>
  );
};

export default FilteredSearch;
