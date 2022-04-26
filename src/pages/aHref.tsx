import React, { useState } from 'react'

function AHref(code) {
  return (
    <React.Fragment>
      <div>何かが起こるかもしれない</div>
      <div> {code} </div>
      <div
        dangerouslySetInnerHTML={{
          __html: code,
        }}
      ></div>
    </React.Fragment>
  )
}

export default AHref
