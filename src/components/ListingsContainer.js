import React from "react";
import ListingCard from "./ListingCard";
import { useState } from 'react'

function ListingsContainer({setFiltered, listings, setDeleted}) {

  const [clicked, setClicked] = useState(false)

  function handleClick (){
    setClicked(prev => !prev)
    let alphabetical = listings.sort(function(a, b) {
      let nameA = a.location.toUpperCase(); // ignore upper and lowercase
      var nameB = b.location.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1; //nameA comes first
      }
      if (nameA > nameB) {
        return 1; // nameB comes first
      }
      return 0;  // names must be equal
    }) 
   clicked ? setFiltered(alphabetical) : setFiltered(listings)
  }

  return (
    <main>
      <button onClick={handleClick}>Alphabetically By Location</button>
      <ul className="cards">
        {listings.map((el, i) => {
          return <ListingCard setDeleted={setDeleted} key={i} listings={el}/>
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
