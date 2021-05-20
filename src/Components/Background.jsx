import React from 'react'

const styles = {
  wrapper: {
    width: '100vw',
    minHeight: "100vh",
    backgroundColor: "#212121",
  }
}

export default function Background({children}) {
  return (
    <div style={styles.wrapper}>
      {children}
    </div>
  )
}