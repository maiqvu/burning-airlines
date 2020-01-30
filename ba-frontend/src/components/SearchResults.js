import React from 'react';
import axios from 'axios';
import '../App.css'
import { Link } from 'react-router-dom';

const FLIGHTS_URL = 'http://localhost:3000/flights.json';

class SearchResults extends React.Component {
  state = {
    flightResults: []
  };

  componentDidMount() {
    axios.get( FLIGHTS_URL )
    .then(response => {
      // console.log('all flights from database: ', response.data);
      const searchOrigin = this.props.match.params.from.toUpperCase();
      const searchDestination = this.props.match.params.to.toUpperCase();

      const filtered = response.data.filter( flight => ( flight.from.toUpperCase() === searchOrigin && flight.to.toUpperCase() === searchDestination ));
      // console.log('filtered output: ', filtered);

      this.setState({ flightResults: filtered });
      // console.log(this.state.flightResults);
    })
    .catch( err => console.warn(err) )
  }

  render() {
    return (
      <>
      <h1>here are your results...</h1>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Flight</th>
            <th>From > To</th>
            <th>Plane</th>
          </tr>
        </thead>

        <tbody>
          {
            this.state.flightResults.map(flight => {
              return (
              <tr key={ flight.id }>
                <td>{ flight.date }</td>
                <td><Link to={`/flights/${flight.id}`}>{flight.flight_no}</Link></td>
                <td>{ flight.from } > { flight.to }</td>
                <td>{ flight.plane.model }</td>
              </tr>)
            })
          }
        </tbody>
      </table>
      </>
    );
  }
}

export default SearchResults;
