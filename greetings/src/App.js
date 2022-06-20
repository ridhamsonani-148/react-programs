import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Time from './Time';

let currDate = new Date();
let currHour = currDate.getHours();
let greeting = ' ';
const gstyle = {};
if(currHour>=1 && currHour<12)
{
   greeting = 'Good Morning';
   gstyle.color = "blue";
}
else if(currHour>=12 && currHour < 19)
{
   greeting = 'Good Afternoon';
   gstyle.color = "red"; 
}
else 
{
   greeting = 'Good Night';
   gstyle.color = "yellow";
}
function App() {
  return (
    <div className="bg">
     <Time />
     <h1> Hello Sir,<span style={gstyle}> {greeting} </span></h1>
    </div>
  )
}

export default App;
