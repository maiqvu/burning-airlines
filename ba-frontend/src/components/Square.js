import React from 'react'

const Square = ( props ) => {

  // console.log(props);

    return (
      <button
        className="square"
        onClick={ props.onClick }
        style={ props.status ? { backgroundColor: 'red',
        color: 'white'
        } : {backgroundColor: 'white'} }
      >
        {props.seat}
      </button>
    );

}

export default Square
