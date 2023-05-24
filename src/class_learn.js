import React, { Component } from 'react'
export default class Class_learn extends Component {
state={
    count:1
}
value=()=>{
    this.setState({count:this.state.count+1})
}
render(){
    
    return(
    <>
    <h1 >Hello I have {this.state.count}</h1>
    <button onClick={this.value}>Click</button>
    </>
)
}
}
