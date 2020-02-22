import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import { Card, CardTitle } from 'reactstrap';


import LocationCard from './LocationCard';
import SearchForm from "./SearchForm";

export default function LocationsList() {

  let [locationList, setLocationList] = useState([])
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        let results = response.data.results.filter(place => {
          return place.name.toLowerCase().includes(searchQuery.toLowerCase())
        } 
        );
        setLocationList(results);
        console.log(locationList);
        console.log(searchQuery)
      })
      .catch(error => console.log('Call not complete', error))
  }, [searchQuery]);


  return (
    <section className="location-list">
      <SearchForm searchQuery={searchQuery} handleChange={handleChange} placeholder='Search location names'/>

      <h2>List of your favourite Ricky and Morty locations!</h2>

      <Route path="/location/:id" render={(locationList) => <LocationCard {...locationList} />} />
      <ul>
        {locationList.map(place => {
          return (
          <Link to ={`/location/${place.id}`} key={place.id}>
            <Card key={place.id}>
              <CardTitle>{place.name}</CardTitle>
            </Card>
          </Link>
          )})}
      </ul>
    </section>
  );
}
