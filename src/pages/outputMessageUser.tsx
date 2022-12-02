import React, { useState, useContext } from 'react'
import AHref from './aHref'
import codeCheck from './codeCheck'
//import { ChatMessage } from './index'

type Props = {
  chatText: {
    id: number
    type: string
    word: string
    user: string
  }[]
}

const OutputMessageUser: React.FC<Props> = ({ chatText }) => {
  return (
    <React.Fragment>
      {chatText?.map((wordArray) => {
        if (wordArray.type === 'normal') {
          return <p key={wordArray.id}> {wordArray.word} </p>
        } else if (wordArray.type === 'aHref') {
          return AHref(wordArray.word)
        } else {
          return <p key={wordArray.id}> 危険なやつ </p>
        }
      })}
    </React.Fragment>
  )
}

export default OutputMessageUser
