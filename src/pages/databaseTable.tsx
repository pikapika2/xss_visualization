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
  return (
    <React.Fragment>
      <table id="chat_table" className="table_design">
        <thead>
          <tr>
            <th className="table_design">メッセージ</th>
            <th className="table_design">ユーザ</th>
          </tr>
        </thead>
        <tbody>
          {chatText?.map((item) => {
            return (
              <tr key={item.id}>
                <td className="table_design">{item.word}</td>
                <td className="table_design">{item.user}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default DatabaseTable
