import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {SignUp} from '../../store/actions/authaction'
export class Signup extends Component {
  state={
    Email:"",
    Password:"",
    FirstName:"",
    LastName:""
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
    this.props.signup(this.state)
  }
  render() {
    const {auth,autherr}=this.props
    //console.log(autherr)
    if(auth.uid){return(<Redirect to='/'/>)} 
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-2">Create New Profile</h5>
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
          <label htmlFor="FirstName">First Name</label>
          <input type="text" id='FirstName' onChange={this.handleChange}/>
          </div>
          <div className="input-field">
          <label htmlFor="LastName">Last Name</label>
          <input type="text" id='LastName' onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className='btn pink lighten-1 z-depth-0'>Sign up</button>
          </div>
          <div className="center red-text">
            {autherr? <p>{autherr.autherr}</p>:null}
          </div>
        </form>
      </div>
    )
  }
}
const mapstatetoprops=(state)=>
{
  
  
  return{
    auth:state.firebase.auth,
    autherr:state.auth
  }
}
const mapdispatchtoprops=(Dispatch)=>
{
  
  return{
    signup:(newuser)=>Dispatch(SignUp(newuser))
  }
}
export default connect(mapstatetoprops,mapdispatchtoprops)(Signup)

