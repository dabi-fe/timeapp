import React,{useState,useEffect} from 'react';
import './App.css';




const App = () => {
  const [time,setTime] = useState(new Date().toLocaleTimeString()); // shows the current time
  const [date,setDate] = useState(new Date().toLocaleDateString()); //Shows the current date
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString()); 
      setDate(new Date().toLocaleDateString());
    },1000); // every 1 second the time and date will be updated
    return () => clearInterval(interval); // clear the interval
  }
  ,[]);

  return(
    <div>
      <div>
        <h1>Current Time is {time}</h1>
        <h1>Current Date is {date}</h1>
        <h1> Thanks for visiting!</h1>
      </div>
    </div>
  );
}


export default App;