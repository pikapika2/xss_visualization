import React, { useState } from 'react'

export default function Home() {
  const [text, setText] = useState('')
  const [addText, setAddText] = useState('')
  const onClickAddText = () => {
    setAddText(text)
  }
  return (
    <home>
      <div>
        <p>サイト１</p>
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          name="ここにスクリプト混入させたい"
        />
        <button onClick={(event) => setAddText(text)}>追加</button>
        <p>ボタンクリック：{addText}</p>
      </div>
      <div>サイト２(一応悪意ある想定、踏むだけで終わる)</div>
    </home>
  )
}
