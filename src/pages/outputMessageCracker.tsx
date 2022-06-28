import React, { useState } from 'react'
import AHref from './aHref'
import codeCheck from './codeCheck'

const OutputMessageCracker: React.FC<Props> = ({ addText, onChange }) => {
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
    return (
      <React.Fragment>
        <br />
        <span
          id="dangerousHTML"
          dangerouslySetInnerHTML={{
            __html: addText,
          }}
        ></span>
        <br />
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <p>特に何も起こらない…</p>
      <p id="dangerousHTML"> {addText} </p>
    </React.Fragment>
  )
}

export default OutputMessageCracker
