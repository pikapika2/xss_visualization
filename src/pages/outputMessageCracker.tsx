import React, { useState } from 'react'

const OutputMessageCracker: React.FC<Props> = ({ chatText, onChange }) => {
  return (
    <React.Fragment>
      {chatText.map((wordArray) => {
        if (wordArray.type === 'normal') {
          return <p> {wordArray.word} </p>
        } else if (wordArray.type === 'aHref') {
          return (
            <React.Fragment>
              <br />
              <span
                id="dangerousHTML"
                dangerouslySetInnerHTML={{
                  __html: wordArray.word,
                }}
              ></span>
              <br />
            </React.Fragment>
          )
        } else {
          return <p> 危険なやつ </p>
        }
      })}
    </React.Fragment>
  )
}
export default OutputMessageCracker
