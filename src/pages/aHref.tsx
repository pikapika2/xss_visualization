import React, { useContext, useState } from 'react'
import Xarrow from 'react-xarrows'
import Image from 'next/image'
import fakeSabaImage from '../image/mainsaba.png'
import { WebsiteShow } from './index.tsx'

let count = 0

const AHref: React.FC<Props> = (code) => {
  console.log(code)
  const [show1, setShow1] = useState<boolean>(false)
  const [show2, setShow2] = useState<boolean>(false)
  const [show3, setShow3] = useState<boolean>(false)
  const { imagineWebsiteShow, setImagineWebsiteShow } = useContext(WebsiteShow)

  function atagShow() {
    if (count === 0) {
      setShow1(!show1)
      setImagineWebsiteShow(!imagineWebsiteShow)
      setShow2(!show2)
      count++
    } else if (count === 1) {
      setShow1(!show1)
      setImagineWebsiteShow(!imagineWebsiteShow)
      setShow2(!show2)
      setShow3(!show3)
      count++
    } else if (count === 2) {
      setShow3(!show3)
      count = 0
    }
  }

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
      <Xarrow start="dangerousHTML" end="fakeSaba" showXarrow={show1} />
      <Xarrow
        start="dangerousHTML"
        end="imagine_website"
        dashness={true}
        showXarrow={show2}
      />
      <Xarrow start="dangerousHTML" end="fakeSaba" showXarrow={show3} />
    </React.Fragment>
  )
}

export default AHref
