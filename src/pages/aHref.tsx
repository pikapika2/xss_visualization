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
      setShow4(!show4)
      setImagineWebsiteShow(!imagineWebsiteShow)
      setShow5(!show5)
      count++
    } else if (count === 1) {
      setShow4(!show4)
      setImagineWebsiteShow(!imagineWebsiteShow)
      setShow5(!show5)
      setShow6(!show6)
      count++
    } else if (count === 2) {
      setShow6(!show6)
      count = 0
    }
  }

  useEffect(() => {
    const event = new CustomEvent('resize')
    console.log('www' + count)
    window.dispatchEvent(event)
  }, [show4, show5, show6])

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
      <Xarrow
        start="dangerousHTML"
        end="imagine_website"
        dashness={true}
        showXarrow={show5}
      />
      <Xarrow start="dangerousHTML" end="fake_saba" showXarrow={show6} />
      <Xarrow
        start="dangerousHTML"
        end="black_human"
        endAnchor="left"
        showXarrow={show4}
      />
    </React.Fragment>
  )
}

export default AHref
