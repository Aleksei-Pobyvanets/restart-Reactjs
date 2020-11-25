import React, { Component } from 'react'
import Menu from "./Menu";       


export default class Ccomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             visibility: false,
             count: 0
        }

        this.handleClick = this.handleClick.bind(this)
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }
    handleClick(){
        this.setState(state =>({
            visibility: !state.visibility
        }));
    }
    increment(){
        this.setState(state =>({
            count: state.count + 1
        }));
    }
    decrement(){
        this.setState(state =>({
            count: state.count - 1
        }));
    }
    reset(){
        this.setState({
            count:0
        });
    }

    render() {
        if(this.state.visibility){
            return (
                <div>
                    <button onClick={this.increment}>increment</button>
                    <button onClick={this.decrement}>decrement</button>
                    <button onClick={this.reset}>reset</button>            
                        <h1>Current: {this.state.count}</h1>
                        <h1>click to hide</h1>
                    <button onClick={this.handleClick}>click</button>
                </div>
            )
        }else{
            return (
                <div>
                    <h1>click to see</h1>
                    <button onClick={this.handleClick}>click</button>
                </div>
            )
        }
        
    }
}

Ccomponent.defaultProps = { name: 'Alex'}
