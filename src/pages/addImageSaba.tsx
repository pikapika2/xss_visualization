import React, { useState } from 'react'
import Image from 'next/image'
import Xarrow from 'react-xarrows'
import fakeSabaImage from '../image/mainsaba.png'

type Props = {
  imageText: any
  //onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AddImageSaba: React.FC<Props> = ({ imageText }) => {
  if (imageText === undefined || imageText.length === 0) {
    return <></>
  }

  return (
    <React.Fragment>
      <Image src={fakeSabaImage} />
      <p> {imageText} </p>
    </React.Fragment>
  )
}

export default AddImageSaba
