import Chat from "./components/Chat/Chat";
import axios from "axios";
import { useState } from "react";
import "./App.scss";
import {Routes, Route} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import {setSession } from "./utlis/setStorage";
import {messageDate, chatDate} from './utlis/date';
import users from "./assets/MockData/users";


function App() {
      let storageUsers = JSON.parse(sessionStorage.getItem("users"));
      const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')) || {});
      const [usersList, setUsersList ] = useState(storageUsers || []);

      let setUsers = () => {
            sessionStorage.setItem("users", JSON.stringify(users));
            let storageUsers = JSON.parse(sessionStorage.getItem("users"));
            setUsersList(storageUsers);
      };

      let SignIn = (userInfo) => {  
            setUser(JSON.parse(sessionStorage.getItem('user')) || userInfo);
            setSession(userInfo, 'user');
            setUsers();
      }
      
      let sortUsers = (item) => {
            return usersList.map((user, index) => {
                  if (item.id === user.id) {
                  usersList.splice(index, 1);
                  return  setUsersList([item, ...usersList]);
            }
            return user;
            })
      };

      let getApi = async (item) => {
            try {
                  let request = await axios.get('https://api.chucknorris.io/jokes/random');

            let newAnswer = {
                  text: request.data.value,
                  side: 'left',
                  date: {
                        messageDate,
                        chatDate,
                  },
            };

            let newUserList = usersList.map(user => {
                  if (user.id  === item.id) {
                        user.messages = [...user.messages, newAnswer]
                        return user;
                  }
                  return user;
            }) 
            sessionStorage.users = JSON.stringify(newUserList);
            let storageUsers = JSON.parse(sessionStorage.getItem("users"));

            setUsersList(storageUsers);
            sortUsers(item);

      } catch (error) {
            console.log('Something went wrong', error);    
            alert('Somethin went wrong !');
      }
      };

      let sendMessage = (item ,message) => {

      let newMessage = {
            text: message,
            side: 'right',
            date: {
                  messageDate,
                  chatDate,
            },
      }

            let newUserList = usersList.map(user => {
                  if (user.id  === item.id) {
                        user.messages = [...user.messages, newMessage]
                        return user;
                  }
                  return user;
            }) 
            sessionStorage.users = JSON.stringify(newUserList);
            let storageUsers = JSON.parse(sessionStorage.getItem("users"));

           //Adding a new user message
            setUsersList(storageUsers);
           //Set users to sessionStorage

           //Adding a new answer

            getApi(item);
      return;
};

      return ( 
            <div className="App">
                  <Routes>
                        <Route path="/" element={<Auth SignIn={SignIn} />} />
                        <Route path="/Chat" element={<Chat  sendMessage={sendMessage} usersList={usersList}  user={user}/>} />``
                  </Routes>
            </div>
      );
}

export default App;
