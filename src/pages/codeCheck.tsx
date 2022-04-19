import React, { useState } from 'react'

const CodeCheck: React.FC<Props> = ({ addText, onChange }) => {
  if (addText === 'undefined' || addText.length === 0) {
    return <div>not data</div>
  }
  const testArr = /abc/
  const result = testArr.test(addText)
  console.log(result)
  if (result === true) {
    return (
      <home>
        <div>aaa</div>
        <div> {addText} </div>
      </home>
    )
  }

  return (
    <home>
      <div> {addText} </div>
    </home>
  )
}

export default CodeCheck
