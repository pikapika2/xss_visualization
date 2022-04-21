import React, { useState } from 'react'

const CodeCheck: React.FC<Props> = ({ addText, onChange }) => {
  if (addText === 'undefined' || addText.length === 0) {
    return <div>not data</div>
  }
  const aTag = /<a /
  const result = aTag.test(addText)
  console.log(result)
  if (result === true) {
    return (
      <home>
        <div>何かが起こるかもしれない</div>
        <div> {addText} </div>
      </home>
    )
  }

  return (
    <home>
      <div>特に何も起こらない…</div>
      <div> {addText} </div>
    </home>
  )
}

export default CodeCheck
