import { Avatar } from '@mui/material';
import React from 'react'
import './HeaderOption.css'
function HeaderOption({ avatar,tittle, Icon, onClick}) {
    return (
        <div className="headeroption" onClick={onClick}>
            { Icon && <Icon className="headeroption_icon"/>}
            {
                avatar && <Avatar className="headeroption_icon" />
            }
            <h3 className="headeroption_title">{tittle}</h3>
        </div>
    )
}

export default HeaderOption;
