import React, { useState } from 'react'

type Props = {
  chatText: {
    id: number
    type: string
    word: string
    user: string
  }[]
}

const OutputMessageCracker: React.FC<Props> = ({ chatText }) => {
  return (
    <div className="chat_scroll">
      {chatText?.map((wordArray) => {
        if (wordArray.type === 'normal') {
          return <p key={wordArray.id}> {wordArray.word} </p>
        } else if (wordArray.type === 'aHref') {
          return (
            <React.Fragment key={wordArray.id}>
              <br />
              <span
                key={wordArray.id}
                id="dangerousHTML"
                dangerouslySetInnerHTML={{
                  __html: wordArray.word,
                }}
              ></span>
              <br />
            </React.Fragment>
          )
        } else {
          return <p key={wordArray.id}> 危険なやつ </p>
        }
      })}
    </div>
  )
}
export default OutputMessageCracker
