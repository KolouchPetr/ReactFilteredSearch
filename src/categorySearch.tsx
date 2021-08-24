import { useState } from "react";

const CategorySearch = (props: any) => {
  const [searchCategory, setSearchCategory] = useState("");

  const handleSearchCategoryChange = (e: any) => {
    setSearchCategory(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={searchCategory}
        onChange={handleSearchCategoryChange}
      />
    </>
  );
};

export default CategorySearch;
