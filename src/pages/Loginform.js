import React, {Component} from "react";
import {Link} from "react-router-dom"
import axios from 'axios'


  class Loginform extends Component {
    constructor(props){
        super(props)
        this.state= {
        username:'',
        password:''
        }
    }
    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler= e =>{https://learnadvanceenglish.herokuapp.com/
        e.preventDefault()
        console.log(this.state)
        axios.post("https://learnadvanceenglish.herokuapp.com/loginjs", this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        });
        
    }
    render() {
        const {username,password}=this.state
        return (
            <div className="form1">
      

            <form className="form" onSubmit={this.submitHandler}>
                      <div className="div-centered">
            <div className="form1-div">
                <label>Username</label>
                <input type="text" name="username" value={username} onChange={this.changeHandler}/>
    
            </div>
            <div className="form1-div">
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={this.changeHandler}/>
            </div>
            <button type="submit" className="btn-primary">Submit</button>
            </div>
    
           </form>
           </div>
          
        )
    }
}

export default Loginform;

  