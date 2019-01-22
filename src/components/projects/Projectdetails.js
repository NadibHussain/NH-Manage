import React from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'
import moment  from 'moment'
const Projectdetails=(props)=> {
  const {project,auth}=props;
   //console.log(auth)
  if(!auth.uid){return(<Redirect to='/signin'/>)} 

    if(project)
    {
      
      return (
      <div>
      <div className="container section projerct-detail">
          <div className="card z-depth-1">
              <div className="card-content">
                 <span className="card-title"><h3>{project.title}</h3></span>
                     <p >{project.content}
                    </p>
              </div>
              <div className="card-action grey lighten-5 grey-text">
                <p>Posted by {project.authfirstname} {project.authlastname}</p>
                <p>{moment(project.time.toDate()).calendar()}</p>
              </div>
          </div>
      </div>
    </div>)
    }
    else
    {
      return (
      <h1 className='container center'>Loading project</h1>
      )
    }
    

}
const mapstatetoprops =(state,ownprops)=>
  {
    const id=ownprops.match.params.id;
  const project=state.firestore.data.projects ? state.firestore.data.projects[id]:null
  
  return { 
    project:project,
    auth:state.firebase.auth
  }
}

export default compose(
  connect(mapstatetoprops),
  firestoreConnect([{collection:'projects'}])
) (Projectdetails)
