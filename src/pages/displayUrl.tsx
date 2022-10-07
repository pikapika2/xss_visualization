import React, { useContext } from 'react'

let count = 0

const DisplayUrl: React.FC<Props> = (username) => {
  console.log(username)
  if (username.username === '') {
    return (
      <React.Fragment>
        <input className="textbox" value="http://chat.example.com/login.php" />
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <input className="textbox" value="http://chat.example.com/chat.php" />
      </React.Fragment>
    )
  }
}

export default DisplayUrl
