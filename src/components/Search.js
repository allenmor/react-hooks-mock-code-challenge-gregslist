import React from "react";
import { useState } from 'react'
import { useEffect } from "react/cjs/react.production.min";

function Search({setFiltered, listings}) {

  const [search, setSearch] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    let newArray = listings.filter((el, i) => {
      return el.description.toLowerCase().includes(search.toLowerCase())
    })
    console.log(search)
    console.log(newArray)
    setFiltered(newArray)
  }

  function handleChange(e) {
    setSearch(e.target.value)
  }
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
