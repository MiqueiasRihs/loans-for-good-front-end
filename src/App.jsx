import './App.scss';

import React, { useEffect, useState } from 'react';

import { Notification, notification } from './components/Notification/Notification';

import CustomForm from "./components/CustomForm/CustomForm"
import CustomInput from './components/CustomInput/CustomInput';
import CustomButton from './components/CustomButton/CustomButton';

import { request } from './api/api';

export default function App() {
  const [formData, setFormData] = useState({});
  const [inputList, setInputList] = useState([])
  const [error, setError] = useState('');

  useEffect(() => {
    request.getFieldsForm().then((data) => {
      if (data) {
        setInputList(data.fields)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleInputChange = (e, fieldName) => {
    const newValue = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: newValue,
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(formData).length === 0) {
      notification.error('Preencha todos os campos')

    } else {
      request.postAnalysisData(formData)
    }
  };

  return (
    <>
      <div className="App-container">
        <CustomForm>
          <CustomInput
            label="Nome:"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => handleInputChange(e, 'name')}
            name="name"
          />
          <CustomInput
            label="Documento:"
            type="text"
            placeholder="Digite seu CPF"
            onChange={(e) => handleInputChange(e, 'document')}
            name="document"
          />

          {inputList?.map((f) => {
            return (
              <CustomInput
                key={f.name}
                label={`${f.label}:`}
                type={f.type}
                placeholder={f.placeholder}
                onChange={(e) => handleInputChange(e, f.name)}
                name={f.name}
                options={f.options ? f.options : null}
              />
            )
          })}
          <CustomButton onClick={handleSubmit}>Pedir análise</CustomButton>
        </CustomForm>
      </div>
      <Notification />
    </>
  );
}
