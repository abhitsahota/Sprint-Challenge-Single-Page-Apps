import React, { useState } from "react";

export default function SearchForm(props) {
  // let characters = Array.from(props.characters)
  // let charNames = characters.map(character => {
  //   return character.name;
  // })
  // console.log('search prps', charNames)
  // const [searchTerm, setSearchTerm] = useState("");


  // useEffect(() => {
    

  //   setSearchResults(results);
  // }, [searchTerm]);



  return (
    <section className="search-form">
      <form>
        <label htmlFor='term'>Search: </label>
        <input 
          id='term'
          type='text'
          name='textfield'
          placeholder='Search character names'
          value={props.searchQuery}
          onChange={props.handleChange} />
      </form>
    </section>
  );
}
