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
