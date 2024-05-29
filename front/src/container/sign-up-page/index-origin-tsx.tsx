import "./index.scss"
import "../../style/page.scss"

import StatusBarDark from "../../component/status-bar-dark";
import ButtonBack from "../../component/button-back";
import Button from "../../component/button-main";
import Indicator from "../../component/indicator";
import Title from "../../component/title";
import Field from "../../component/field";
import FieldPassword from "../../component/field-password"
import Link from "../../component/link";
import Page from "../../component/page";

import { Form } from "../../script/Form"
import { useState, ChangeEvent } from "react";

class SignupForm extends Form {
  FIELD_NAME = {
        EMAIL: 'email',
        PASSWORD: 'password',
        CODE: 'code',
    }

    FIELD_ERROR = {
        IS_EMPTY: 'Введіть значення в поле',
        IS_BIG: 'Значення не повинно перевищувати 20 символів',
        EMAIL: 'Некоректне значення e-mail адреси',
        PASSWORD: 'Пароль повинен складатися з не менше ніж 8 символів, включаючи хоча б одну цифру, малу та велику літеру',
    }

    static value = {}

    static validate = (name = '', value = '') => {
      return true
    }

    static submit = () => {
      console.log(this.value)
    }

    static change = (name = '', value = '') => {
      console.log(name, value)
      
    }
}

const Component = () => {
  // const [inputEmailValue, setInputEmailValue] = useState('')
  // const [inputPasswordValue, setInputPasswordValue] = useState('')

  // const validateEmail = (name = '', value = '') => {
  //   return true
  // }

  // const validatePassword = (name = '', value = '') => {
  //   return true
  // }

  // const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   console.log(name, value)
  //   if(validateEmail(value)) {
  //     setInputEmailValue(value) 
  //   }
  // }

  // const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   console.log(name, value)
  //   if(validatePassword(value)) {
  //     setInputPasswordValue(value) 
  //   }
  // }

  // const handleSubmit = () => {
  //   console.log('Введений email:', inputEmailValue);
  //   console.log('Введений пароль:', inputPasswordValue);
  // }

  // return (
  //   <Page>
  //     <StatusBarDark />
  //     <ButtonBack />
  //     <Title title={"Sign up"} subTitle={"Choose a registration method"} className="title"/>
  //     <Field 
  //       onChange={handleEmailChange} 
  //       inputType="email"
  //       name="email" 
  //       placeholder="Введіть email" 
  //       label="Email"
  //     />
  //     <FieldPassword 
  //       onChange={handlePasswordChange} 
  //       name={"password"} 
  //       placeholder={"Введіть пароль"} 
  //       label={"Password"}
  //     />
  //     <Link text={"Already have an account?"} link={"/signin"} buttonText={"Sign In"}/>
  //     <Button text="Continue" className="button_up" buttonType="submit" onClick={handleSubmit} />
  //     <Indicator />
  //   </Page>
  // )
};

export default Component;