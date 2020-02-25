import React from "react";
import { Route, Link } from "react-router-dom";
import LocationList from './components/LocationsList';
import WelcomePage from './components/WelcomePage';
import CharList from './components/CharacterList';
// import { Nav } from 'reactstrap';

let Navi = styled.Link`
  padding: 1%;
`;


export default function App() {
  return (
    <main>
      <header className="ui centered">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </header>

      <Nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/characters">Characters</Link>
          <Link to="/location">Locations</Link>
      </Nav>

      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharList} />
      <Route exact path="/location" component={LocationList} />


    </main>
  );
}
