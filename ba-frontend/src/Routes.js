import React from 'react';
import './App.css';
import { 
  Route, 
  Link, 
  HashRouter as Router 
} from 'react-router-dom';

import Search from './components/Search';
import SearchResults from './components/SearchResults';


const Routes = () => {
  return (
    <>
    <h1>Welcome to Burning Airlines</h1>

    <Router>
      <nav>
        <Link to="/">Home</Link> | &nbsp;
        <Link to="/search">Find a flight</Link>
      </nav>
      <hr/>
      <div>
        <Route path="/search" component={Search} />
        <Route path="/search/:from/:to" component={SearchResults} />
        {/* <Route exact path="/flights/:flightid" component={Flights} /> */}
      </div>
    </Router>
    </>
  );
}

export default Routes;