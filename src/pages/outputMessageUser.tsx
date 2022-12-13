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
    <div className="chat_scroll">
      {chatText?.map((wordArray) => {
        if (wordArray.type === 'escape') {
          return <p key={wordArray.id}>{wordArray.word}</p>
        } else if (wordArray.type === 'script') {
          return (
            <p key={wordArray.id}>
              {' '}
              {wordArray.word} (今回はシステム上の都合で無効化します)
            </p>
          )
        } else if (wordArray.type === 'normal') {
          return (
            <p
              key={wordArray.id}
              dangerouslySetInnerHTML={{
                __html: wordArray.word,
              }}
            ></p>
          )
        } else if (wordArray.type === 'aHref') {
          return AHref(wordArray.word)
        } else {
          return <p key={wordArray.id}> 危険なやつ </p>
        }
      })}
    </div>
  )
}

export default OutputMessageUser
