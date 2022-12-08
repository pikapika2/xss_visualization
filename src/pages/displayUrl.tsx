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

import React, { useContext } from 'react'

let count = 0

type Props = {
  username: string
}

const DisplayUrl: React.FC<Props> = (username) => {
  console.log(username)
  if (username.username === '') {
    return (
      <React.Fragment>
        <input
          className="textbox"
          value="http://chat.example.com/login.php"
          defaultValue="http://chat.example.com/login.php"
        />
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <input
          className="textbox"
          value="http://chat.example.com/chat.php"
          defaultValue="http://chat.example.com/chat.php"
        />
      </React.Fragment>
    )
  }
}

export default DisplayUrl
