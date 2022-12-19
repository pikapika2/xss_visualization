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
import codeCheck from './codeCheck'
import ChatArrow from './chatArrow'
import DisplayUrl from './displayUrl'
import OutputMessageCracker from './outputMessageCracker'
import { ContextChatText, ContextLoginCracker } from './index'

const CrackerSide: React.FC = () => {
  const { chatText, setChatText } = useContext(ContextChatText)
  const { loginCracker, setLoginCracker } = useContext(ContextLoginCracker)
  const [text, setText] = useState<string>('')
  const max: number = 100
  return (
    <React.Fragment>
      <div>
        <DisplayUrl username="taro" />
        <p className="site_name">サイト(クラッカー側)</p>
        <OutputMessageCracker chatText={chatText} />
        <input
          value={text}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setText(event.target.value)
          }
          className="textbox"
          defaultValue="initial value"
          placeholder={'上限' + max + '文字'}
          maxLength={max}
        />
        <ChatArrow text={text} />
        <button
          onClick={(event) => {
            setLoginCracker(undefined)
          }}
        >
          ログアウト
        </button>
        <br />
      </div>
    </React.Fragment>
  )
}
export default CrackerSide
