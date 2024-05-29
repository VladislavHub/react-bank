import "./index.scss"
import "../../style/page.scss"

import StatusBarDark from "../../component/status-bar-dark";
import ButtonBack from "../../component/button-back";
import Button from "../../component/button-main";
import Indicator from "../../component/indicator";
import Title from "../../component/title";
import Field from "../../component/field";
import FieldPassword from "../../component/field-password"
import Link from "../../component/link" 
import Page from "../../component/page";

import { useState, ChangeEvent } from "react";


const Component = () => {
  const [inputEmailValue, setInputEmailValue] = useState('')
  const [inputPasswordValue, setInputPasswordValue] = useState('')

  const validateEmail = (name = '', value = '') => {
    return true
  }

  const validatePassword = (name = '', value = '') => {
    return true
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value)
    if(validateEmail(name, value)) {
      setInputEmailValue(value) 
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
    console.log('Введений email:', inputEmailValue);
    console.log('Введений пароль:', inputPasswordValue);
  }

  return (
    <Page>
      <StatusBarDark />
      <ButtonBack />
      <Title title={"Sign in"} subTitle={"Select login method"} className="title"/>
      <Field 
        onChange={handleEmailChange} 
        inputType="email"
        name="email" 
        placeholder="Введіть email" 
        label="Email"
      />
      <FieldPassword 
        onChange={handlePasswordChange} 
        name={"password"} 
        placeholder={"Введіть пароль"} 
        label={"Password"}
      />
      <Link text={"Forgot your password?"} link={"/recovery"} buttonText={"Restore"}/>
      <Button text="Continue" className="button_in" buttonType="submit" onClick={handleSubmit}/>
      <Indicator />
    </Page>
  )
};

export default Component;