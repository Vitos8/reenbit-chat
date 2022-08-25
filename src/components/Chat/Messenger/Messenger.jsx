import { useState } from "react";
import "./Messenger.scss";
import sendSvg from "../../../assets/images/icons/telegram.svg";
import Messages from "./Messages";

const Messenger = ({user, sendMessage}) => {
     const [messageValue, setMessageValue] = useState('');

     let onSendMessage = () => {
          if( messageValue.length > 0) {
               sendMessage(user,messageValue);
               return setMessageValue('');
          }
          return;
     }

     let onKeyDown = (e) => {
          if (e.keyCode === 13) {
               onSendMessage(user, messageValue);
          }
     };

     return  (
          <>
          {user?.name ? <div className="messenger">
               <div className="messenger__user">
                    <img className="messenger__user-photo" src={user?.photo} alt="user"/>
                    <p className="messenger__user-name">{user?.name}</p>
               </div>
                    <Messages photo={user?.photo} messages={user?.messages} />
               <div className="messenger__input">
                    <div className="messenger__input-row">
                         <input onKeyDown={(e) => onKeyDown(e)} onChange={( e) => setMessageValue(e.target.value)} value={messageValue} type="text" className="messenger__textfield" placeholder="Type your message" />
                         <img onClick={ onSendMessage } className='messenger__input-img' src={sendSvg} alt="telImg"  />
                    </div>
               </div>
          </div> : <div className="choose"><h3 className="choose__user">Choose a user</h3></div>}
     </>
     )
}    

export default Messenger;