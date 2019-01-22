import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createproject} from '../../store/actions/projectaction'
import {Redirect} from 'react-router-dom'
export class Createproject extends Component {
  state={
   title:"",
   content:""
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
    this.setState(
      {
        change: true
      })
    e.preventDefault();
    this.props.createproject(this.state)
    this.props.history.push('/')
  }
  render() {
    const {auth}=this.props
    if(!auth.uid){return(<Redirect to='/signin'/>)} 
    //if(this.state.change){return(<Redirect to='/'/>)} 
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h4 className="grey-text text-darken-2">Create Project</h4>
          <br/>
          <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id='title' onChange={this.handleChange}/>
          </div>
          <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea name="Content" id="content" onChange={this.handleChange} className="materialize-textarea" ></textarea>
          </div>
          <div className="input-field">
            <button className='btn pink lighten-1 z-depth-0'>Create Project</button>
          </div>
        </form>
      </div>
    ) 
  }
}
const mapDispatchtoProps = (dispatchs) =>
{
    return{
        createproject:(project) =>dispatchs(createproject(project))
    }
}
const mapstatetoProps = (state) =>
{
    return{
        auth:state.firebase.auth
    }
}
export default connect(mapstatetoProps,mapDispatchtoProps)(Createproject)

