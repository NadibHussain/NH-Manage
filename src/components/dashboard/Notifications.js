import React from 'react'
import moment from 'moment'
const Notifications = (props) =>
{   const {notification}=props;
console.log(notification)
    return(
        <div className="section">
            <div className="card">
                <div className="card-content">
                    <span className='card-title '><h4 className='pink-text'>Notifications</h4></span>
                    <ul className='notifications'>
                        {notification && notification.map(item =>
                        {
                            return(
                                <li key={item.id}>
                                    <span className="pink-text">{item.user} </span>
                                    <span > {item.content}</span>
                                    <div className='grey-text note-date'>{moment(item.time.toDate()).fromNow()}</div>
                                    <br/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Notifications