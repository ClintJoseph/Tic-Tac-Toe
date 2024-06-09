import React from 'react'

function Square(props) {
  return (
    <button className='square'  style={{ color: props.value === 'X' ? 'blue' : 'orange'}} onClick={props.onClicked}>
    {props.value}
  </button>
  )
}

export default Square
