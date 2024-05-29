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

const Component = () => {
  const [inputCodeValue, setInputCodeValue] = useState('')

  const validateCode = (name = '', value = '') => {
    return true
  }

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value)
    if(validateCode(name, value)) {
      setInputCodeValue(value) 
    }
  }

  const handleSubmit = () => {
    console.log('Введений код:', inputCodeValue);
  }

  return (
    <Page>
      <StatusBarDark />
      <ButtonBack />
      <Title title={"Confirm account"} subTitle={"Write the code you received"} className="title"/>
      <Field 
        onChange={handleCodeChange} 
        inputType="text"
        name="code" 
        placeholder="Введіть код" 
        label="Code"
      />
      <Button text="Confirm" className="button_rec" buttonType="submit" onClick={handleSubmit}/>
      <Indicator />
    </Page>
  )
};

export default Component;