import { CheckboxChangeParams } from "primereact/checkbox";
import { Button } from "primereact/button";
import CategoriesFilters from "./categoriesFilters";
import { Category } from "../Data/types";
import { MouseEventHandler } from "react";

interface CategoriesProps {
  handleOtherCategoriesChange: (e: CheckboxChangeParams) => void;
  otherCategories: Category[];
  // experimental offline part
  categoriesShown: number;
  handleLoadMoreButtonClick: any;
}

const Categories = (props: CategoriesProps) => {
  let otherCategories: Category[] = [];
  let isLoadable;

  // limit category to categiresShown state
  if (props.categoriesShown < props.otherCategories.length) {
    otherCategories = props.otherCategories.slice(0, props.categoriesShown);
    isLoadable = true;
  } else {
    otherCategories = props.otherCategories.slice();
    isLoadable = false;
  }

  return (
    <div className="leftCategories">
      {otherCategories.map((category: Category) => (
        <CategoriesFilters
          //categoriesShown={props.categoriesShown}
          key={category.name}
          category={category}
          handleOtherCategoriesChange={props.handleOtherCategoriesChange}
        ></CategoriesFilters>
      ))}
      {isLoadable && (
        <>
          <br />
          <Button
            label="Load more..."
            type="button"
            onClick={props.handleLoadMoreButtonClick}
          ></Button>
        </>
      )}
    </div>
  );
};

export default Categories;
