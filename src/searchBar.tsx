import options from "./searchBarOptions";

const SearchBar = (props: any) => {
  return (
    <form>
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

      <input
        type="text"
        value={props.searchText}
        onChange={props.handleSearchTextChange}
      />

      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchBar;
