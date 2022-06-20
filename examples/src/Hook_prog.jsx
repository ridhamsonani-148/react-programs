import React,{useState} from "react";


const Hook_prog = () =>{
    let currtime = new Date().toLocaleTimeString();
    const [ctime,setCtime] = useState(currtime);

    const time = () =>{
     currtime = new Date().toLocaleTimeString();
     setCtime(currtime);
    }
    return(
        <>
            <h1> {ctime} </h1>
            <button onClick={time}>Get Time</button>
        </>
    )
}

export default Hook_prog;