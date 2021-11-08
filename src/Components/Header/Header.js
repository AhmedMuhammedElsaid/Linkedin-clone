import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import HeaderOptions from './components/HeaderOptions';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorIcon from "@material-ui/icons/SupervisorAccount";
import BusinessIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Notifications";
import "./Header.css";
import { useDispatch } from 'react-redux';
import { logout } from '../../features/user/userSlice';
import { auth } from '../../firebase';
export default function Header() {
  const dispatch=useDispatch();
  const logoutOfApp=()=>{
    dispatch(logout());
    auth.signOut();
  }
    return (
      <div className="header">
        <div className="header__left">
          <img
            src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo-512x512.png"
            alt="linkedIn logo"
            
          />
          <div className="header__search">
            <SearchIcon />
            <input type="text" />
          </div>
        </div>
        <div className="header__right">
          <HeaderOptions Icon={HomeIcon} title="Home" />
          <HeaderOptions Icon={SupervisorIcon} title="My Network" />
          <HeaderOptions Icon={BusinessIcon} title="Jobs" />
          <HeaderOptions Icon={ChatIcon} title="Messaging  " />
          <HeaderOptions Icon={NotificationIcon} title="Notifications " />
          <HeaderOptions
            avatar="https://lh3.googleusercontent.com/ogw/ADGmqu8E2xpOqbkoiFOZ-TQTshDKoCS59d3BMMATZROHdQ=s32-c-mo"
            title="me"
            onClick={logoutOfApp}
          />
        </div>
      </div>
    );
}
