import React, { createContext, useState, useEffect } from 'react'
import Xarrow from 'react-xarrows'
import OutputMessageUser from './outputMessageUser'
import OutputMessageCracker from './outputMessageCracker'
import AHref from './aHref'
import codeCheck from './codeCheck'
import OneStep from './oneStep'
import ChatArrow from './chatArrow'
import AddImageSaba from './addImageSaba'
import DatabaseTable from './databaseTable'
import Image from 'next/image'
import phishingImage from '../image/phishing.png'
import crackerImage from '../image/warumono.png'
import humanImage from '../image/computer_woman.png'
import sabaImage from '../image/mainsaba.png'
import imagineWebsiteImage from '../image/imagine_website.png'

export const WebsiteShow = createContext()
export const Show1 = createContext()
export const Show2 = createContext()
export const Show3 = createContext()
let aTagFlag = Boolean(false)
let id = 2

export default function Home(): Promise<void> {
  const [text, setText] = useState<string>('')
  const [addText, setAddText] = useState<string>('')
  const [chatText, setChatText] = useState([
    { id: 1, type: 'normal', word: 'おはよう' },
  ])
  const [correctName, setCorrectName] = useState<string>('')
  const [imagineWebsiteShow, setImagineWebsiteShow] = useState<boolean>(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const websiteShow = {
    imagineWebsiteShow,
    setImagineWebsiteShow,
  }
  const arrowShow1 = {
    show1,
    setShow1,
  }
  const arrowShow2 = {
    show2,
    setShow2,
  }
  const arrowShow3 = {
    show3,
    setShow3,
  }

  useEffect(() => {
    if (addText === '') {
      return
    }
    const resultATag = codeCheck(addText)
    if (resultATag === true) {
      if (aTagFlag === false) {
        aTagFlag = true
      } else {
        alert('同じ攻撃方法は使えない仕様です')
        return
      }
      const siteUrl = addText.split('"')
      setCorrectName(siteUrl[1] + 'サーバ')
      setChatText([
        ...chatText,
        {
          id: id,
          type: `aHref`,
          word: addText,
        },
      ])
    } else {
      setChatText([
        ...chatText,
        {
          id: id,
          type: `normal`,
          word: addText,
        },
      ])
    }
    console.log(chatText)
    id++
  }, [addText])

  const addOneLine = () => {
    setAddText(text)
  }

  return (
    <React.Fragment>
      <div className="left_side">
        <div className="bulletin_board" id="userSide">
          <p className="site_name">掲示板サイト１(ユーザ側)</p>
          <WebsiteShow.Provider value={websiteShow}>
            <OutputMessageUser chatText={chatText} />
          </WebsiteShow.Provider>
        </div>
        <div className="saba">
          <Image className="site_img" id="mainSaba" src={sabaImage} />
          <p>提供サーバ</p>
        </div>
        <div className="bulletin_board" id="crackerSide">
          <p className="site_name">サイト(クラッカー側)</p>
          <OutputMessageCracker chatText={chatText} />
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            className="textbox"
            maxLength="100"
          />
          <button
            onClick={(event) => {
              addOneLine()
            }}
          >
            これを仕掛ける
          </button>
          <Show1.Provider value={arrowShow1}>
            <Show2.Provider value={arrowShow2}>
              <Show3.Provider value={arrowShow3}>
                <ChatArrow />
              </Show3.Provider>
            </Show2.Provider>
          </Show1.Provider>
          <OneStep />
          <br />
        </div>
      </div>
      <div className="right_side">
        <p className="code_plaintext">入力された文字列：{addText}</p>
        <Image id="black_human" src={crackerImage} />
        <Image id="normal_human" src={humanImage} />
        <span id="imagine_website">
          {imagineWebsiteShow ? <Image src={imagineWebsiteImage} /> : null}
        </span>
        <DatabaseTable chatText={chatText} />
        <AddImageSaba imageText={correctName} />
      </div>
      <Xarrow start="crackerSide" end="chatTable" />
      <Xarrow start="crackerSide" end="mainSaba" showXarrow={show1} />
      <Xarrow start="mainSaba" end="chatTable" showXarrow={show2} />
      <Xarrow start="mainSaba" end="userSide" showXarrow={show3} />
      <Xarrow start="mainSaba" end="crackerSide" showXarrow={show3} />
    </React.Fragment>
  )
}
