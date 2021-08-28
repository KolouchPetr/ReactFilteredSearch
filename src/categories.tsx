import searchCategories from "./searchCategories";
import CategoriesFilters from "./categoriesFilters";

const Categories = (props: any) => {
  return (
    <div className="leftCategories">
      {searchCategories.map((category: any) => (
        <CategoriesFilters
          key={category.name}
          category={category}
          handleOtherCategoriesChange={props.handleOtherCategoriesChange}
        ></CategoriesFilters>
      ))}
    </div>
  );
};

export default Categories;
