import React, { useState } from 'react'
import Xarrow from 'react-xarrows'

const AHref: React.FC<Props> = (code) => {
  console.log(code)
  if (code === undefined) {
    return console.log('何も表示しない(後で考慮)')
  }
  return (
    <React.Fragment>
      <div>何かが起こるかもしれない</div>
      <div> {code} </div>
      <span
        id="dangerousHTML"
        dangerouslySetInnerHTML={{
          __html: code,
        }}
      ></span>
      <br />
      <button>aタグによる攻撃</button>
      <Xarrow start="dangerousHTML" end="normal_human" />
    </React.Fragment>
  )
}

export default AHref
