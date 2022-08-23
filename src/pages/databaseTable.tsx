import React, { useState, useContext } from 'react'

const DatabaseTable: React.FC<Props> = ({ chatText, onChange }) => {
  console.log(chatText)
  return (
    <React.Fragment>
      <table border="1">
        <thead>
          <tr>
            <th>aaaa</th>
            <th>bbbn</th>
          </tr>
        </thead>
        <tbody>
          {chatText.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.word}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default DatabaseTable
