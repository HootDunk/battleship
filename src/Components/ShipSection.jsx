import React from 'react'

const styles = {
  boxSizing: "border-box",
  width: '50px',
  height: '50px',
  border: '4px solid #464646',
  backgroundColor: 'grey',

}

export default function ShipSection({draggable, handleMouseDown, isHorizontal}) {

  if(draggable){
    return <div 
              style={isHorizontal? {...styles, ...{display: "inline-block"}} : styles} 
              onMouseDown={handleMouseDown} 
            />
  }
  else{
    return (
      <div style={styles} />
    )
  }

}
