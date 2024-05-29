import "./index.scss";
import React, { ChangeEvent, useState } from "react";

interface FieldProps {
  placeholder: string;
  label: string;
  inputType: string;
  name: string;
  onChange?: (value: string) => void;
}

const FormField: React.FC<FieldProps> = ({ placeholder, label, inputType, name, onChange }) => {
  const [value, setValue] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value)
    setValue(value)
  }

  return (
    <div className="form">

      <label className="form_label">{label}</label>

      <input 
        className="form_input" 
        placeholder={placeholder} 
        type={inputType} 
        name={name} 
        value={value} 
        onChange={handleChange}
      />

      <span className="form_error">Sorry, the password is too simple</span>

    </div>
  )
}

export default FormField;