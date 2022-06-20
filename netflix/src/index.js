import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';
import Sdata from './Sdata';

function ncard(val){
  return(
    <Card 
    key = {val.id}
    imgsrc= {val.imgsource}
    title= {val.title}
    sname= {val.sname}
    link= {val.links}
   /> 
  )
}
ReactDOM.render(
  <>
  <h1 className='heading_style'> List of Top 5 netflix Series in 2022</h1>
   {Sdata.map(ncard)}
  </>
  ,document.getElementById("root")
);