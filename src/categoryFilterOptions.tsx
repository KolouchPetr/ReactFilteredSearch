import { Fragment } from "react";

const CategoryFilterOptions = (props: any) => {
  return (
    <>
      {Object.keys(props.category.options).map((option: any) => (
        <Fragment key={option}>
          <input
            type="checkbox"
            name={props.category.name}
            value={option}
            checked={props.category.options[option]}
            onChange={props.handleOtherCategoriesChange}
          />
          <label htmlFor="option">{option}</label>
        </Fragment>
      ))}
    </>
  );
};

export default CategoryFilterOptions;
