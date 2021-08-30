import React, { Fragment } from "react";
import { Checkbox, CheckboxChangeParams } from "primereact/checkbox";
import { Category } from "../Data/types";

interface CategoryFilterOptionsProps {
  category: Category;
  handleOtherCategoriesChange: (e: CheckboxChangeParams) => void;
}

const CategoryFilterOptions = (props: CategoryFilterOptionsProps) => {
  return (
    <>
      {Object.keys(props.category.options).map((option: string) => (
        <Fragment key={option}>
          {console.log("option " + typeof option)}
          <div key={option} className="p-field-checkbox">
            <Checkbox
              inputId={option}
              name={props.category.name}
              value={option}
              onChange={props.handleOtherCategoriesChange}
              checked={props.category.options[option]} // what is this type
            />
            <label htmlFor={option}>{props.category.name}</label>
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default CategoryFilterOptions;
