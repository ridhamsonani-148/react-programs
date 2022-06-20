import React, { useState } from "react";

const Forms = () =>
{
    const [fullname,setname] = useState({
        fname: "",
        lname: ""
    });
    const inputEvent = (event) =>
    {
        console.log(event.target.value);
        console.log(event.target.name);
        const value = event.target.value;
        const name = event.target.name;

        setname((preValue)=>
        {
            if(name=="fname")
            {
                return{
                    fname : value,
                    lname : preValue.lname
                }
            }
        });
    };
    const onSubmits = (event) =>
    {
        event.preventDefault();
        alert("form submitted");
    };
    return (
        <>
            <form onSubmit={onSubmits}>
            <div>
            <h1> Hello !! {fullname.fname} {fullname.lname}</h1>
            <input type='text' placeholder="Enter Your Name" 
                name='Fname' onChange={inputEvent} value={fullname.fname}
            />
            <br />
            <input type='text' placeholder="Enter Your Last Name" 
                name = 'Lname' onChange={inputEvent} value={fullname.lname}
            />
            <button type = "submit"> Submit </button>
            </div>
            </form>
        </>
    );
}

export default Forms;