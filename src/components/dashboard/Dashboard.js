import React,{Component} from "react"
import Notifications from './Notifications'
import Projectlist from './../projects/Projectlist'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
class Dashboard extends Component{
    render(){
        const {project,auth,notification} =this.props
        if(!auth.uid){return(<Redirect to='/signin'/>)} 
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <Projectlist projects={project}  ></Projectlist>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notification={notification}/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStatetoProps = (state) =>
{
    //console.log(state.firestore.ordered)
    return{
        project:state.firestore.ordered.projects,
        auth:state.firebase.auth,
        notification:state.firestore.ordered.notifications
    }
}
export default compose(
    connect(mapStatetoProps),
    firestoreConnect([{collection:'projects',orderBy:['time','desc']},
                    {collection:'notifications',orderBy:['time','desc'],limit:3}])
    )(Dashboard)