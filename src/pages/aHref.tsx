import React, { useState } from 'react'

function AHref(code) {
  return (
    <home>
      <div>何かが起こるかもしれない</div>
      <div> {code} </div>
      <div
        dangerouslySetInnerHTML={{
          __html: code,
        }}
      ></div>
    </home>
  )
}

export default AHref
