import React, {useState} from 'react'
import ShipSection from "./ShipSection"

// const styles = {
//   boxSizing: "border-box",
//   width: '50px',
//   height: '50px',
//   border: '4px solid #464646',
//   backgroundColor: 'grey',
// }

// move onDragStart into this component
// make 

export default function Ship({ship}) {
  const [clickedSection, setClickedSection] = useState(-1);
  const handleDragStart = (ev, id) => {
    // every draggable element has a dataTransfer object which has the setData method to store our properties/parameters
    // When a drop event happens we can use the getData method (in this case the id) to identify and change state based on the items id.

    ev.dataTransfer.setData("id", id);
    ev.dataTransfer.setData("shipSection", clickedSection);
  }

  const handleMouseDown = (index) => {
    if(clickedSection !== index) setClickedSection(index);
  }

  const shipParts = [];
  for (let i = 0; i < ship.length; i++){
    shipParts.push(
      <ShipSection 
        key={i} 
        draggable 
        handleMouseDown={() => handleMouseDown(i)}
        isHorizontal={ship.orientation === 'horizontal'} 
      />
    );
  }

  return (
    <div
      draggable
      onDragStart = {(e) => handleDragStart(e, ship.name)}
    >
      {shipParts}
    </div>
  )
}
  // Within handleDragStart
    // if we could set the id of the ship being dragged,
    // and add the index of the ship section clicked, we could
    // fix the drag and drop placement bug
  
  // could add onClick for each ship section to update the state
  // of the ship section clicked.  