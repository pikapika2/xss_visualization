import React, { useState } from 'react'
import AHref from './aHref'
import codeCheck from './codeCheck'

const OutputMessageUser: React.FC<Props> = ({ addText, onChange }) => {
  if (addText === undefined || addText.length === 0) {
    return (
      <p className="default_text" id="dangerousHTML">
        (ここに入力結果が表示されます)
      </p>
    )
  }
  const resultATag = codeCheck(addText)
  //console.log(resultATag)
  if (resultATag === true) {
    return AHref(addText)
  }

  return (
    <React.Fragment>
      <p>特に何も起こらない…</p>
      <p id="dangerousHTML"> {addText} </p>
    </React.Fragment>
  )
}

export default OutputMessageUser
