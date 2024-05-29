
import React, { useState, useEffect } from "react"
import "./index.scss"

const Clock = ({ color = "" }) => {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()

    if(minutes < 10) {
        return <div className={`time color_${color}`}>{hours}:0{minutes}</div>
    } else {
        return <div className={`time color_${color}`}>{hours}:{minutes}</div>
    }

    
}

export default Clock;