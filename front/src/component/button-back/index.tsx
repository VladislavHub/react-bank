import "./index.scss";
import React from "react";

import { useNavigate } from "react-router-dom";

export default function BackButton({ className = "" }) {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
      <button className={`button_back ${className}`} onClick={goBack}></button>
  )
}