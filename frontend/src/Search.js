import React from "react";

function Search({ changeSearch, searchInput }) {
  function handleChange(e) {
    changeSearch(e.target.value);
  }

  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search songs..."
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
}

export default Search;
