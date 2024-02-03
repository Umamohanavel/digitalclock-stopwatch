
const Button = ({start, status, reset, stop}) => {
  return (
    <div>
        {status === 0 && <button onClick={start}>Start</button>}
        {status === 1 &&
        <div> 
            <button onClick={reset}>Reset</button>  
            <button onClick={stop}>Stop</button> 
        </div>
        }
    </div>
  )
}

export default Button;