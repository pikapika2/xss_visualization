import React, { useState, useContext } from 'react'

type Props = {
  chatText: {
    id: number
    type: string
    word: string
    user: string
  }[]
}

const DatabaseTable: React.FC<Props> = ({ chatText }) => {
  console.log(chatText)
  const border: number = 1
  return (
    <React.Fragment>
      <table id="chat_table" border={border}>
        <thead>
          <tr>
            <th>メッセージ</th>
            <th>ユーザ</th>
          </tr>
        </thead>
        <tbody>
          {chatText?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.word}</td>
                <td>{item.user}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default DatabaseTable
