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

import React, { useState } from 'react'
import Xarrow from 'react-xarrows'

const injectionCheck: React.FC<Props> = (password) => {
  if (password.match(/^'[...]*/)) {
    const words = password.split(' ').join('').split("'")
    if (words[1] === 'or' || words[1] === 'OR') {
      if (words[3] === '=') {
        if (words[2] === words[4]) {
          return true
        }
      }
      if (words[3] === '<') {
        if (words[2] < words[4]) {
          return true
        }
      }
      if (words[3] === '>') {
        if (words[2] > words[4]) {
          return true
        }
      }
      if (words[3] === '<>') {
        if (words[2] !== words[4]) {
          return true
        }
      }
      if (words[3] === '<=') {
        if (words[2] <= words[4]) {
          return true
        }
      }
      if (words[3] === '>=') {
        if (words[2] >= words[4]) {
          return true
        }
      }
    }
    console.log(words)
  }
  return false
}

export default injectionCheck
