import React, { useState } from 'react'
import Xarrow from 'react-xarrows'

function scriptCheck(code: string) {
  if (code.length >= 60) {
    return false
  }
  const scriptTag = /script/i
  const resultScriptTag = scriptTag.test(code)
  return resultScriptTag
}

export default scriptCheck
