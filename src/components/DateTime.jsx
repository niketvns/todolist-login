import React, { useState } from "react";

const DateTime = () => {

    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();

    const [dateTime, setDateTime] = useState({ date, time });

    const changeDate = () => {
        time = new Date().toLocaleTimeString();
        date = new Date().toLocaleDateString();
        setDateTime({ date, time });
    }

    setInterval(changeDate, 1000);

    return (
        <>
            <div className="date-time-main">
                <p className="time">{dateTime.time}</p>
                <p className="date">{dateTime.date}</p>
            </div>
        </>
    );
};


export default DateTime;