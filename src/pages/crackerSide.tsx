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
