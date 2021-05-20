import React from 'react'

  const styles = {
    backgroundColor: "#262626",
    borderRadius: "5px",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  }

export default function Card(props) {
  return (
    <div style={{...styles, ...props.styles}}>
      {props.children}
    </div>
  )
}
