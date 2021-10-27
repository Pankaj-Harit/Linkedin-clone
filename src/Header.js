import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import linkedin from './Images/linkedin.png'
import './Header.css'
import HeaderOption from './HeaderOption';
import { logout } from './features/userSlice';
import { auth } from './Firebase';
import { useDispatch } from 'react-redux';
function Header() {
    
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header_left">
                <img src={linkedin} alt="" srcset="" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="header_right">
                <HeaderOption tittle="Home" Icon={HomeIcon}/>
                <HeaderOption tittle="My Network" Icon={SupervisorAccountIcon}/>
                <HeaderOption tittle="Jobs" Icon={BusinessCenterIcon}     />
                <HeaderOption tittle="Messaging" Icon={ChatIcon}    />
                <HeaderOption tittle="Notification" Icon={NotificationsIcon} />
                <HeaderOption tittle="ME" avatar={true} onClick = {logoutOfApp}/>
            </div>
        </div>
    )
}

export default Header;
