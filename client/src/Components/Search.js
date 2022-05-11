import React from "react";

function Search({ setQuery }) {
 
  return (
    <div className="searchbar">
      <h2> Find your concert</h2>
      <div>
      <input
        className="fas"
        type="text"
        id="search"
        placeholder=" Type a concert to search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      </div>
    </div>
  );
}

export default Search;
