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

import React, { useState, useContext } from 'react'
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows'
import { ContextLoginCracker } from './index.tsx'
import DisplayUrl from './displayUrl.tsx'

let count = 0

const LoginPage: React.FC<Props> = ({ userData }) => {
  const { loginCracker, setLoginCracker } = useContext(ContextLoginCracker)
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  function checkData() {
    for (let i in userData) {
      if (userData[i].username === user && userData[i].password === password) {
        setLoginCracker(user)
      }
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
