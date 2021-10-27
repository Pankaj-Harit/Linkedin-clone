import React,{ useState } from 'react'
import './Login.css'
import linkedin_logo from './Images/linkedin_logo.png'
import { createUserWithEmailAndPassword, updateProfile , signInWithEmailAndPassword } from "firebase/auth";
import { login } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from './Firebase';

function Login() {

    const[ name, setName ] = useState("");
    const[ email, setEmail ] = useState("");
    const[ password, setPassword ] = useState("");
    const [ profilePic , setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault(); 

        signInWithEmailAndPassword(auth, email , password)
        .then((userAuth)=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }))
        })
        .catch((error) => {
            alert(error);
        })
        
    };

    const register = () =>{
        if(!name){
            return  alert("Please enter a full Name");
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
            updateProfile(userAuth.user, {
                displayName : name,
                photoURl: profilePic,
                
            })
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
            }))
        })
        .catch((error) => {
            alert(error);
        })
    };

    return (
        <div className="login">
            <img src={linkedin_logo} alt="" srcset="" />
            <form action="">
            <input 
                value={name} 
                onChange={e=> setName(e.target.value)} 
                type="text"  
                placeholder="Fill Name {required if registering}"
            />
            <input 
                value={profilePic}
                onChange={e => setProfilePic(e.target.value)} 
                type="text"  
                placeholder="Profile pic URL {optional}"
            />
            <input 
                value={email}  
                onChange={e=> setEmail(e.target.value)}
                type="Email"  placeholder="Email"
            />
            <input 
                value={password}  
                onChange={e=> setPassword(e.target.value)} 
                type="Password" 
                placeholder="Password"
            />
            <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>
            Not a member?
            <span className="login_register" onClick={register}>
                RegisterNow
            </span>
            </p>
            
        </div>
    )
}

export default Login;
