import React from 'react'
import Square from "./Square"

export default function Gameboard(props) {


  return (
    <div>
      <h1>hello</h1>
      <div>
        {props.grid.map((arr, i) => {
            return (
              <div key={i}>
                {arr.map((val, j) => {
                  return <Square key={j} horizontal={j} vertical={i} value={val}/>
                })}
              </div>
            )
          })}
      </div>
    </div>
  )
}
