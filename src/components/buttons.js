import React, { useState } from 'react';
import '../App.css'

const Buttons = () => {
  const [theActive, setTheActive] = useState(0)
  const birClick = () => {
    setTheActive(1)
  }
  const ekiClick = () => {
    setTheActive(2)
  }
  const uchClick = () => {
    setTheActive(3)
  }
  const turtClick = () => {
    setTheActive(4)
  }
  return (
    <div className='App'>
      <div className='btn'>
        <button style={{ backgroundColor: theActive === 1 ? 'blue' : 'red' }} onClick={birClick}>1</button>
        <button style={{ backgroundColor: theActive === 2 ? 'blue' : 'red' }} onClick={ekiClick}>2</button>
        <button style={{ backgroundColor: theActive === 3 ? 'blue' : 'red' }} onClick={uchClick}>3</button>
        <button style={{ backgroundColor: theActive === 4 ? 'blue' : 'red' }} onClick={turtClick}>4</button>
      </div>
    </div>
  )
}

export default Buttons;