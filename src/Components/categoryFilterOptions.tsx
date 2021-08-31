import { Checkbox, CheckboxChangeParams } from "primereact/checkbox";
import { Category } from "../Data/types";

interface CategoryFilterOptionsProps {
  category: Category;
  handleOtherCategoriesChange: (e: CheckboxChangeParams) => void;
  searchCategory: string;
}

const CategoryFilterOptions = (props: CategoryFilterOptionsProps) => {
  const returnBoxes: JSX.Element[] | null = [];
  Object.keys(props.category.options).forEach((option) => {
    if (option.toLowerCase().indexOf(props.searchCategory.toLowerCase()) === -1) {
      return;
    } else {
      return returnBoxes.push(
        <div key={option} className="p-field-checkbox">
          <Checkbox
            inputId={option}
            name={props.category.name}
            value={option}
            onChange={props.handleOtherCategoriesChange}
            checked={props.category.options[option]} // what is this type
          />
          <label htmlFor={option}>{option}</label>
        </div>
      );
    }
  });
  return <>{returnBoxes}</>;
};

export default CategoryFilterOptions;
