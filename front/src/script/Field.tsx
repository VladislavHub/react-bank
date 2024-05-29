import React, { ChangeEvent, useState } from "react";

interface FieldProps {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const Field: React.FC<FieldProps> = ({ label, placeholder, onChange }) => {
  const [value, setValue] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    onChange(value);
  }

  return (
    <div>
      
    </div>
  )
}


// придумать как реализовать конект кнопки с полем

