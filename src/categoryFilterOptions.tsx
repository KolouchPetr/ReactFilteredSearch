import { Fragment } from "react";
import { Checkbox } from "primereact/checkbox";
const CategoryFilterOptions = (props: any) => {
  return (
    <>
      {Object.keys(props.category.options).map((option: any) => (
        <Fragment key={option}>
          <div key={option} className="p-field-checkbox">
            <Checkbox
              inputId={option}
              name={props.category.name}
              value={option}
              onChange={props.handleOtherCategoriesChange}
              checked={props.category.options[option]}
            />
            <label htmlFor={option}>{props.category.name}</label>
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default CategoryFilterOptions;
