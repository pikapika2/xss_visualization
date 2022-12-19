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
import { ContextLoginCracker } from './index'

type Props = {
  chatText: {
    id: number
    type: string
    word: string
    user: string
  }[]
}

const DatabaseTable: React.FC<Props> = ({ chatText }) => {
  const { loginCracker, setLoginCracker } = useContext(ContextLoginCracker)
  return (
    <React.Fragment>
      <table id="chat_table" className="table_design">
        <thead>
          <tr>
            <th className="table_design">メッセージ</th>
            <th className="table_design">ユーザ名</th>
          </tr>
        </thead>
        <tbody>
          {chatText?.map((item) => {
            if (loginCracker === 'admin') {
              return (
                <tr key={item.id}>
                  <td className="table_design">
                    <input type="text" defaultValue={item.word} />
                  </td>
                  <td className="table_design">
                    <input type="text" defaultValue={item.user} />
                  </td>
                </tr>
              )
            } else {
              return (
                <tr key={item.id}>
                  <td className="table_design">{item.word}</td>
                  <td className="table_design">{item.user}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default DatabaseTable
