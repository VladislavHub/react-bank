import "./index.scss"

import Clock from "../date";

const StatusBarDark = () => {
    return (
        <div className="status_bar">
            <div className="status_bar-time"><Clock color="dark"/></div>

            <div className="status_bar-info">
                <div className="status_bar-cellular-dark"></div>
                <div className="status_bar-wifi-dark"></div>
                <div className="status_bar-battery-dark"></div>
            </div>
        </div>
    )
}

export default StatusBarDark;