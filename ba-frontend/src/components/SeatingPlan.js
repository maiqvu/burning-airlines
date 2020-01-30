import React from 'react'
import '../FlightShow.css'
import Square from './Square'

class SeatingPlan extends React.Component {

  state = {
    seatArray: new Array(this.props.seats).fill(false)
  }

  handleClick(i){
    const seatArray = this.state.seatArray.slice();
    seatArray[ i ] = true;
    this.setState({seatArray: seatArray});

    console.log(this.state.seatArray)
  }


  renderSquare(i, seat) {
    // console.log('render', seat);
    return <Square seat={i} key={i}
      status={ this.state.seatArray[i] }
      onClick={() => this.handleClick(i)}
    />;

  } // render Square




  componentDidMount(){

    this.seatUpdate( )
  }




  seatUpdate(  ){

    const reservationArray = this.props.reservations.map( res => res.seat )

    const updatedSeats = this.state.seatArray.map( (seat, i) => (
      // console.log(seat, i),

        reservationArray.includes(i+1)

    )) //main map

    this.setState({ seatArray: updatedSeats });


  }


  render(){


    return(
      <div>


      <div className="grid">
        {
          this.state.seatArray.map( (seat, i) => (
            // console.log(seat, i),

            this.renderSquare(i+1, seat)

          ))
        }
      </div>
    </div>






    )
  }

}

export default SeatingPlan
