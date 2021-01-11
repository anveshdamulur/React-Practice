import React, {Component} from 'react';
export class ParentClass extends Component{
    state = {
        name : 'anvesh',
        age : 26
    }
    render(){
        return(
            <div>
                <p>this is parent class</p>
                <Child name ={this.state.name} age ={this.state.age}/>
            </div>
        )
    }
}

 class Child extends React.Component{
     state = {
         name : this.props.name,
         age : this.props.age
     }
    render(){
        return(
            <div>
                <h1>this is child class</h1>
                <p>Name : {this.props.name}</p>
                <p>Age : {this.props.age}</p>
                <SubChild  name = {this.state.name} age = {this.state.age} />

            </div>
        )
    }
}

class SubChild extends React.Component{
    render(){
        return(
            <div>
                <h2>welcome to sub child</h2>
                <p>name : {this.props.name}</p>
                <p>age : {this.props.age}</p>
                
            </div>
        )
    }
}