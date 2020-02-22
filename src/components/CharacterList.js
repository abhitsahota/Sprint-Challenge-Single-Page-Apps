import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Route, Link } from "react-router-dom";

import CharacterInfo from './CharacterCard';
import SearchForm from "./SearchForm";

export default function CharacterList() {

  let [charList, setCharList] = useState([])
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        let results = response.data.results.filter(character => {
          return character.name.toLowerCase().includes(searchQuery.toLowerCase())
        } 
        );
        setCharList(results);
        console.log(charList);
        console.log(searchQuery)
      })
      .catch(error => console.log('Call not complete', error))
  }, [searchQuery]);


  return (
    <section className="character-list">
      <SearchForm searchQuery={searchQuery} handleChange={handleChange} placeholder='Search character names'/>

      <h2>TODO: `array.map()` over your state here!</h2>

      <Route path="/characters/:id" render={(charList) => <CharacterInfo {...charList} />} />
      <ul>
        {charList.map(character => {
        return <Link to ={`/characters/${character.id}`}><li key={character.id}>{character.name}</li></Link>;
        })}
      </ul>
    </section>
  );
}
