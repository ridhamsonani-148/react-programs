import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';

const Variable = () =>
{
    const [num,setNum] = useState(0);
    const Inc = () =>{
        setNum(num+1);
    }
    const Dec = () =>{
        if(num==0)
        {
            alert("limit reached");
        }
        else
        setNum(num-1);
    }
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1> {num} </h1>
                    <div className="btn_div">
                        <Button onClick={Inc}><AddIcon /> </Button>
                        <Button onClick={Dec}><RemoveIcon /> </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Variable;