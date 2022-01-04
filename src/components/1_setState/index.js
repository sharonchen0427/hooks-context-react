import React, { Component } from 'react'

export default class Demo extends Component {
    state={
        count:0
    }
    handleclick=()=>{
        //way1: obj style: do not rely original number, can be set count:99 directly
        //step1:get original count
        // const {count}=this.state
        //step2:setstate
        // this.setState({count:count+1}, ()=>{
        //     console.log(this.state.count)
        // }) //state change obj , callback to update after render
        
        //way2:function style set state
        this.setState((state, props)=>{
            //return {count:99} // return the res of state change obj
            return {count: state.count+1}
        })
        //simpler: this.setState( state=>({count: state.count+1}))
    }
    render() {
        return (
            <div>
                <h1>sum is: {this.state.count}</h1>
                <button onClick={this.handleclick}>click me +1</button>
            </div>
        )
    }
}