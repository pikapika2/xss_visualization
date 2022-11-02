import React, { useState, useContext } from 'react'
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows'
import {
  ContextLoginCracker,
  Show1,
  Show7,
  Show8,
  Show9,
  Show10,
} from './index.tsx'
import DisplayUrl from './displayUrl.tsx'
import injectionCheck from './injectionCheck.tsx'
import userInjectionCheck from './userInjectionCheck.tsx'

let count = 0
let loginUser = ''

const LoginPage: React.FC<Props> = ({ userData }) => {
  const { loginCracker, setLoginCracker } = useContext(ContextLoginCracker)
  const { show1, setShow1 } = useContext(Show1)
  const { show7, setShow7 } = useContext(Show7)
  const { show8, setShow8 } = useContext(Show8)
  const { show9, setShow9 } = useContext(Show9)
  const { show10, setShow10 } = useContext(Show10)
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function checkData() {
    if (count === 0) {
      setShow1(!show1)
      count++
    } else if (count === 1) {
      setShow1(!show1)
      setShow7(!show7)
      count++
    } else if (count === 2) {
      setShow7(!show7)
      count++
      if (user.match("'")) {
        if (userInjectionCheck(user)) {
          loginUser = user.split(' ').join('').split("'").shift()
          setShow9(!show9)
          return
        }
      }
      for (let i in userData) {
        if (userData[i].username === user) {
          if (password.match("'")) {
            if (injectionCheck(password)) {
              loginUser = user
              setShow9(!show9)
              return
            }
          }
          if (userData[i].password === password) {
            loginUser = user
            setShow8(!show8)
            return
          }
        }
      }
      count = 100
      setShow10(!show10)
    } else if (count === 3) {
      count = 0
      setLoginCracker(loginUser)
      setShow8(false)
      setShow9(false)
    } else if (count === 100) {
      count = 0
      setShow10(!show10)
    }
  }

  return (
    <React.Fragment>
      <div id="login_page">
        <DisplayUrl username="" />
        <p className="site_name">ログインページ</p>
        <p>ユーザ</p>
        <input
          className="textbox"
          onChange={() => setUser(event.target.value)}
          maxLength="20"
        />
        <p>パスワード</p>
        <input
          className="textbox"
          onChange={() => setPassword(event.target.value)}
          maxLength="20"
        />
        <button
          onClick={(event) => {
            checkData()
          }}
        >
          ログイン
        </button>
      </div>
    </React.Fragment>
  )
}

export default LoginPage
