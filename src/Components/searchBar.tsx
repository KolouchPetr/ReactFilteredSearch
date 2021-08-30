import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const SearchBar = (props: any) => {
  return (
    <form onSubmit={props.handleSearchTextChange} className="searchBar">
      {/* 
      <select
        onChange={props.handleSearchCategoryChange}
        value={props.searchTextCategory}
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      */}
      <Dropdown
        value={props.searchTextCategory}
        options={props.options}
        onChange={props.handleSearchCategoryChange}
        optionLabel="name"
        filterBy="name"
        placeholder={props.searchTextCategory}
      />

      <span className="p-input-icon-right">
        <i className="pi pi-search" />
        <InputText
          value={props.searchText}
          onChange={props.handleSearchTextChange}
          placeholder="Search"
        />
      </span>

      <Button
        label="Search"
        type="submit"
        onSubmit={props.handleSearchTextChange}
      ></Button>
    </form>
  );
};

export default SearchBar;
