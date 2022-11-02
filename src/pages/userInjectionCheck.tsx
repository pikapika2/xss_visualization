import React, { useState } from 'react'
import Xarrow from 'react-xarrows'

const userInjectionCheck: React.FC<Props> = (user) => {
  const word = user.split(' ').join('').split("'").pop()
  if (word === '--' || word === '#') {
    return true
  }
  return false
}

export default userInjectionCheck
