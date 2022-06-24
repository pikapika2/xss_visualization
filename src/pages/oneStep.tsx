import React, { useState } from 'react'
import Xarrow from 'react-xarrows'

const OneStep: React.FC<Props> = () => {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)

  return (
    <React.Fragment>
      <button onClick={() => setShow1(!show1)}>どうなるか</button>
      <Xarrow start="normal_human" end="dangerousHTML" showXarrow={show1} />
      <Xarrow start="dangerousHTML" end="normal_human" showXarrow={show2} />
      <Xarrow start="dangerousWebsite" end="normal_human" showXarrow={show3} />
    </React.Fragment>
  )
}

export default OneStep
