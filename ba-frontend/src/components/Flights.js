import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FLIGHTS_URL = 'http://localhost:3000/flights.json';

class Flights extends Component {
  state = {
    allFlights: []
  };

  fetchAllFlights() {
    axios.get( FLIGHTS_URL )
    .then( res => this.setState({ allFlights: res.data }) )
    .catch( err => console.warn(err) );
  }

  componentDidMount() {
    console.log('mounted!');
    this.fetchAllFlights();
    window.setInterval( () => {this.fetchAllFlights()}, 5000 );
  }

  saveFlight = (flight) => {
    console.log('in saveFlight():', flight);
    axios.post( FLIGHTS_URL, {content: flight} )
    .then( res => {
      console.log(res)
      const allFlightsCopy = this.state.allFlights.slice();
      allFlightsCopy.push( res.data );
      this.setState({ allFlights: allFlightsCopy });
    })
    .catch( console.warn );
  }

  render() {
    return (
      <>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Flight</th>
            <th>From > To</th>
            <th>Plane</th>
            <th>Available seats</th>
          </tr>
        </thead>

        <tbody>
        {
          this.state.allFlights.reverse().map( f => {
            return (
            <tr key={ f.id }>
              <td>{ f.id }</td>
              <td><Link to={`/flights/${f.id}`}>{f.flight_no}</Link></td>
              <td>{ f.from } > { f.to }</td>
              <td>{ f.plane.model }</td>
              <td>27</td>
            </tr>
            )
          })
        }
        </tbody>
      </table>
      </>
    );
  }
}

export default Flights;