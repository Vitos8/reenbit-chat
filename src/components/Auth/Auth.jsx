import "./Auth.scss";
import {
     getAuth,
     GithubAuthProvider,
     signInWithPopup,
     GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";




const Auth = ({SignIn}) => {
     const GitProvider = new GithubAuthProvider();
     const GoogleProvider = new GoogleAuthProvider;
     const navigate = useNavigate();
     const auth = getAuth();
     
     let singInWithGit = () => {
          signInWithPopup(auth, GitProvider)
               .then((result) => {
                    // The signed-in user info.
                    const user = result.user;
                    const userInfo = {
                         photo: user.photoURL,
                         name: user.displayName,
                         email: user.email,
                         token: user.accessToken
                    }
                    SignIn(userInfo);
               }).then(() => {
                    navigate('/Chat');
               })
               .catch((error) => {
                    console.log(error);
               });
     };

     let SingInWithGoogle = () => {
          signInWithPopup(auth, GoogleProvider)
          .then((result) => {
               // The signed-in user info.
               const user = result.user;
               const userInfo = {
                    photo: user.photoURL,
                    name: user.displayName,
                    email: user.email,
                    token: user.accessToken
               }
               SignIn(userInfo);
          }).then(() => {
               navigate('/Chat');
          })
          .catch((error) => {
               console.log(error);
          });
     }

     return (
          <div className="auth">
               <div className="auth__row">
                    <div className="auth__element">
                         <h2 className="auth__title">Auth</h2>
                         <p className="auth__subtitle">Log in to continue</p>
                         <ul className="auth__list">
                              <li onClick={SingInWithGoogle} className="auth__item">
                                   <img
                                        src="google.png"
                                        alt="authgoogle"
                                        className="auth__item-img"
                                   />
                                   <p className="auth__item-text">
                                        Continue with Google
                                   </p>
                              </li>
                              <li
                                   onClick={singInWithGit}
                                   className="auth__item">
                                   <img
                                        src="Github.png"
                                        alt="authGit"
                                        className="auth__item-img"
                                   />
                                   <p className="auth__item-text">
                                        Continue with GitHub
                                   </p>
                              </li>
                         </ul>
                    </div>
               </div>
          </div>
     );
};

export default Auth;
