import "./index.scss";

import { useNavigate } from "react-router-dom";

export default function Component({ text, link, buttonText }) {
  const navigate = useNavigate()

  const go = () => {
    navigate(`${link}`)
  }
  return (
    <div className="link">
      {text}
      <button className="button_link" onClick={go}>{buttonText}</button>
    </div>
  )
}