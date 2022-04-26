import React, { useState } from 'react'
import AHref from './Ahref'

const CodeCheck: React.FC<Props> = ({ addText, onChange }) => {
  if (addText === 'undefined' || addText.length === 0) {
    return <div>not data</div>
  }
  const aTag = /<a href="https?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?">/
  const resultATag = aTag.test(addText)
  console.log(resultATag)
  if (resultATag === true) {
    return AHref(addText)
  }

  return (
    <React.Fragment>
      <p>特に何も起こらない…</p>
      <p> {addText} </p>
    </React.Fragment>
  )
}

export default CodeCheck
