import { CheckboxChangeParams } from "primereact/checkbox";
import CategoriesFilters from "./categoriesFilters";
import { Category } from "../Data/types";

interface CategoriesProps {
  handleOtherCategoriesChange: (e: CheckboxChangeParams) => void;
  otherCategories: Category[];
}

const Categories = (props: CategoriesProps) => {
  return (
    <div className="leftCategories">
      {props.otherCategories.map((category: Category) => (
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
