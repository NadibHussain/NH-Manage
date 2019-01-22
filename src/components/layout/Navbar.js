import React from 'react'
import {Link} from 'react-router-dom'
import SignedinLinks from './SignedinLinks'
import SignedoutLinks from './SignedoutLinks'
import { connect } from 'react-redux'

const Navbar = (props) =>
{   
    const {auth}=props
   // console.log(auth)
    const links=auth.uid? <SignedinLinks></SignedinLinks>:<SignedoutLinks></SignedoutLinks>
    return( 
        <nav className="nav-wrapper light-blue accent-2 z-depth-2">
            <div className="container">
            <Link to='/'className='brand-logo left'>NH-Manage</Link>  
            
           {links}
       </div>
        </nav>
    )
}
const mapstatetoprops =(state)=>
  {     
    //console.log(state)
  return { 
    auth:state.firebase.auth
  }
}
export default connect(mapstatetoprops)(Navbar)