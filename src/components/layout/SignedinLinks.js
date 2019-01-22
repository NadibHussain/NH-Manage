import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import {SignOut} from '../../store/actions/authaction'
const SignedinLinks = (props) =>
{
    const {profile}=props;
    return(
        <ul className='right '>
        <li><NavLink to='/createproject'>New Projects</NavLink></li>
        <li><a onClick={props.signout} >Log Out</a> </li>
        <li><NavLink to='/'className='btn btn-floating pink lighten-1 z-depth-2 hide-on-med-and-down'>{profile.initials}</NavLink></li>
        </ul>
    )
}
const mapdispatchtoprops=(dispatch)=>{
    return{
        signout:()=> dispatch(SignOut())
}
}
const mapstatetoprops=(state)=>{
  // console.log(state)
    return{
        profile:state.firebase.profile
    }

}
export default connect(mapstatetoprops,mapdispatchtoprops)(SignedinLinks)
