import "./index.scss"
import "../../style/page.scss"

import StatusBarDark from "../../component/status-bar-dark";
import ButtonBack from "../../component/button-back";
import Button from "../../component/button-main";
import Indicator from "../../component/indicator";
import Title from "../../component/title";
import Field from "../../component/field";
import Page from "../../component/page";

import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const Component = () => {
  const [inputEmailValue, setInputEmailValue] = useState('')

  const validateEmail = (name = '', value = '') => {
    return true
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value)
    if(validateEmail(name, value)) {
      setInputEmailValue(value) 
    }
  }

  const navigate = useNavigate()

  const handleSubmit = () => {
    console.log('Введений email:', inputEmailValue);
    navigate('/recovery-confirm')
  }


  return (
    <Page>
      <StatusBarDark />
      <ButtonBack />
      <Title title={"Recover password"} subTitle={"Choose a recovery method"} className="title"/>
      <Field 
        onChange={handleEmailChange} 
        inputType="email"
        name="email" 
        placeholder="Введіть email" 
        label="Email"
      />
      <Button text="Send code" className="button_rec" buttonType="submit" onClick={handleSubmit} />
      <Indicator />
    </Page>
  )
};

export default Component;