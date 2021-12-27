import React, { useState } from "react";

const Search = ({search}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    search(e.target.value);
  };

  return (
    <div>
      <label>Search</label>
      <input type="text" value={searchQuery} onChange={handleChange} />
    
    </div>
  );
};

export default Search;
