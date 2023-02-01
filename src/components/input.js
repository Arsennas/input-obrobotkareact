import React,{useState} from 'react';
import '../App.css'


const Input = () => {
    const[value,setValue] = useState('')
    const[text,setText] = useState('')
  const handlerChange = (event) => {
    setValue(event.target.value)
  }
  const handlerClick = () => {
    setText(value)
    setValue('')
  }
  return(
    <div className='App'>
      <div className='input'>
      <input onChange={handlerChange} value={value} type="text"/>
      <button onClick={handlerClick}>add</button>
      <h1>{text}</h1>
      </div>
    </div>
  )
}

export default Input;
