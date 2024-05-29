import "./index.scss";
import { useState } from "react";


export default function Component({ placeholder, label,  name, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // const [inputValue, setInputValue] = useState('')

  // const validate = (name, value) => {
  //   return true
  // }

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   console.log(name, value)
  //   if(validate(name, value)) setInputValue(value) 
  // }

  return (
    <div className="form">
      <label className="form_label ">{label}</label>

      <input 
        className="form_input " 
        placeholder={placeholder} 
        type={showPassword ? "text" : "password"} 
        name={name} 
        // value={inputValue} 
        onChange={onChange}
      />

      <span className={`field_icon ${showPassword ? "text" : "password"}`} onClick={togglePasswordVisibility}></span>

      <span className="form_error ">Sorry, the password is too simple</span>

    </div>
  )
}