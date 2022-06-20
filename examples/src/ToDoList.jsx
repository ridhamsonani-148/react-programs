import React, { useState } from "react"; 
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListComp from "./ListComp";
const ToDoList = () =>
{
    const [item,setItem] = useState();
    const [newitem,setNewItem] = useState([]);
    const itemEvent = (event) =>
    {
          setItem(event.target.value);
    }
    const listOfItems = () =>
    {
        setNewItem((prev)=>{
            return [...prev,item]
        })
        setItem("");
    }
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>Todo List</h1>
                    <input type='text' value={item}
                    placeholder='Add an Items' onChange={itemEvent}/>
                    <Button className="newBtn" onClick={listOfItems}><AddIcon /></Button>

                    <br />
                    <ol>
                    { newitem.map((val,index)=>{
                       return <ListComp key={index} text={val}/>
                    })}
                    </ol>
                    <br />
                </div>
            </div>
        </>
    );
}

export default ToDoList;