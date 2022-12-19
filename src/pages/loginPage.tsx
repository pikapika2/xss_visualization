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

import React, { useState, useContext, useEffect } from 'react'
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows'
import { ContextLoginCracker } from './index'
import { UserId, Escape } from './index'
import { Show7, Show8, Show9, Show10 } from './index'
import injectionCheck from './injectionCheck'
import userInjectionCheck from './userInjectionCheck'
import DisplayUrl from './displayUrl'
import strEscape from './strEscape'

let count = 0

type Props = {
  userData: {
    id: number
    username: string
    password: string
  }[]
}

let flagInjection: boolean = false

const LoginPage: React.FC<Props> = ({ userData }) => {
  const { loginCracker, setLoginCracker } = useContext(ContextLoginCracker)
  const { loginUserId, setLoginUserId } = useContext(UserId)
  const { escapeAble, setEscapeAble } = useContext(Escape)
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { show7, setShow7 } = useContext(Show7)
  const { show8, setShow8 } = useContext(Show8)
  const { show9, setShow9 } = useContext(Show9)
  const { show10, setShow10 } = useContext(Show10)
  const [sqlAble, setSqlAble] = useState(false)

  const max: number = 20
  let flag: boolean = false

  function setUserAble(user: string) {
    if (escapeAble === true) {
      setUser(strEscape(user))
    } else {
      setUser(user)
    }
  }

  function setPassAble(pass: string) {
    if (escapeAble === true) {
      setPassword(strEscape(pass))
    } else {
      setPassword(pass)
    }
  }

  function checkData() {
    if (count === 0) {
      setShow7(true)
    } else if (count === 1) {
      setShow7(false)
      setShow8(true)
      if (
        userInjectionCheck(user) === true ||
        injectionCheck(password) === true
      ) {
        for (let i in userData) {
          if (userData[i].username === user.split("'")[0]) {
            setLoginUserId(userData[i].id)
            flag = true
            flagInjection = true
          }
        }
        setUser(user.split("'")[0])
      }
      for (let i in userData) {
        if (userData[i].id === 0) {
          continue
        }
        if (
          userData[i].username === user &&
          userData[i].password === password
        ) {
          setLoginUserId(userData[i].id)
          flag = true
        }
      }
      if (flag === false) {
        count = 9
      }
    } else if (count === 2) {
      setShow8(false)
      if (flagInjection === true) {
        setShow10(true)
      } else {
        setShow9(true)
      }
    } else if (count === 3) {
      setShow9(false)
      setShow10(false)
      setLoginCracker(user)
      setLoginUserId(-1)
      flagInjection = false
      count = -1
    } else if (count === 10) {
      alert('ログイン失敗')
      setShow7(false)
      setShow8(false)
      setShow9(false)
      setLoginUserId(-1)
      count = -1
    } else {
      setShow7(false)
      setShow8(false)
      setShow9(false)
      setLoginUserId(-1)
      count = -1
    }
    count++
    flag = false
  }

  useEffect(() => {
    //ユーザとパスワードの入力ログ収集
    const PostData = async (message: string) => {
      await fetch('/api/logs', {
        method: 'POST',
        headers: {
          'Content-type': 'application.json',
        },
        body: JSON.stringify({ name: message }),
      })
    }
    PostData('user:' + user + ' pass:' + password)
  }, [loginUserId])

  return (
    <React.Fragment>
      <div id="login_page">
        <DisplayUrl username="" />
        <p className="site_name">ログインページ</p>
        <p>ユーザ</p>
        <input
          className="textbox"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUserAble(event.target.value)
          }
          placeholder={'上限' + max + '文字'}
          maxLength={max}
        />
        <p>パスワード</p>
        <input
          className="textbox"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassAble(event.target.value)
          }
          placeholder={'上限' + max + '文字'}
          maxLength={max}
        />
        <button
          onClick={() => {
            checkData()
          }}
        >
          ログイン
        </button>
      </div>
      <div>
        <br />
        <a
          type="button"
          onClick={() => {
            setSqlAble(!sqlAble)
          }}
        >
          ▼ログイン時のSQL文と実際に当てはめたSQL文▼
        </a>
      </div>
      {sqlAble ? (
        <div>
          <p>
            {
              "SELECT user,passwd FROM users WHERE user='$user' AND passwd='$passwd’"
            }
          </p>
          <p>
            {"SELECT user,passwd FROM users WHERE user='" +
              user +
              "' AND passwd='" +
              password +
              '’'}
          </p>
        </div>
      ) : null}
    </React.Fragment>
  )
}

export default LoginPage
