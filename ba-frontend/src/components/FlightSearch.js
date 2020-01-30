import React from 'react';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import FlightShow from './FlightShow'

class FlightSearch extends React.Component {

  render(){
    return(
      <div className="App">
      <h1>Virgin</h1>

        <Router>
          <Route exact path="/flights/:id" component={ FlightShow }/>

        </Router>




      </div>
    )

  }
}

export default FlightSearch;
