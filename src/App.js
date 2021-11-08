import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { login, logout, selectUser } from "./features/user/userSlice";
import { auth } from "./firebase";
import Login from "./pages/Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log('user now is',user);
  useEffect(()=>{
auth.onAuthStateChanged((userAuth)=>{
  if(userAuth){
    dispatch(login({
      email:userAuth.email,
      uid:userAuth.uid,
      displayName:userAuth.displayName,
      photoUrl:userAuth.photoURL
    }))
  }else{
    dispatch(logout())
  }
})
  },[])
  return (
    <div className="app">
      <Header />
      {!user?.user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
