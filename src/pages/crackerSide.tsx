import React, { useState, useContext } from 'react'
import codeCheck from './codeCheck'
import ChatArrow from './chatArrow'
import OneStep from './oneStep'
import DisplayUrl from './displayUrl.tsx'
import OutputMessageCracker from './outputMessageCracker'
import { ContextChatText, ContextLoginCracker } from './index.tsx'

const CrackerSide: React.FC<Props> = () => {
  const { chatText, setChatText } = useContext(ContextChatText)
  const { loginCracker, setLoginCracker } = useContext(ContextLoginCracker)
  const [text, setText] = useState<string>('')
  return (
    <React.Fragment>
      <div>
        <DisplayUrl username={loginCracker} />
        <p className="site_name">サイト(クラッカー側)</p>
        <OutputMessageCracker chatText={chatText} />
        <input
          value={text}
          onChange={() => setText(event.target.value)}
          className="textbox"
          maxLength="100"
        />
        <ChatArrow text={text} />
        <OneStep />
        <button
          onClick={(event) => {
            setLoginCracker(null)
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
