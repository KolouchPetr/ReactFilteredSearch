import searchCategories from "./searchCategories";
import CategoriesFilters from "./categoriesFilters";

const Categories = (props: any) => {
  return (
    <>
      {searchCategories.map((category: any) => (
        <CategoriesFilters
          key={category.name}
          category={category}
          handleOtherCategoriesChange={props.handleOtherCategoriesChange}
        ></CategoriesFilters>
      ))}
    </>
  );
};

export default Categories;
