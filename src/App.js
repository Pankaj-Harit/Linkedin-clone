import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header';
import './App.css';
import SideBar from './SideBar';
import Feed from './Feed';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './Firebase';
import Widget from './Widget';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
      }
      else{
        dispatch(logout());
      }
    })
  },[]);


  return (
    <div className="app">
      <Header />
      { !user ?(
        <Login />
        ):(
          <div className="app_body">
          <SideBar  />
          <Feed /> 
          <Widget />
        </div>
        )
      }

    </div>
  );
}

export default App;
