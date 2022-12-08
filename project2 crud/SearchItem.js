const SearchItem = ({ search, setSearch }) => {
  return (
    <form
      className="searchForm"
      onSubmit={(eve) => {
        eve.preventDefault();
      }}
    >
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder="Search Item"
        value={search}
        onChange={(eve) => {
          setSearch(eve.target.value);
        }}
      />
    </form>
  );
};

export default SearchItem;
