import React, { useState, useContext } from 'react'
import AHref from './aHref'
import codeCheck from './codeCheck'
import { ChatMessage } from './index.tsx'

const OutputMessageUser: React.FC<Props> = ({ chatText, onChange }) => {
  return (
    <React.Fragment>
      {chatText.map((wordArray) => {
        if (wordArray.type === 'normal') {
          return <p> {wordArray.word} </p>
        } else if (wordArray.type === 'aHref') {
          return AHref(wordArray.word)
        } else {
          return <p> 危険なやつ </p>
        }
      })}
    </React.Fragment>
  )
}

export default OutputMessageUser
