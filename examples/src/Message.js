import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: "Welcome visitor"
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank You for visiting'
        })
    }
    render()
    {
        return(
            <>
            <h1> {this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Click</button>
            </>
        )
    }
}


export default Message;