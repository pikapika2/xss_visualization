import React, { createContext, useState, useEffect } from 'react'
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows'
import Draggable from 'react-draggable'
import OutputMessageUser from './outputMessageUser'
import OutputMessageCracker from './outputMessageCracker'
import AHref from './aHref'
import codeCheck from './codeCheck'
import CrackerSide from './crackerSide'
import AddImageSaba from './addImageSaba'
import LoginPage from './loginPage'
import DatabaseTable from './databaseTable'
import DatabaseTableUser from './databaseTableUser'
import DisplayUrl from './displayUrl.tsx'
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
export const Show4 = createContext()
export const Show5 = createContext()
export const Show6 = createContext()
export const ChatAddText = createContext()
export const ContextChatText = createContext()
export const ContextLoginCracker = createContext()
export const ContextUserData = createContext()

let aTagFlag = Boolean(false)
let id = 2

export default function Home(): Promise<void> {
  const updateXarrow = useXarrow()
  const [addText, setAddText] = useState<string>('')
  const [chatText, setChatText] = useState([
    { id: 1, type: 'normal', word: 'おはよう', user: 'taro' },
  ])
  const [userData, setUserData] = useState([
    { id: 1, username: 'taro', password: 'taro123' },
    { id: 2, username: 'jiro', password: 'jiro456' },
    { id: 3, username: 'saburo', password: 'saburo789' },
  ])
  const [correctName, setCorrectName] = useState<string>('')
  const [imagineWebsiteShow, setImagineWebsiteShow] = useState<boolean>(false)
  const [loginCracker, setLoginCracker] = useState(null)
  const [loginUser, setLoginUser] = useState('taro')
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  const [show6, setShow6] = useState(false)
  const websiteShow = {
    imagineWebsiteShow,
    setImagineWebsiteShow,
  }
  const chatAddText = {
    addText,
    setAddText,
  }
  const contextChatText = {
    chatText,
    setChatText,
  }
  const contextLoginCracker = {
    loginCracker,
    setLoginCracker,
  }
  const contextLoginUser = {
    loginUser,
    setLoginUser,
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
  const arrowShow4 = {
    show4,
    setShow4,
  }
  const arrowShow5 = {
    show5,
    setShow5,
  }
  const arrowShow6 = {
    show6,
    setShow6,
  }
  const contextUserData = {
    userData,
    setUserData,
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
          user: loginCracker,
        },
      ])
    } else {
      setChatText([
        ...chatText,
        {
          id: id,
          type: `normal`,
          word: addText,
          user: loginCracker,
        },
      ])
    }
    console.log(chatText)
    id++
  }, [addText])

  return (
    <React.Fragment>
      <Xwrapper>
        <div className="left_side">
          <div className="bulletin_board" id="user_side">
            <DisplayUrl username="taro" />
            <p className="site_name">掲示板サイト１(ユーザ側)</p>
            <WebsiteShow.Provider value={websiteShow}>
              <Show4.Provider value={arrowShow4}>
                <Show5.Provider value={arrowShow5}>
                  <Show6.Provider value={arrowShow6}>
                    <OutputMessageUser chatText={chatText} />
                  </Show6.Provider>
                </Show5.Provider>
              </Show4.Provider>
            </WebsiteShow.Provider>
          </div>
          <div className="saba">
            <Image className="site_img" id="main_saba" src={sabaImage} />
            <p>提供サーバ</p>
          </div>
          <div id="cracker_side" className="bulletin_board">
            <ContextLoginCracker.Provider value={contextLoginCracker}>
              {loginCracker ? (
                <ChatAddText.Provider value={chatAddText}>
                  <ContextChatText.Provider value={contextChatText}>
                    <Show1.Provider value={arrowShow1}>
                      <Show2.Provider value={arrowShow2}>
                        <Show3.Provider value={arrowShow3}>
                          <CrackerSide />
                        </Show3.Provider>
                      </Show2.Provider>
                    </Show1.Provider>
                  </ContextChatText.Provider>
                </ChatAddText.Provider>
              ) : (
                <LoginPage userData={userData} />
              )}
            </ContextLoginCracker.Provider>
          </div>
        </div>
        <div className="right_side">
          <p className="code_plaintext">入力された文字列：{addText}</p>
          <Image id="black_human" src={crackerImage} />
          <Image id="normal_human" src={humanImage} />
          <span id="imagine_website">
            {imagineWebsiteShow ? <Image src={imagineWebsiteImage} /> : null}
          </span>
          <div className="left_side">
            <DatabaseTable chatText={chatText} />
          </div>
          <DatabaseTableUser userData={userData} />
          <span id="fake_saba">
            <AddImageSaba imageText={correctName} />
          </span>
        </div>
        <Xarrow
          start="cracker_side"
          end="main_saba"
          labels="入力した文字を送信"
          showXarrow={show1}
        />
        <Xarrow
          start="main_saba"
          end="chat_table"
          labels={addText + 'をDBに反映'}
          showXarrow={show2}
        />
        <Xarrow
          start="main_saba"
          end="user_side"
          labals="両者に反映"
          showXarrow={show3}
        />
        <Xarrow
          start="main_saba"
          end="cracker_side"
          labals="両者に反映"
          showXarrow={show3}
        />
      </Xwrapper>
    </React.Fragment>
  )
}
