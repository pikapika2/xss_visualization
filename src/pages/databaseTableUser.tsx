import React, { useState, useContext } from 'react'

type Props = {
  userData: {
    id: number
    username: string
    password: string
  }[]
}

const DatabaseTableUser: React.FC<Props> = ({ userData }) => {
  //console.log(chatText)
  const border: number = 1
  return (
    <React.Fragment>
      <table id="userdata_table" border={border}>
        <thead>
          <tr>
            <th>ユーザ名</th>
            <th>パスワード</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.username}</td>
                <td>{item.password}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default DatabaseTableUser
