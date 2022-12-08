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

const DatabaseTableUser: React.FC<Props> = ({ userData }) => {
  //console.log(chatText)
  return (
    <React.Fragment>
      <table id="userdata_table" border="1">
        <thead>
          <tr>
            <th>ユーザ名</th>
            <th>パスワード</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => {
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
