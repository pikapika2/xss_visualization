import React, { useState } from 'react'
import Xarrow from 'react-xarrows'

function codeCheck(code: string) {
  console.log(code)
  if (code.length >= 60) {
    return false
  }
  const aTag = /<a href="https?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?">/
  const resultATag = aTag.test(code)
  return resultATag
}

export default codeCheck
