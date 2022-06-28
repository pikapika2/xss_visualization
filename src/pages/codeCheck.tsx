import React, { useState } from 'react'
import Xarrow from 'react-xarrows'

const codeCheck: React.FC<Props> = (code) => {
  console.log(code)
  const aTag = /<a href="https?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?">/
  const resultATag = aTag.test(code)
  return resultATag
}

export default codeCheck
