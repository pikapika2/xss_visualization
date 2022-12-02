import React, { useState, useContext } from 'react'
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows'
import { ContextLoginCracker } from './index'
import DisplayUrl from './displayUrl'

let count = 0

type Props = {
  userData: {
    id: number
    username: string
    password: string
  }[]
}

const LoginPage: React.FC<Props> = ({ userData }) => {
  const { loginCracker, setLoginCracker } = useContext(ContextLoginCracker)
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const max: number = 20
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
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUser(event.target.value)
          }
          maxLength={max}
        />
        <p>パスワード</p>
        <input
          className="textbox"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
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
    </React.Fragment>
  )
}

export default LoginPage
