import { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Stopwatch.css';

const Stopwatch = () => {

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0})
  const [inter, setInter] = useState();
  const [status, setStatus] = useState(0);
  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH  = time.h;

  const start = () => {
    run();
    setInter(setInterval(run, 10));
    setStatus(1);
  }

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){  //100 ms = 1 sec
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
  }

  const stop = () => {
    clearInterval(inter);
    setStatus(0);
  }

  const reset = () => {
    clearInterval(inter);
    setTime({ms:0, s:0, m:0, h:0});
    setStatus(0);
  }

  return (
    <div className='head'>
        <h1>Stop watch</h1>
        <div className="Stopwatch">
            <Display time={time}/>
            <Button start={start}
                    status={status}
                    stop={stop}
                    reset={reset}/>
        </div>
    </div>
  )
}

export default Stopwatch;