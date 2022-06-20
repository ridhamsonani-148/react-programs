import React, { Component } from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState({
            count: this.state.count+1
        })
    }
    render() {
        return(
            <>
                <h1>count - {this.state.count}</h1>
                <button onClick = {()=> this.increment()}>Increment</button>
            </>
        )
    }
}

export default Counter;