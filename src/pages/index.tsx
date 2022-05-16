import React, { useEffect, useState } from 'react'
import Xarrow from 'react-xarrows'
import CodeCheck from './codeCheck'
import Image from 'next/image'
import phishingImage from '../image/phishing.png'
import crackerImage from '../image/warumono.png'
import humanImage from '../image/computer_woman.png'

export default function Home() {
  //const [links, setLinks] = useState(initialLinks)
  const [text, setText] = useState('')
  const [addText, setAddText] = useState('')

  return (
    <React.Fragment>
      <div className="left_side">
        <div className="bulletin_board">
          <p className="site_name">
            掲示板サイト１(この掲示板は対策0でinnerHTMLを使って出力していると想定)
          </p>
          <CodeCheck addText={addText} />
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            name="ここにスクリプト混入させたい"
            maxLength="100"
          />
          <button onClick={(event) => setAddText(text)}>これを仕掛ける</button>
        </div>
        <p>入力された文字列：{addText}</p>
        <p className="site_name">
          サイト２(一応悪意ある想定、踏むだけで終わる)(http://example1.com)
          <br />
        </p>
        <br />
        <Image className="site_img" src={phishingImage} />
      </div>
      <div className="right_side">
        <Image id="black_human" src={crackerImage} />
        <Image id="normal_human" src={humanImage} />
      </div>
      <Xarrow start="black_human" end="normal_human" />
    </React.Fragment>
  )
}
