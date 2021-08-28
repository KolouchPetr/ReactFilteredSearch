import { useState } from "react";
import { InputText } from "primereact/inputtext";

const CategoryFilterSearch = (props: any) => {
  const [searchCategory, setSearchCategory] = useState("");

  const handleSearchCategoryChange = (e: any) => {
    setSearchCategory(e.target.value);
  };

  const placeholder = `Search for ${props.name} options`;
  return (
    <>
      <InputText
        type="text"
        value={searchCategory}
        onChange={handleSearchCategoryChange}
        className="p-inputtext-sm p-d-block p-mb-2"
        placeholder={placeholder}
      />
    </>
  );
};

export default CategoryFilterSearch;
