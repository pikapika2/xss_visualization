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
      <Image src={fakeSabaImage} />
      <p> {imageText} </p>
    </React.Fragment>
  )
}

export default AddImageSaba
