import React, { useState, useContext } from 'react'

const DatabaseTable: React.FC<Props> = ({ chatText }) => {
  console.log(chatText)
  return (
    <React.Fragment>
      <table id="chat_table" border="1">
        <thead>
          <tr>
            <th>メッセージ</th>
            <th>ユーザ</th>
          </tr>
        </thead>
        <tbody>
          {chatText.map((item) => {
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
