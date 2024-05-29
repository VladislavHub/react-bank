import "./index.scss"

import Clock from "../date";

const StatusBarWhite = () => {
    return (
        <div className="status_bar">
            <div className="status_bar-time"><Clock color="white"/></div>

            <div className="status_bar-info">
                <div className="status_bar-cellular"></div>
                <div className="status_bar-wifi"></div>
                <div className="status_bar-battery"></div>
            </div>
        </div>
    )
}

export default StatusBarWhite;