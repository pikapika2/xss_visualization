import React, { useState } from 'react'
import Xarrow from 'react-xarrows'

let count = 0

const AHref: React.FC<Props> = (code) => {
  console.log(code)
  if (code === undefined) {
    return console.log('何も表示しない(後で考慮)')
  }

  const aTagStep: React.FC<Props> = () => {}

  return (
    <React.Fragment>
      <p>何かが起こるかもしれない</p>
      <p> {code} </p>
      <span
        id="dangerousHTML"
        dangerouslySetInnerHTML={{
          __html: code,
        }}
      ></span>
      <br />
      <button>aタグによる攻撃</button>
      <Xarrow start="dangerousHTML" end="normal_human" />
      <Xarrow start="normal_human" end="black_human" />
    </React.Fragment>
  )
}

export default AHref
