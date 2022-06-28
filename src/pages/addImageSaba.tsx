import React, { useState } from 'react'
import Image from 'next/image'
import fakeSabaImage from '../image/mainsaba.png'

const AddImageSaba: React.FC<Props> = ({ imageText, onChange }) => {
  if (imageText === undefined || imageText.length === 0) {
    return
  }

  return (
    <React.Fragment>
      <Image id="fake_saba" src={fakeSabaImage} />
      <p> {imageText} </p>
    </React.Fragment>
  )
}

export default AddImageSaba
