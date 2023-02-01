import React,{useState} from 'react';
import '../App.css'

const Input1 = () => {
  const[isActive, setIsActive] = useState(0)
  const toggleClick = () => {
    setIsActive(!isActive)
  }
  return(
    <div className='App'>
      <div className='input1'>
      <input type={isActive ? 'text': 'password'}/>
      <button onClick={toggleClick}>{isActive ? 'show' : 'hidden'}</button>
      </div>
      </div>
  )
}

export default Input1;
