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

import React, { useContext, useState, useEffect } from 'react'
import Xarrow from 'react-xarrows'
import Image from 'next/image'
import fakeSabaImage from '../image/mainsaba.png'
import { WebsiteShow, Show4, Show5, Show6 } from './index.tsx'

let count = 0

const AHref: React.FC<Props> = (code) => {
  console.log(code)
  //-- 独自フックを使うことで，複数回呼び出せるようにしたい
  const { show4, setShow4 } = useContext(Show4)
  const { show5, setShow5 } = useContext(Show5)
  const { show6, setShow6 } = useContext(Show6)
  const { imagineWebsiteShow, setImagineWebsiteShow } = useContext(WebsiteShow)

  function atagShow() {
    if (count === 0) {
      setImagineWebsiteShow(!imagineWebsiteShow)
      setShow5(!show5)
      setShow4(!show4)
      count++
    } else if (count === 1) {
      setShow4(!show4)
      setShow5(!show5)
      setShow6(!show6)
      setImagineWebsiteShow(!imagineWebsiteShow)
      count++
    } else if (count === 2) {
      setShow6(!show6)
      count = 0
    }
  }

  useEffect(() => {
    window.dispatchEvent(new Event('resize'))
  }, [show4])

  return (
    <React.Fragment>
      <span
        id="dangerousHTML"
        dangerouslySetInnerHTML={{
          __html: code,
        }}
      ></span>
      <br />
      <button onClick={() => atagShow()}>aタグによる攻撃</button>
    </React.Fragment>
  )
}

export default AHref
