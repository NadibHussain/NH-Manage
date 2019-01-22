    import React from 'react'
    import moment  from 'moment'
    const Projectsummary = (project) =>
    {
        //console.log(project.project.time)
        return(
           <div className="card project-summary z-depth-1 ">
                    <div className="card-content light-blue-text text-accent-4">
                        <span className="card-title"><h5>{project.project.title}</h5></span>
                        <p className="grey-text">{project.project.authfirstname} {project.project.authlastname}</p>
                        <p className="grey-text">{moment(project.project.time.toDate()).calendar()}</p>
                    </div>
             </div>
        )
    }
    export default Projectsummary