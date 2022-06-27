import React, { useEffect, useState } from 'react'
import Xarrow from 'react-xarrows'
import CodeCheck from './codeCheck'
import OneStep from './oneStep'
import Image from 'next/image'
import phishingImage from '../image/phishing.png'
import crackerImage from '../image/warumono.png'
import humanImage from '../image/computer_woman.png'
import sabaImage from '../image/mainsaba.png'

export default function Home(): Promise<void> {
  //const [links, setLinks] = useState(initialLinks)
  const [text, setText] = useState('')
  const [addText, setAddText] = useState('')

  //await sleep(1000)
  //console.log("qqq")

  return (
    <React.Fragment>
      <div className="left_side">
        <div className="bulletin_board" id="userSide">
          <p className="site_name">掲示板サイト１(ユーザ側)</p>
          <CodeCheck addText={addText} />
        </div>
        <p>入力された文字列：{addText}</p>
        <div className="saba">
          <Image className="site_img" id="mainSaba" src={sabaImage} />
          <p>提供サーバ</p>
        </div>
        <div className="bulletin_board" id="crackerSide">
          <p className="site_name">サイト(クラッカー側)</p>
          <CodeCheck addText={addText} />
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            name="ここにスクリプト混入させたい"
            maxLength="100"
          />
          <button onClick={(event) => setAddText(text)}>これを仕掛ける</button>
          <OneStep />
          <br />
        </div>
        <Image className="site_img" id="dangerousWebsite" src={phishingImage} />
      </div>
      <div className="right_side">
        <Image id="black_human" src={crackerImage} />
        <Image id="normal_human" src={humanImage} />
      </div>
      <Xarrow
        start="userSide"
        end="mainSaba"
        headSize={0.1}
        headShape="circle"
      />
      <Xarrow
        start="crackerSide"
        end="mainSaba"
        headSize={0.1}
        headShape="circle"
      />
    </React.Fragment>
  )
}
