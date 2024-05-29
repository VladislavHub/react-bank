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

import { Form,  REG_EXP_EMAIL, REG_EXP_PASSWORD, } from "../../script/Form"
import { useState } from "react";

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

  validate = (name, value) => {
    if (String(value).length < 1) {
      return this.FIELD_ERROR.IS_EMPTY
    }

    if (String(value).length > 20) {
      return this.FIELD_ERROR.IS_BIG
    }

    if (name === this.FIELD_NAME.EMAIL) {
      if (!REG_EXP_EMAIL.test(String(value))) {
        return this.FIELD_ERROR.EMAIL
      }
    }

    if (name === this.FIELD_NAME.PASSWORD) {
      if (!REG_EXP_PASSWORD.test(String(value))) {
        return this.FIELD_ERROR.PASSWORD
      }
    }

    if (name === this.FIELD_NAME.PASSWORD_AGAIN) {
      if (
        String(value) !==
        this.value[this.FIELD_NAME.PASSWORD]
      ) {
        return this.FIELD_ERROR.PASSWORD_AGAIN
      }
    }

    if (name === this.FIELD_NAME.ROLE) {
      if (isNaN(value)) {
        return this.FIELD_ERROR.ROLE
      }
    }

    if (name === this.FIELD_NAME.IS_CONFIRM) {
      if (Boolean(value) !== true) {
        return this.FIELD_ERROR.NOT_CONFIRM
      }
    }
  }

  submit = () => {
    console.log(this.value)
  }

  change = (name, value) => {
    console.log(name, value)
    if (this.validate(name, value)) this.value[name] = value
  }
}

const Component = () => {
  const [inputEmailValue, setInputEmailValue] = useState('')
  const [inputPasswordValue, setInputPasswordValue] = useState('')

  const validateEmail = (name, value) => {
    if (String(value).length < 1) {
      return SignupForm.FIELD_ERROR.IS_EMPTY
    }

    if (String(value).length > 20) {
      return SignupForm.FIELD_ERROR.IS_BIG
    }

    if (name === SignupForm.FIELD_NAME.EMAIL) {
      if (!REG_EXP_EMAIL.test(String(value))) {
        return SignupForm.FIELD_ERROR.EMAIL
      }
    }

    if (name === SignupForm.FIELD_NAME.PASSWORD) {
      if (!REG_EXP_PASSWORD.test(String(value))) {
        return SignupForm.FIELD_ERROR.PASSWORD
      }
    }

    if (name === SignupForm.FIELD_NAME.PASSWORD_AGAIN) {
      if (
        String(value) !==
        SignupForm.value[SignupForm.FIELD_NAME.PASSWORD]
      ) {
        return SignupForm.FIELD_ERROR.PASSWORD_AGAIN
      }
    }

    if (name === SignupForm.FIELD_NAME.ROLE) {
      if (isNaN(value)) {
        return SignupForm.FIELD_ERROR.ROLE
      }
    }

    if (name === this.FIELD_NAME.IS_CONFIRM) {
      if (Boolean(value) !== true) {
        return this.FIELD_ERROR.NOT_CONFIRM
      }
    }
  }

  const validatePassword = (name, value) => {
    if (String(value).length < 1) {
      return this.FIELD_ERROR.IS_EMPTY
    }

    if (String(value).length > 20) {
      return this.FIELD_ERROR.IS_BIG
    }

    if (name === this.FIELD_NAME.EMAIL) {
      if (!REG_EXP_EMAIL.test(String(value))) {
        return this.FIELD_ERROR.EMAIL
      }
    }

    if (name === this.FIELD_NAME.PASSWORD) {
      if (!REG_EXP_PASSWORD.test(String(value))) {
        return this.FIELD_ERROR.PASSWORD
      }
    }

    if (name === this.FIELD_NAME.PASSWORD_AGAIN) {
      if (
        String(value) !==
        this.value[this.FIELD_NAME.PASSWORD]
      ) {
        return this.FIELD_ERROR.PASSWORD_AGAIN
      }
    }

    if (name === this.FIELD_NAME.ROLE) {
      if (isNaN(value)) {
        return this.FIELD_ERROR.ROLE
      }
    }

    if (name === this.FIELD_NAME.IS_CONFIRM) {
      if (Boolean(value) !== true) {
        return this.FIELD_ERROR.NOT_CONFIRM
      }
    }
  }

  const handleEmailChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    if(validateEmail(value)) {
      setInputEmailValue(value) 
    }
  }

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    if(validatePassword(value)) {
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
      <Title title={"Sign up"} subTitle={"Choose a registration method"} className="title"/>
      <Field 
        onChange={SignupForm.change} 
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
      <Link text={"Already have an account?"} link={"/signin"} buttonText={"Sign In"}/>
      <Button text="Continue" className="button_up" buttonType="submit" onClick={SignupForm.submit} />
      <Indicator />
    </Page>
  )
};

export default Component;