import React from 'react'
import axios from 'axios'
import SeatingPlan from './SeatingPlan'
import FlightDetails from './FlightDetails'
import Key from './Key'


class FlightShow extends React.Component {

  state = {
    loaded: false,
    flightDetails: {},
  }

  componentDidMount( ){
    console.log('mounted');

    const FLIGHT_URL = `http://localhost:3000/flights/${this.props.match.params.id}.json`;


    axios.get( FLIGHT_URL )
        .then( res => this.setState(
          {flightDetails: res.data,
            numberOfSeats: res.data.plane.seats,
            reservations: res.data.reservations.length,
            loaded: true
          }
        ) )
        .catch( err => console.warn( err ));

  } //compmount



  render(){

    return(
    <div className="flightShow">
      <h2>FlightShow</h2>

      <div className="flightDetails">
        {
          (this.state.loaded) && <FlightDetails details={this.state.flightDetails.flight} />
        }
        {
          (this.state.loaded) &&
          <p>
              <strong>Available Seats: </strong>
              {
                 (this.state.numberOfSeats - this.state.reservations)
              }
          </p>
        }
      </div>


      <div className="seatingPlan">
        {
         (this.state.loaded) &&
         <SeatingPlan seats={this.state.numberOfSeats} reservations={ this.state.flightDetails.reservations }/>
        }
        <Key />
      </div>

    </div>
    )
  }//render
  
}

export default FlightShow
