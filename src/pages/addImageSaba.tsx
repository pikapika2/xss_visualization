import React, { useState } from 'react'
import Image from 'next/image'
import Xarrow from 'react-xarrows'
import fakeSabaImage from '../image/mainsaba.png'

const AddImageSaba: React.FC<Props> = ({ imageText, onChange }) => {
  if (imageText === undefined || imageText.length === 0) {
    return
  }

  return (
    <React.Fragment>
      <div>
        <Image id="fakeSaba" src={fakeSabaImage} />
        <p> {imageText} </p>
      </div>
      <Xarrow start="dangerousHTML" end="normal_human" />
      <Xarrow start="dangerousHTML" end="fakeSaba" />
    </React.Fragment>
  )
}

export default AddImageSaba
