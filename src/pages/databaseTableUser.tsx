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
import { UserId } from './index'

type Props = {
  userData: {
    id: number
    username: string
    password: string
  }[]
}

const DatabaseTableUser: React.FC<Props> = ({ userData }) => {
  //console.log(chatText)
  const { loginUserId, setLoginUserId } = useContext(UserId)
  return (
    <React.Fragment>
      <table className="table_design" id="userdata_table">
        <thead>
          <tr>
            <th className="table_design">ユーザ名</th>
            <th className="table_design">パスワード</th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((item) => {
            if (loginUserId === item.id) {
              return (
                <tr key={item.id}>
                  <td className="table_impact">{item.username}</td>
                  <td className="table_impact">{item.password}</td>
                </tr>
              )
            } else
              return (
                <tr key={item.id}>
                  <td className="table_design">{item.username}</td>
                  <td className="table_design">{item.password}</td>
                </tr>
              )
          })}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default DatabaseTableUser
