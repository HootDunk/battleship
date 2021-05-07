import React from 'react'
import "../Styles/Square.css"
export default function Square(props) {
  return (
      <button>
        {props.vertical}, {props.horizontal}
      </button>
  )
}