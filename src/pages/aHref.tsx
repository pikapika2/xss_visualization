import React, { useState } from 'react'
import Xarrow from 'react-xarrows'

const AHref: React.FC<Props> = (code) => {
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
      <Xarrow start="dangerousHTML" end="normal_human" />
    </React.Fragment>
  )
}

export default AHref
