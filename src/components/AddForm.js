import React from 'react'
import { useState } from 'react'
function Form({setPosted}) {

  let initialObj = {description: '' , image: '', location: ''}
  const [newObj, setnewObj] = useState(initialObj)
  console.log(initialObj)


  function handleChange(e){
    setnewObj({...newObj, [e.target.name] : e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:6001/listings', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newObj)
    })
    .then(res => res.json())
    .then(data => {
      setPosted(prev => !prev)
      setnewObj(initialObj)
    })
  }
  return (
    <div>
      <h2> Add New Listing</h2>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={newObj.description} name='description' type='text'></input>
            <input onChange={handleChange} value={newObj.image} name='image' type='text'></input>
            <input onChange={handleChange} value={newObj.location} name='location' type='text'></input>
            <input type='submit'></input>
        </form>
    </div>
  )
}

export default Form
