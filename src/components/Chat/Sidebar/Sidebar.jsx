import {useState, useEffect} from 'react';
import "./Sidebar.scss";
import SearchSvg from "../../../assets/images/icons/search.svg";
import Logout from "../../Auth/Logout";
import Chats from "./Chats/Chats";


const Sidebar = ({ user, setActiveUser, users, isActiveUser}) => {
     const [searchValue, setSearchValue] = useState('');

     let filteredUsers = users && users.filter(user => {
          return user?.name.toLowerCase().startsWith(searchValue.toLowerCase()); 
     }) 

     return (
          <div className="sidebar">
               <div className="sidebar__user">
                    <img src={user?.photo || 'user.png'} alt="userPhoto" className="sidebar__user-img"/>
                    <p className="sidebar__user-name">{user?.name || user?.email || 'User not found'}</p>
                    <Logout/>
               </div>
               <div className="sidebar__search">
                    <div className="sidebar__search-input-row">
                         <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue}  type="text" className="sidebar__search-input" placeholder="Search or start new chat"/>
                         <img className="sidebar__search-icon" src={SearchSvg} alt="search-icon"/>
                    </div>
               </div>
               <div className="sidebar__chats">
                    <h2 className="sidebar__chats-title">Chats</h2>
                    <div className="sidebar__chats-row">
                         <Chats  searchValue={searchValue} users={filteredUsers}  setActiveUser={setActiveUser} isActiveUser={isActiveUser}/>
                    </div>
               </div>
          </div>
     );
};

export default Sidebar;
