import "./index.scss";
import { useState } from "react";



export default function FormField({ placeholder, label, inputType, name, onChange }) {
  // const [inputValue, setInputValue] = useState('')

  // const validate = (name, value) => {
  //   return true
  // }

  // const handleChange = (event) => {
  //   const {  value } = event.target;
  //   console.log(name, value)
  //   if(validate( value)) {
  //     setInputValue(value) 
  //   }
  // }

  return (
    <div className="form">

      <label className="form_label">{label}</label>

      <input 
        className="form_input" 
        placeholder={placeholder} 
        type={inputType} 
        name={name} 
        // value={inputValue} 
        onChange={onChange}
      />

      <span className="form_error">Sorry, the password is too simple</span>

    </div>
  )
}