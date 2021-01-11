import React, {Component} from 'react'
import axios from 'axios'
export class AxiosCall extends Component{
    state = {
        data : {}
    }
    getData= ()=>{
        axios.get('https://api.mocki.io/v1/b043df5a')
        .then((data)=>{
            this.setState({
                data : data
            })
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
    render(){
     console.log(this.state.data.data.city)
        return(
            <div>
                <h1>Axios calling using api</h1>
                <button onClick={this.getData}>Get Api Data</button>
                <p></p>
              
            </div>
        )
     }
}

