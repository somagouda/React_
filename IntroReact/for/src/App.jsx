import { useRef } from 'react';
import './App.css';
import { useState } from 'react';


function App() {
  const[time,settime]=useState(0);
  const intervalRef = useRef(null);

  function starttimer(){
    intervalRef.current = setInterval(()=>{
      settime(time=>time+1);
    }, 1000);
  }
  function stoptimer(){
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  function resettimer(){
    stoptimer();
    settime(0);
  }
 

  return (
    <div>
      <h>stop watch: {time}</h>
      <button onClick={starttimer}>start</button>
      <br/>
      <button onClick={stoptimer}>stop</button>
       <br/>
      <button onClick={resettimer}>reset</button>
      
    </div>
  );
}

export default App;