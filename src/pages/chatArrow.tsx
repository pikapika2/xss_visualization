import React, { useState, useContext } from 'react'
import Xarrow from 'react-xarrows'
import { ChatAddText, Show1, Show2, Show3 } from './index.tsx'

let count = 0

const ChatArrow: React.FC<Props> = ({ text }) => {
  const { addText, setAddText } = useContext(ChatAddText)
  const { show1, setShow1 } = useContext(Show1)
  const { show2, setShow2 } = useContext(Show2)
  const { show3, setShow3 } = useContext(Show3)
  function chatSiteArrow() {
    if (count === 0) {
      setShow1(!show1)
      count++
    } else if (count === 1) {
      setAddText(text)
      setShow1(!show1)
      setShow2(!show2)
      count++
    } else if (count === 2) {
      setShow2(!show2)
      setShow3(!show3)
      count++
    } else if (count === 3) {
      setShow3(!show3)
      count = 0
    }
  }

  return (
    <React.Fragment>
      <button
        onClick={(event) => {
          chatSiteArrow()
        }}
      >
        次の動作
      </button>
    </React.Fragment>
  )
}

export default ChatArrow
