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

function codeCheck(code: string, tagCheck: string) {
  console.log(code)
  if (code.length >= 60) {
    return false
  }
  if (tagCheck === 'atag') {
    const aTag = /<a href="https?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?">/
    const resultATag = aTag.test(code)
    return resultATag
  }
  if (tagCheck === 'script') {
    const scriptTag = /script/i
    const resultScriptTag = scriptTag.test(code)
    return resultScriptTag
  }

  return false
}

export default codeCheck
