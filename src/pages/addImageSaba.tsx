import React, { useState } from 'react'
import Image from 'next/image'
import Xarrow from 'react-xarrows'
import fakeSabaImage from '../image/mainsaba.png'

type Props = {
  imageText: string
  onChange: (event: any) => void
}

const AddImageSaba: React.FC<Props> = ({ imageText }) => {
  if (imageText === undefined || imageText.length === 0) {
    return null
  }

  return (
    <React.Fragment>
      <Image src={fakeSabaImage} />
      <p> {imageText} </p>
    </React.Fragment>
  )
}

export default AddImageSaba
