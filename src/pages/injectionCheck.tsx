import React, { useState } from 'react'
import Xarrow from 'react-xarrows'

const injectionCheck: React.FC<Props> = (password) => {
  if (password.match(/^'[...]*/)) {
    const words = password.split(' ').join('').split("'")
    if (words[1] === 'or' || words[1] === 'OR') {
      console.log('333')
      if (words[3] === '=') {
        console.log('eee')
        if (words[2] === words[4]) {
          return true
        }
      }
    }
    console.log(words)
  }
  return false
}

export default injectionCheck
