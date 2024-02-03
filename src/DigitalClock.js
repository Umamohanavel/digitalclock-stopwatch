import React, { useEffect, useState } from 'react'
import './Digiclock.css';

const DigitalClock = () => {
    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const [currentDate, setCurrentDate] = useState({h:0, m:0, s:0});

    useEffect(() => {
        setCurrentDate({h:date.getHours(), m:date.getMinutes(), s:date.getSeconds()});
    })
    function Time(t)  {
        if(t > 12){
            return t-12;
        }
        return t;
    }
    function addZero(t){
        var len = t.toString().length;
        if(len <= 1){
            return "0" + t
        }
        return t;
    }
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Digital clock</h1>
        <div className='body'>
            <div className="child">{addZero(Time(currentDate.h))}</div>
            <div className="child">{addZero(currentDate.m)}</div>
            <div className="child">{addZero(currentDate.s)}</div>
        </div>
        <div className="display">
            {addZero(date.getDay())}--{addZero(date.getDate())}--{addZero(date.getFullYear())}
            <div className="display">
                {days[date.getUTCDay()]}
            </div>
        </div>
    </div>
  )
}

export default DigitalClock