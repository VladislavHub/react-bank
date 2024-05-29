import "./index.scss"
import "../../style/page.scss"


import StatusBarDark from "../../component/status-bar-dark";
import ButtonBack from "../../component/button-back";
import Button from "../../component/button-main";
import Indicator from "../../component/indicator";
import Title from "../../component/title";
import Field from "../../component/field";
import FieldPassword from "../../component/field-password"
import Page from "../../component/page";

import { useState, ChangeEvent } from "react";

const Component = () => {
  const [inputCodeValue, setInputCodeValue] = useState('')
  const [inputPasswordValue, setInputPasswordValue] = useState('')

  const validateCode = (name = '', value = '') => {
    return true
  }

  const validatePassword = (name = '', value = '') => {
    return true
  }

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value)
    if(validateCode(name, value)) {
      setInputCodeValue(value) 
    }
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value)
    if(validatePassword(name, value)) {
      setInputPasswordValue(value) 
    }
  }

  const handleSubmit = () => {
    console.log('Введений код:', inputCodeValue);
    console.log('Введений пароль:', inputPasswordValue);
  }


  return (
    <Page>
      <StatusBarDark />
      <ButtonBack />
      <Title title={"Recover password"} subTitle={"Choose a recovery method"} className="title"/>
      <Field 
        onChange={handleCodeChange} 
        inputType="text"
        name="code" 
        placeholder="Введіть код" 
        label="Code"
      />
      <FieldPassword 
        onChange={handlePasswordChange} 
        name={"password"} 
        placeholder={"Введіть новий пароль"} 
        label={"New password"}
      />
      <Button text="Restore password" className="button_rec-confirm" buttonType="submit" onClick={handleSubmit}/>
      <Indicator />
    </Page>
  )
};

export default Component;