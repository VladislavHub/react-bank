import "./index.scss"

import Title from "../../component/title";
import StatusBarWhite from "../../component/status-bar-white";
import Button from "../../component/button-main";
import Indicator from "../../component/indicator";
import Page from "../../component/page";


import { useNavigate } from "react-router-dom";

const WellcomePage = () => {
  const navigate = useNavigate()

  const goSignUp = () => {
    navigate("/signup")
  }

  const goSignIn = () => {
    navigate("/signin")
  }

  return (
    <div className="welcome_page">
        <StatusBarWhite />
        <Title title="Hello!" subTitle="Welcome to bank app" className="big" />

        <div className="kerfin"></div>

        <div className="buttons">
            <Button text="Sign Up" className="button_main" onClick={goSignUp}/>
            <Button text="Sign In" className="button_secondary" onClick={goSignIn}/>
        </div>

        <Indicator />
    </div>
  )
};

export default WellcomePage;