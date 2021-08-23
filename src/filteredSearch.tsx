import { useState } from "react";

import SearchBar from "./searchBar";
import CategoriesSelector from "./categoriesSelector";

import options from "./searchBarOptions";

const FilteredSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTextCategory, setSearchTextCategory] = useState(options[0]);
  const [otherCategories, setOtherCategories] = useState<any>([]);

  const handleSearchTextChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const handleSearchCategoryChange = (e: any) => {
    setSearchTextCategory(e.target.value);
  };

  const handleOtherCategoriesChange = (e: any) => {
    //console.log(e.target);
    //console.log(e.target.checked);

    const categories = otherCategories.slice();
    const name = e.target.name;
    const target = e.target.value;
    const checked = e.target.checked;

    // need to check if categories array already has some options set for e.target
    // if not, we can create new object, otherwise we need to update the specific index depending on
    // its current value
    if (
      !(categories.filter((e: { name: any }) => e.name === name).length > 0)
    ) {
      const newCategory = {
        name: e.target.name,
        options: [{ [target]: checked }],
      };
      categories.push(newCategory);
      setOtherCategories(categories);
    }
    /*
    if (categories.indexOf(name) == -1) {
      const newCategory = {
        name: e.target.name,
        options: [{ [target]: checked }],
      };
      categories.push(newCategory);
      setOtherCategories(categories);
      const subtarget = {};
      subtarget[target] = checked;
      newCategory.options.push(subtarget);
    }
    */
  };

  return (
    <>
      <SearchBar
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
        searchTextCategory={searchTextCategory}
        handleSearchCategoryChange={handleSearchCategoryChange}
      ></SearchBar>
      <CategoriesSelector
        otherCategories={otherCategories}
        handleOtherCategoriesChange={handleOtherCategoriesChange}
      ></CategoriesSelector>
    </>
  );
};

export default FilteredSearch;
