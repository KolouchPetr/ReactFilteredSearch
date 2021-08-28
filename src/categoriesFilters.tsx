import CategoryFilterSearch from "./categoryFilterSearch";
import CategoryFilterOptions from "./categoryFilterOptions";

const CategoriesFilters = (props: any) => {
  return (
    <>
      <h5>{props.category.name}</h5>
      <CategoryFilterSearch name={props.category.name}></CategoryFilterSearch>
      <CategoryFilterOptions
        category={props.category}
        handleOtherCategoriesChange={props.handleOtherCategoriesChange}
      ></CategoryFilterOptions>
    </>
  );
};

export default CategoriesFilters;
