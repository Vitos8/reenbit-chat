import "./Chats.scss";


const Chats = ({users, searchValue, setActiveUser, isActiveUser}) => {


     return (
          <>
               {users.length > 0    ?  users.map((user) => (
                    <div onClick={() => setActiveUser(user)} className={`sidebar__chats-item ${isActiveUser.id === user.id ? 'active' : ''}`} key={user?.id}>
                         <div  className="sidebar__chats-item-infoRow">
                              <img src={user?.photo} alt="userPhoto" className="sidebar__chats-item-photo" />
                              <div>
                                   <h4 className="sidebar__chats-item-name">{user?.name}</h4>
                                   <p className="sidebar__chats-item-message">{user?.messages[user?.messages.length -1].text}</p>
                              </div>
                         </div>
                         <span className="sidebar__chats-item-date">{user?.messages[user?.messages.length -1]?.date?.chatDate}</span>
                    </div>
               )) : <h1 className="sidebar__search-nomatches"> User  "<span>{searchValue}</span>"  not found !</h1>}
          </>
     )
}

export default Chats;