import React from "react";

const Search = ({ searchQuery, onSearchChange }) => {
  const handleChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
};

export default Search;
