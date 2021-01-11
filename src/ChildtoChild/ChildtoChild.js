import React, {Component} from 'react'

export class ChildtoChild extends Component{
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
                <Child onChnage={this.getData}/>
                <SubChild name={this.state.name} age={this.state.age} />
            </div>
        )
    }
}

class Child extends Component{
    state = {
        name :'Anji',
        age : 32
    }

    handleChange=()=>{
        this.props.onChnage(this.state.name, this.state.age)
    }
    render(){
        return(
            <div>
                <h1>this is schild class</h1>
                <button onClick={this.handleChange}>Get Data in Sub Child</button>
            </div>
        )
    }
}

class SubChild extends Component{
    render(){
        return(
            <div>
                <h1>this is sub child</h1>
                <p>Name : {this.props.name}</p>
                <p>Age : {this.props.age}</p>
            </div>
        )
    }
}