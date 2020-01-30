import React from 'react'

const Square = ( props ) => {

    return (
      <button
        className="square"
        style={ props.status ? { backgroundColor: 'red',
        color: 'white'
        } : {backgroundColor: 'white'} }
      >
        {props.seat}
      </button>
    );

}

export default Square
