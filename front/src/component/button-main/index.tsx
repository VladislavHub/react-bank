import "./index.scss";

interface ButtonProps {
  className?: string;
  text?: string;
  onClick?: () => void;
  buttonType?: "button" | "submit" | "reset";
}

export default function Component({ className, text, onClick, buttonType = "button" }: ButtonProps ) {
  return (
      <button className={`button ${className}`} onClick={onClick} type={buttonType}>
        {text}
      </button>
  )
}