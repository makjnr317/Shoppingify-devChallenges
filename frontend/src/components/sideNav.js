import React from 'react'
import logo from "../images/logo.svg" 
import "./sideNav.css"
import { useLocation, Link } from 'react-router-dom';


function MenuItem({icon, title, curIcon}){
    const handleHover = () =>{
        document.querySelector(`.${icon}-placeholder`).style.display = "none"
        document.querySelector(`.icon-${icon}`).classList.add("hovered")
        document.querySelector(`.${icon}-title`).style.display = "grid"
    }

    const handleLeave = () =>{
        document.querySelector(`.${icon}-placeholder`).style.display = "block"
        document.querySelector(`.icon-${icon}`).classList.remove("hovered")
        document.querySelector(`.${icon}-title`).style.display = "none"
    }

    const handleClick = () =>{
        for (let i of document.querySelectorAll(`.menu-bar`)){
            i.style.background ="white"
        }
        document.querySelector(`.${icon}-menu-bar`).style.background ="#F9A109";
    }

    return(
        <div className="menu-item" onMouseOver={handleHover} onMouseLeave={handleLeave} onClick={handleClick}>
            <div className={`${icon}-menu-bar menu-bar`} style={{backgroundColor: (curIcon === icon)? "#F9A109" : "white"}}/>
            <span className={`material-icons icon-${icon}`}>{icon}</span>
            <div className={`title ${icon}-title`}><span className="triangle"></span>{title}</div>
            <div className={`${icon}-placeholder`}/>
        </div>
        
    )
}

export default function SideNav() {
    const location = useLocation().pathname
    let curIcon = (location === "/")? "list" : (location  === "/history")? "replay" : "poll"
    
    return (
        <div className="sideNav">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>

            <div className="menu">
                <Link to="/">
                    <MenuItem icon="list" title="items" curIcon={curIcon}/>
                </Link>

                <Link to="/history">
                    <MenuItem icon="replay" title="history" curIcon={curIcon}/>
                </Link>

                <Link to="/statistics">
                    <MenuItem icon="poll" title="statistics" curIcon={curIcon}/>
                </Link>
            </div>

            <div className="cart">
                <div className="shoppingCart">
                    <span className="material-icons">shopping_cart</span>
                </div>
            </div>
        </div>
    )
}
