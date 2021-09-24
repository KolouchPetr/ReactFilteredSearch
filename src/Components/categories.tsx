import { CheckboxChangeParams } from "primereact/checkbox";
import { Button } from "primereact/button";
import CategoriesFilters from "./categoriesFilters";
import { Category } from "../Data/types";
import { useState } from "react";

interface CategoriesProps {
  handleOtherCategoriesChange: (e: CheckboxChangeParams) => void;
  otherCategories: Category[];
  // experimental offline part
}

const Categories = (props: CategoriesProps) => {
  const [categoriesShown, setCategoriesShown] = useState<number>(4);

  let otherCategories: Category[] = [];
  let isLoadable;

  const handleLoadMoreButtonClick = () => {
    setCategoriesShown(categoriesShown + 5);
  };

  // limit category to categiresShown state
  if (categoriesShown < props.otherCategories.length) {
    otherCategories = props.otherCategories.slice(0, categoriesShown);
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
            onClick={handleLoadMoreButtonClick}
          ></Button>
        </>
      )}
    </div>
  );
};

export default Categories;
