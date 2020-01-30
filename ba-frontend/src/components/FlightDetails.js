import React from 'react'

const FlightDetails = ( props ) => {
  // console.log( props );

    return(

      <table>
      <thead>
      <tr>
      <th>Date</th>
      <th>Flight</th>
      <th>From</th>
      <th>To</th>

      </tr>
      </thead>

      <tbody>

      <tr>
      <td> {props.details.date} </td>
      <td> {props.details.flight_no} </td>
      <td> {props.details.from} </td>
      <td> {props.details.to} </td>
      </tr>

      </tbody>
      </table>


    )

};

export default FlightDetails
