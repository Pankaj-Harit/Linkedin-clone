import React from 'react'
import './Widget.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widget() {

    const newsArticles = (heading, subtitle) =>{
        return(
            <div className="widgets_article">
                <div className="widgets_articleleft">
                    <FiberManualRecordIcon />
                </div>
                <div className="widgets_articleright">
                    <h4>{heading}</h4>
                    <p>{subtitle }</p>
                </div>
            </div>
        );
    }
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticles("Tesla","Top news --300 readers")}
            {newsArticles("Tesla","Top news --300 readers")}
            {newsArticles("Tesla","Top news --300 readers")}
            {newsArticles("Tesla","Top news --300 readers")}
            {newsArticles("Tesla","Top news --300 readers")}
            {newsArticles("Tesla","Top news --300 readers")}
            {newsArticles("Tesla","Top news --300 readers")}
            {newsArticles("Tesla","Top news --300 readers")}
            {newsArticles("Tesla","Top news --300 readers")}
            {newsArticles("Tesla","Top news --300 readers")}       
        </div>
    )
}

export default Widget;
