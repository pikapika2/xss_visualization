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

import React, { createContext, useState, useEffect, useRef } from 'react'
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows'
import Draggable from 'react-draggable'
import LeaderLine from 'leader-line-new'
import OutputMessageUser from './outputMessageUser'
import OutputMessageCracker from './outputMessageCracker'
import AHref from './aHref'
import codeCheck from './codeCheck'
import CrackerSide from './crackerSide'
import AddImageSaba from './addImageSaba'
import LoginPage from './loginPage'
import DatabaseTable from './databaseTable'
import DatabaseTableUser from './databaseTableUser'
import DisplayUrl from './displayUrl'
import Image from 'next/image'
import phishingImage from '../image/phishing.png'
import crackerImage from '../image/warumono.png'
import humanImage from '../image/computer_woman.png'
import sabaImage from '../image/mainsaba.png'
import imagineWebsiteImage from '../image/imagine_website.png'

type WebsiteShow = {
  imagineWebsiteShow: boolean
  setImagineWebsiteShow: React.Dispatch<React.SetStateAction<boolean>>
}

type UserId = {
  loginUserId: number
  setLoginUserId: React.Dispatch<React.SetStateAction<number>>
}
type Show1 = {
  show1: boolean
  setShow1: React.Dispatch<React.SetStateAction<boolean>>
}

type Show2 = {
  show2: boolean
  setShow2: React.Dispatch<React.SetStateAction<boolean>>
}

type Show3 = {
  show3: boolean
  setShow3: React.Dispatch<React.SetStateAction<boolean>>
}

type Show4 = {
  show4: boolean
  setShow4: React.Dispatch<React.SetStateAction<boolean>>
}

type Show5 = {
  show5: boolean
  setShow5: React.Dispatch<React.SetStateAction<boolean>>
}

type Show6 = {
  show6: boolean
  setShow6: React.Dispatch<React.SetStateAction<boolean>>
}

type Show7 = {
  show7: boolean
  setShow7: React.Dispatch<React.SetStateAction<boolean>>
}

type Show8 = {
  show8: boolean
  setShow8: React.Dispatch<React.SetStateAction<boolean>>
}

type Show9 = {
  show9: boolean
  setShow9: React.Dispatch<React.SetStateAction<boolean>>
}

type ChatAddText = {
  addText: string
  setAddText: React.Dispatch<React.SetStateAction<string>>
}

type ChatText = {
  id: number
  type: string
  word: string
  user: string
}

type ContextChatText = {
  chatText: ChatText[]
  setChatText: React.Dispatch<React.SetStateAction<ChatText[]>>
}

type ContextLoginCracker = {
  loginCracker: string | undefined
  setLoginCracker: React.Dispatch<React.SetStateAction<string | undefined>>
}

type UserData = {
  id: number
  username: string
  password: string
}

type ContextUserData = {
  userData: UserData[]
  setUserData: React.Dispatch<React.SetStateAction<UserData>>
}

export const WebsiteShow = createContext({} as WebsiteShow)
export const UserId = createContext({} as UserId)
export const Show1 = createContext({} as Show1)
export const Show2 = createContext({} as Show2)
export const Show3 = createContext({} as Show3)
export const Show4 = createContext({} as Show4)
export const Show5 = createContext({} as Show5)
export const Show6 = createContext({} as Show6)
export const Show7 = createContext({} as Show7)
export const Show8 = createContext({} as Show8)
export const Show9 = createContext({} as Show9)
export const ChatAddText = createContext({} as ChatAddText)
export const ContextChatText = createContext({} as ContextChatText)
export const ContextLoginCracker = createContext({} as ContextLoginCracker)
export const ContextUserData = createContext({} as ContextUserData)

let aTagFlag: boolean = false
let id: number = 2

export default function Home() {
  const updateXarrow = useXarrow()
  const [addText, setAddText] = useState<string>('')
  const [chatText, setChatText] = useState([
    { id: 1, type: 'normal', word: 'おはよう', user: 'taro' },
  ])
  const [userData, setUserData] = useState([
    { id: 0, username: 'admin', password: '??????' },
    { id: 1, username: 'taro', password: 'taro123' },
    { id: 2, username: 'jiro', password: 'jiro456' },
    { id: 3, username: 'saburo', password: 'saburo789' },
  ])
  const [correctName, setCorrectName] = useState<string>('')
  const [imagineWebsiteShow, setImagineWebsiteShow] = useState<boolean>(false)
  const [loginCracker, setLoginCracker] = useState<string | undefined>(
    undefined
  )
  const [loginUser, setLoginUser] = useState('taro')
  const [sqlAble, setSqlAble] = useState(false)
  const [loginUserId, setLoginUserId] = useState(-1)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  const [show6, setShow6] = useState(false)
  const [show7, setShow7] = useState(false)
  const [show8, setShow8] = useState(false)
  const [show9, setShow9] = useState(false)
  //後で配列化
  const line1: any = {
    start: 'silent',
    end: 'black_human',
    startAnchor: { position: 'right', offset: { x: 10 } },
    showXarrow: show4,
  }
  const line2: any = {
    start: 'silent',
    end: 'imagine_website',
    dashness: true,
    startAnchor: { position: 'bottom', offset: { x: 10 } },
    showXarrow: show5,
  }
  const line3: any = {
    start: 'silent',
    end: 'fake_saba',
    startAnchor: { position: 'bottom', offset: { x: 10 } },
    showXarrow: show6,
  }

  const websiteShow = {
    imagineWebsiteShow,
    setImagineWebsiteShow,
  }

  const contextLoginUserId = {
    loginUserId,
    setLoginUserId,
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
  const arrowShow7 = {
    show7,
    setShow7,
  }
  const arrowShow8 = {
    show8,
    setShow8,
  }
  const arrowShow9 = {
    show9,
    setShow9,
  }
  const contextUserData = {
    userData,
    setUserData,
  }

  useEffect(() => {
    const PostData = async (message: string) => {
      await fetch('/api/logs', {
        method: 'POST',
        headers: {
          'Content-type': 'application.json',
        },
        body: JSON.stringify({ name: message }),
      })
    }
    PostData('text:' + addText)
    if (addText === '') {
      return
    }
    const resultATag: boolean = codeCheck(addText, 'atag')
    if (resultATag === true) {
      if (aTagFlag === false) {
        aTagFlag = true
      } else {
        alert('同じ攻撃方法は使えない仕様です')
        return
      }
      const siteUrl: string[] = addText.split('"')
      setCorrectName(siteUrl[1] + 'サーバ')
      if (loginCracker !== undefined) {
        setChatText([
          ...chatText,
          {
            id: id,
            type: `aHref`,
            word: addText,
            user: loginCracker,
          },
        ])
      }
    } else if (codeCheck(addText, 'script') === true) {
      if (loginCracker !== undefined) {
        setChatText([
          ...chatText,
          {
            id: id,
            type: `script`,
            word: addText,
            user: loginCracker,
          },
        ])
      }
    } else {
      if (loginCracker !== undefined) {
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
          <span id="silent"></span>
          <div className="saba">
            <Image
              className="site_img"
              id="main_saba"
              src={sabaImage}
              alt=""
              objectFit="contain"
            />
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
                <UserId.Provider value={contextLoginUserId}>
                  <Show7.Provider value={arrowShow7}>
                    <Show8.Provider value={arrowShow8}>
                      <Show9.Provider value={arrowShow9}>
                        <LoginPage userData={userData} />
                      </Show9.Provider>
                    </Show8.Provider>
                  </Show7.Provider>
                </UserId.Provider>
              )}
            </ContextLoginCracker.Provider>
          </div>
        </div>
        <div className="right_side">
          <p className="code_plaintext">入力された文字列：{addText}</p>
          <Image
            id="black_human"
            src={crackerImage}
            alt=""
            objectFit="contain"
          />
          <Image
            id="normal_human"
            src={humanImage}
            alt=""
            objectFit="contain"
          />
          <span id="imagine_website">
            {imagineWebsiteShow ? (
              <Image
                id="imagine_image"
                src={imagineWebsiteImage}
                alt=""
                objectFit="contain"
              />
            ) : null}
          </span>
          <ContextLoginCracker.Provider value={contextLoginCracker}>
            <div className="left_side">
              <DatabaseTable chatText={chatText} />
            </div>
            <UserId.Provider value={contextLoginUserId}>
              <DatabaseTableUser userData={userData} />
            </UserId.Provider>
          </ContextLoginCracker.Provider>
          <span id="fake_saba">
            <AddImageSaba imageText={correctName} />
          </span>
          <br />
        </div>
        <Xarrow
          start="cracker_side"
          end="main_saba"
          labels="入力したユーザ，パスワードを送信"
          showXarrow={show7}
        />
        <Xarrow
          start="main_saba"
          end="userdata_table"
          labels="データをもとにDBを確認"
          showXarrow={show8}
        />
        <Xarrow
          start="main_saba"
          end="cracker_side"
          labels="ログイン成功"
          showXarrow={show9}
        />
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
          labels="両者に反映"
          showXarrow={show3}
        />
        <Xarrow
          start="main_saba"
          end="cracker_side"
          labels="両者に反映"
          showXarrow={show3}
        />
        <Xarrow {...line1} />
        <Xarrow {...line2} />
        <Xarrow {...line3} />
      </Xwrapper>
    </React.Fragment>
  )
}
