import React, { useState } from "react";

const Events = () =>
{
    const violet = "blueviolet";
    const [color,setColor] = useState(violet);
    const [name,setName] = useState('CLick Me');
    const bgchange = () =>{
        let newbg = '#34495e';
        let new_name = 'done 👍';
        setColor(newbg);
        setName(new_name);
    }
    const bgreset = () =>
    {
        setColor(violet);
        setName('db clicked 👍');
    }
    return(
        <>
            <div style={{backgroundColor:color}}>
                <button onClick={bgchange} onDoubleClick={bgreset}>{name}</button>
            </div>
        </>
    );
}

export default Events;