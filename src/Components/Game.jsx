import React from 'react'
import Card from "./Card"
const styles = {
  wrapper: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: '95%',
    height: '80vh',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  gameBoards: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around'
    
  },
  dialogueWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: "center",
  },
  boardWrapper: {
    width: '500px',
    height: '500px',
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  },
  dialogue: {
    width: '600px',
    height: '150px',
    backgroundColor: 'red',
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  }
}

// can create CPU player here and send copy of gb to use as state for cpu gb.
// cpu gb should be randomly populated with ships
// we will hide ships in the ui later. rn just focus on making the board attackable


export default function Game({leftGB, rightGB}) {
  return (
    <div style={styles.wrapper}>
      <Card styles={styles.card}>
        <div style={styles.gameBoards}>
          <div style={styles.boardWrapper}>
            {leftGB}
          </div>
          <div style={styles.boardWrapper}>
            {rightGB}
          </div>
        </div>
        <div style={styles.dialogueWrapper}>
          <div style={styles.dialogue}>

          </div>
        </div>

      </Card>
    </div>
  )
}


// dialogue can be 'GameStatus' or something (work on it towards the end as it's somewhat auxillary)
  // left side can be text descriping game events and display whose turn it is
  // right side will be bullet point list of enemy ships (sank ones crossed out)