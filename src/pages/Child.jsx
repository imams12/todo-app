import { Component } from "react";

class Child extends Component{
    render(){
        return(
            <div>
                Hallo My Name : {this.props.name} And My Age : {this.props.age}
            </div>
        )
    }
}

export default Child;