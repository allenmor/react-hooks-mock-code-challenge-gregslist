import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useState, useEffect } from 'react'
import AddForm from "./AddForm";

function App() {
  const [listings, setListings] = useState([])
  const [deleted, setDeleted] = useState(false)
  const [filtered, setFiltered] = useState([])
  const [posted, setPosted] = useState(false)
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => {
      setListings(data)
      setFiltered(data)
    })
  },[deleted, posted])
  console.log(listings)

  return (
    <div className="app">
      <Header listings={listings} setFiltered={setFiltered}/>
      <AddForm setPosted={setPosted}/>
      <ListingsContainer setFiltered={setFiltered} setDeleted={setDeleted} listings={filtered}/>
    </div>
  );
}

export default App;
