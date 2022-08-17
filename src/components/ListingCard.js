import React from "react";
import { useState } from 'react'

function ListingCard({listings, setDeleted}) {

  const [clicked, setClicked] = useState(true)
  function handleClick(){
    setClicked(prev => !prev)
  }


  function handleDelete() {
    fetch(`http://localhost:6001/listings/${listings.id}`,{
      method: 'Delete'
    })
    .then(res => res.json())
    .then(data => {
      setDeleted(prev => !prev)
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listings.image} alt={"description"} />
      </div>
      <div className="details">
        {clicked ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listings.description}</strong>
        <span> · {listings.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
