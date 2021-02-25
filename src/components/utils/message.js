import React from 'react'
import '../../css/message.css'
const Message = ({message, style})=>{
    return(
        <div className="message-container">
            <div className={`${style} content`}>
            <h1 >{message}</h1>
            <a href="/" > Go back home</a>
            </div>
        </div>
    )
}

Message.defaultProps = {
    style : '404-artist-not-found'
}
export default Message