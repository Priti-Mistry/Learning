import React, { useRef, useState } from 'react'
import FocusInputRef from './components/FocusInputRef'

function App() {
  // let ref = useRef(0); 
  // function handleClick(){
  //   ref.current=ref.current+2;
  //   alert(`you cilked ${ref.current} times!!`);
  // }
  //------REF
  //   const [startTime, setStartTime] = useState(null);
  //   const [now, setNow] = useState(null);
  //   const intervalRef = useRef(null);

  // const handleStart=()=>{
  //   setStartTime(Date.now());
  //   setNow(Date.now());

  //   clearInterval(intervalRef.current);
  //   intervalRef.current=setInterval(()=>{
  //     setNow(Date.now());
  //   },10);
  // }
  // const handleStop=()=>{
  //   clearInterval(intervalRef.current);
  // }
  //   let secondPassed=0;
  //   if(startTime!=null && now != null){
  //     secondPassed=(now-startTime)/1000;
  //   }

  return (
    <>
      <FocusInputRef/>

    </>













    //REF
    // <>
    //   <h1>Time PAssed : {secondPassed.toFixed(2)}</h1>
    //   <button
    //     onClick={handleStart}
    //   >Start</button>
    //   <button
    //     onClick={handleStop}
    //   >Stop</button>
    // </>



    // <button onClick={handleClick}>
    //   Click me !! 
    // </button>
  )
}

export default App