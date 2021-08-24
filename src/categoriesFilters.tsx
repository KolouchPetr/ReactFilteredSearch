import CategorySearch from "./categorySearch";
import CategoryOptions from "./categoryOptions";

const CategoriesFilters = (props: any) => {
  return (
    <>
      <h5>{props.category.name}</h5>
      <CategorySearch></CategorySearch>
      <CategoryOptions
        category={props.category}
        handleOtherCategoriesChange={props.handleOtherCategoriesChange}
      ></CategoryOptions>
    </>
  );
};

export default CategoriesFilters;
