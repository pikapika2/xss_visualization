/*
Copyright 2022 Yoshihito GOTO

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

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
      <Image src={fakeSabaImage} alt="" />
      <p> {imageText} </p>
    </React.Fragment>
  )
}

export default AddImageSaba
