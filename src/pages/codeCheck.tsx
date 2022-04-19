import React, { useState } from 'react'

const CodeCheck: React.FC<Props> = ({ addText, onChange }) => {
  if (addText === 'undefined' || addText.length === 0) {
    return <div>not data</div>
  }
  return <div> {addText} </div>
}

export default CodeCheck
