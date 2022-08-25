import React from 'react'

const Messages = ({messages, photo}) => {
     return (
          <>
               <div className="messenger__messages">
                    { messages.map((message, index) => (
                         <div key={index}  className={`messenger__message ${message?.side} `}>
                              <div className='messenger__row'>
                                   <img className={`messenger__photo ${message?.side === 'left' ? '' : 'hide'}`} src={photo && photo} alt="userphoto"/> 
                                   <div className="messenger__text-row">
                                        <p className={`messenger__message-text  ${message?.text.length  > 10 ? 'align-left' : ''}`}>{message?.text}</p>
                                        <span className='messenger__message-date'>{message?.date?.messageDate}</span>
                                   </div>
                              </div>
                         </div>
                    ))
                    }
               </div> 
          </>
     )
}

export default Messages;