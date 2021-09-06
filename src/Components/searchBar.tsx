import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const SearchBar = (props: any) => {
  return (
    <form className="searchBar" onSubmit={props.handleSearchBarFormSubmit}>
      <Dropdown
        value={props.searchTextCategory}
        options={props.options}
        onChange={(e) => props.handleSearchCategoryChange(e.target.value)}
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

      <Button label="Search" type="submit"></Button>
    </form>
  );
};

export default SearchBar;
