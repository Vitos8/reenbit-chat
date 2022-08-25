import { useEffect, useState } from "react";
import Sidebar  from "./Sidebar/Sidebar";
import Messenger from "./Messenger/Messenger";
import "./Chat.scss";


const Chat = ({user, usersList, sendMessage, }) => {
     const [activeUser, setActiveUser] = useState({});     

     let onActiveUser = (user) => {
          setActiveUser(user);
     };

     return (
          <div className="chat">
               <Sidebar user={user} users={usersList} setActiveUser={onActiveUser}  isActiveUser={activeUser} />
               <Messenger user={activeUser} sendMessage={sendMessage} />
          </div>
     )
}

export default Chat