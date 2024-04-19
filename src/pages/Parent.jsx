import { Component } from "react";
import Child from "./Child";

class Parent extends Component{
    render(){
        return(
            <div>
            {/* <Child name = {this.props.name} age = {this.props.age}/> */}

            <button onClick={() => this.props.onIncrement()}>Increment</button>
            Count : {this.props.count}
            </div>
        )
    }
}

export default Parent;