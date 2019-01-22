import React from "react"
import Projectsummary from './Projectsummary'
import {Link} from 'react-router-dom'
 const Projectlist= ({projects}) =>{
    
        return(
            <div className='projectlist-section'>
               {projects && projects.map(project =>{ 
                //console.log(project.id)            
               return(
                    <Link to={'/project/'+project.id}key={project.id}>
                    <Projectsummary project={project} > </Projectsummary>
                    </Link>
                )
                
            })}
            </div>
        )
}
export default Projectlist