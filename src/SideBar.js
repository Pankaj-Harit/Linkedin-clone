import React from 'react'
import { Avatar } from '@mui/material'
import Nature from './Images/nature2.jpg'
import './Sidebar.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
function SideBar() {
    const user = useSelector(selectUser);
    const recentItem = (topic) => {
        return(
            <div className="sidebar_recentitem">
                <span className="sidebar_hash">#</span>
                <p>{topic}</p>
            </div>
        )
    }

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src={Nature} alt="" srcset="" />
                <Avatar className="sidebar-avatar" />
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you.</p>
                    <p className="sidebar_statNumber">2,533</p>
                </div>
                <div className="sidebar_stat">
                    <p>View on post.</p>
                    <p className="sidebar_statNumber">2,023</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("Reactjs")}
                {recentItem("Programming")}
                {recentItem("Software Engineeering")}
                {recentItem("Designer")}
                {recentItem("Developer")}
                {recentItem("Flutter")}
            </div>

        </div>
    )
}

export default SideBar
