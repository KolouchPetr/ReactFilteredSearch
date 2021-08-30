import { InputText } from "primereact/inputtext";

interface CategoryFilterSearchProps {
  name: string;
  searchCategory: string;
  handleSearchCategoryChange: React.ChangeEventHandler<HTMLInputElement>;
}

const CategoryFilterSearch = (props: CategoryFilterSearchProps) => {
  const placeholder = `Search for ${props.name} options`;
  return (
    <>
      <InputText
        type="text"
        value={props.searchCategory}
        onChange={props.handleSearchCategoryChange}
        className="p-inputtext-sm p-d-block p-mb-2"
        placeholder={placeholder}
      />
    </>
  );
};

export default CategoryFilterSearch;
