import React from 'react'
import Square from './Square'

const Key = () => {

  return(


  <div className="key">
  <p><strong> Key: </strong></p>
      <p>Reserved:</p>
      <Square status={true} />
      <p>Available:</p>
      <Square status={false} />
  </div>
  )


}

export default Key
