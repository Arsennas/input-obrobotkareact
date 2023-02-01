import './App.css';
import React, { useState } from 'react'
import Input from './components/input';
import Buttons from './components/buttons';
import Form from './components/form';
import Input1 from './components/input1';
const App = () => {
  return (
    <div>
      <h1>form</h1>
      <Form/>
      <h1>input</h1>
      <Input/>
    </div>
  )
}


export default App;
