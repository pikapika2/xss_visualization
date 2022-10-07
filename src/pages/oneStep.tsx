import React, { useState } from 'react'
import Xarrow from 'react-xarrows'

let count = 0

const OneStep: React.FC<Props> = () => {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)

  function testShow() {
    if (count === 0) {
      setShow1(!show1)
      count++
    } else if (count === 1) {
      setShow1(!show1)
      setShow2(!show2)
      count++
    } else if (count === 2) {
      setShow2(!show2)
      setShow3(!show3)
      count++
    } else if (count === 3) {
      setShow3(!show3)
      count = 0
    }
  }

  return (
    <React.Fragment>
      <button onClick={() => setShow1(!show1)}>どうなるか</button>
      <button onClick={() => testShow()}>テスト</button>
      <Xarrow
        start="normal_human"
        end="userSide"
        labels="アクセスしてクリックする"
        showXarrow={show1}
      />
      <Xarrow
        start="dangerousHTML"
        end="normal_human"
        labels="クリック結果が返ってくる"
        showXarrow={show2}
      />
      <Xarrow
        start="normal_human"
        end="dangerousWebsite"
        labels="思ってたのと違うところに行く"
        showXarrow={show3}
      />
    </React.Fragment>
  )
}

export default OneStep
