import './App.scss';

import React, { useEffect, useState } from 'react';

import CustomForm from "./components/CustomForm/CustomForm"
import CustomInput from './CustomInput/CustomInput';

import request from './api/api'

export default function App() {
  const [text, setText] = useState('');
  const [inputList, setInputList] = useState([])

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    request('GET', 'http://localhost:8000/api/analise-de-cliente/').then((data) => {
      if(data) {
        setInputList(data.fields)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    // <div className='App-header'></div>
    <div className="App-container">
      <CustomForm>
        <CustomInput
          label="Nome:"
          type="text"
          placeholder="Digite seu nome"
          onChange={handleInputChange}
        />
        <CustomInput
          label="Documento:"
          type="text"
          placeholder="Digite seu CPF"
          onChange={handleInputChange}
        />

        {inputList.map((f) => {
          return (
            <CustomInput
              label={`${f.label}:`}
              type="text"
              placeholder={f.placeholder}
              onChange={handleInputChange}
            />
          )
        })}
        
      </CustomForm>
    </div>
  );
}
