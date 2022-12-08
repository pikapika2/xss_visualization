/*
Copyright 2022 Yoshihito GOTO

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { useState } from 'react'

type Props = {
  chatText: {
    id: number
    type: string
    word: string
    user?: string
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
