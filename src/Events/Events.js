import { Component } from "react";

export class Events extends Component{
    state ={
        number : undefined,
        isFocus : false
    }

    handlechange= (e) =>{
        this.setState({
            number : e.target.value
        })
    }

    checkEvenOdd = () =>{
        if(this.state.number === undefined){
            return ""
        }
        if(this.state.number % 2 === 0 ){
            return "Even"
        }
        else{
            return "Odd"
        }
    }
    handleFocus = () =>{
        this.setState({
            isFocus : true
        })
    }
    handleHide = ()=>{
        this.setState({
            isFocus : false
        })
    }
  
    render(){
        return(
            <div>
                <h1>This is Event Class</h1>
                <input type="number" onChange={this.handlechange} onBlur={this.handleFocus} onFocus={this.handleHide} />
                <div> 
               {this.state.isFocus && <p>{<this.checkEvenOdd />}</p>}
                </div>
            </div>
        )
    }
}



