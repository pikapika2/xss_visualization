import React, { useContext, useState } from 'react'
import Xarrow from 'react-xarrows'
import Image from 'next/image'
import fakeSabaImage from '../image/mainsaba.png'
import { CorrectSaba } from './index.tsx'

let count = 0

const AHref: React.FC<Props> = (code) => {
  console.log(code)
  const { correctName, setCorrectName } = useContext(CorrectSaba)
  const siteUrl = code.split('"')
  setCorrectName(siteUrl[1] + 'サーバ')
  /*if (code === undefined) {
    return console.log('何も表示しない(後で考慮)')
  }*/

  const aTagStep: React.FC<Props> = () => {}

  return (
    <React.Fragment>
      <br />
      <span
        id="dangerousHTML"
        dangerouslySetInnerHTML={{
          __html: code,
        }}
      ></span>
      <br />
      <button>aタグによる攻撃</button>
    </React.Fragment>
  )
}

export default AHref
