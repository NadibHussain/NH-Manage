import React, { Component } from 'react'
import { connect } from 'react-redux'
import{ SignIn} from '../../store/actions/authaction'
import {Redirect} from 'react-router-dom'

export class Signin extends Component {
  state={
    Email:"",
    Password:""

  }
  handleChange=(e)=>
  {

    this.setState(
    {
      [e.target.id]: e.target.value
    })
    
  }
  handleSubmit=(e)=>
  {
    e.preventDefault();
    this.props.SignIn(this.state) 

      
  }
  render() {
    const {autherr,auth}=this.props
    //console.log(auth)
    if(auth.uid){return(<Redirect to='/'/>)} 
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-2">Sign In</h5>
          <br/>
          <div className="input-field">
          <label htmlFor="Email">Email</label>
          <input type="email" id='Email' onChange={this.handleChange}/>
          </div>
          <div className="input-field">
          <label htmlFor="Password">Password</label>
          <input type="Password" id='Password' onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className='btn pink lighten-1 z-depth-0'>Login</button>
          </div>
          <div className="center red-text">
            {autherr? <p>{autherr.type}</p>:null}
          </div>
        </form>
      </div>
    )
  }
}
const mapstatetoprops=(state)=>
{
  
  return{
    autherr:state.auth.autherr,
    auth:state.firebase.auth
  }
}
const mapdispatchtoprops=(dispatch)=>
{
  return{
    SignIn:(info)=>dispatch(SignIn(info))
  }
}
export default connect(mapstatetoprops,mapdispatchtoprops)(Signin)

