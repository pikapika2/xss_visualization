import React, { useState } from 'react'
import CodeCheck from './codeCheck'

export default function Home() {
  const [text, setText] = useState('')
  const [addText, setAddText] = useState('')

  return (
    <home>
      <div className="bulletinBoard">
        <p>
          掲示板サイト１(この掲示板は対策0でinnerHTMLを使って出力していると想定)
        </p>
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          name="ここにスクリプト混入させたい"
          maxLength="100"
        />
        <button onClick={(event) => setAddText(text)}>これを仕掛ける</button>
        <p>ボタンクリック：{addText}</p>
      </div>
      <CodeCheck addText={addText} />
      <div>
        サイト２(一応悪意ある想定、踏むだけで終わる)(http://example1.com)
      </div>
    </home>
  )
}
