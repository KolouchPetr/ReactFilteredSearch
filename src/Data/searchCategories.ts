import { Category } from "./types";
/*
interface Item {
  [key: string]: Object;
}
*/

const searchCategories: Category[] = [
  {
    name: "name1",
    options: { option1: false, option2: true },
  },
  {
    name: "name2",
    options: { option1: true, option2: false },
  },
  {
    name: "name3",
    options: { option1: false, option2: false },
  },
];

export default searchCategories;
