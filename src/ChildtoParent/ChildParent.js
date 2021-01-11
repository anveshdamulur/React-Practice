import { Component } from "react";

export class ChildParent extends Component{
    state={

    }
    getData = (name, age) =>{
        this.setState({
            name,
            age
        })
    }

    render(){
        return(
            <div>
                <h1>Welcome to child to parent communication</h1>
                <Child onChange = {this.getData}/>
                <p>Name : {this.state.name}</p>
                <p>Age : {this.state.age}</p>
            </div>
        )
    }
}


class Child extends Component{
    state={
        name : 'anvesh',
        age : 26
    }
    handleChange = () =>{
        this.props.onChange(this.state.name, this.state.age)
    }

    render(){
        return(
            <div>
                <h1>this is child class</h1>
                <button onClick={this.handleChange}>Send Data</button>
            </div>
        )
    }
}