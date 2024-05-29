import "./index.scss";
import BackButton from "../button-back";

export default function Component({ title = "",}) {
  return (
    <div className="header">
      <BackButton />
      <h1 className="title">{title}</h1>
    </div>
  )
}