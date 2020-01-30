import React from 'react';
import './App.css';
import {
  Route,
  Link,
  HashRouter as Router
} from 'react-router-dom';

import Search from './components/Search';
import SearchResults from './components/SearchResults';
import FlightShow from './components/FlightShow';
import Flights from './components/Flights';

const Routes = () => {
  return (
    <>
    <h1>Welcome to Burning Airlines</h1>

    <Router>
      <nav>
        <Link to="/">Home</Link> | &nbsp;
        <Link to="/search">Find a flight</Link> | &nbsp;
        <Link to="/flights">See all flights</Link>
      </nav>
      <hr/>
      <div>
        <Route path="/search" component={Search} />
        <Route path="/search/:from/:to" component={SearchResults} />
        <Route exact path="/flights/:id" component={ FlightShow }/>
        <Route path="/flights" component={Flights} />
      </div>
    </Router>
    </>
  );
}

export default Routes;
