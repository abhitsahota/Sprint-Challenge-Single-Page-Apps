import React from "react";
import { Route, Link } from "react-router-dom";
import LocationList from './components/LocationsList';
import WelcomePage from './components/WelcomePage';
import CharList from './components/CharacterList';

export default function App() {
  return (
    <main>
      <header className="ui centered">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </header>
      <nav className="nav-links">

          <Link to="/">Home</Link>
          <Link to="/characters">Characters</Link>
        </nav>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/characters" component={CharList} />
        <Route path="/location" component={LocationList} />

    </main>
  );
}
