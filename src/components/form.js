import React, { useState } from 'react';

const Form = () => {
  const [value, setValue] = useState('')
  const [text, setText] = useState('')
const handlerSumbit = (event) => {
  event.preventDefault()
  setText(value)
  setValue('')
}
return (
  <form onSubmit={handlerSumbit}>
    <input value={value} onChange={(event) => setValue(event.target.value)} type="text" />
    <button type='submit'>add</button>
    <h1>{text}</h1>
  </form>
)
}

export default Form;
