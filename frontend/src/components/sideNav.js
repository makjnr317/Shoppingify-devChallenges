import React from 'react'
import logo from "../images/logo.svg" 
import "./sideNav.css"

export default function SideNav() {
    return (
        <div className="sideNav">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="menu">
                <div className="menu-item">
                    <div className="menu-bar"/>
                        <span class="material-icons">list</span>
                    <div/>
                </div>
                <div className="menu-item">
                    <div className="menu-bar"/>
                        <span class="material-icons">replay</span>
                    <div/>
                </div>
                <div className="menu-item">
                    <div className="menu-bar"/>
                        <span class="material-icons">poll</span>
                    <div/>
                </div>
            </div>
            <div className="cart">
                <div className="shoppingCart">
                <span class="material-icons" style={{color:"white"}}>shopping_cart</span>
                </div>
            </div>
        </div>
    )
}
