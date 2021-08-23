const CategorySearch = (props: any) => {
  return (
    <>
      <input
        type="text"
        value={props.searchCategory}
        onChange={props.handleSearchCategoryChange}
      />
    </>
  );
};

export default CategorySearch;
