import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useEffect } from "react";


const Logout = () => {
     let navigate = useNavigate();
     const auth = getAuth();
     const getUserAuth = JSON.parse(sessionStorage.getItem('auth'));
     sessionStorage.setItem('auth', JSON.stringify(auth));

     let LogOut = () => {
          console.log(getUserAuth);
          confirmAlert({
               // title: "Confirm to Logout",
               message: "Do you want to Logout ?",
               buttons: [
                    {
                         label: "Yes",
                         onClick: () => {
                              let user = getUserAuth.currentUser ||  auth.currentUser;
     
                              signOut(auth).then(() =>{
                                   navigate('/');
     
                                   user.delete().then(() =>{
                                        console.log('User deleted');
                                   }).catch((err)=>{
                                        console.log(err);
                                   })
                              });
                         },
                    },
                    {
                         label: "No",
                         onClick: () => {
                              return;
                         },
                    },
               ],
          });
          sessionStorage.clear();
     };

     return(
          <button onClick={LogOut} className="auth__logout">Logout</button>
     );
};

export default Logout;