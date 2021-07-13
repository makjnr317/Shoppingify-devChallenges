import React from 'react'
import logo from "./logo.svg" 
import svg2 from "./ic_replay_24px.svg"
import svg1 from "./ic_list_24px.svg"
import cart from "./shopping_cart_white_24dp.svg"

export default function SideNav() {
    return (
        <div className="sideNav">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="menu">
                <div className="menu-item">
                    <div className="menu-bar"/>
                    <img src={svg1} alt="svg-1"/>
                    <div/>
                </div>
                <div className="menu-item">
                    <div className="menu-bar"/>
                    <img src={svg2} alt="svg-2"/>
                    <div/>
                </div>
                <div className="menu-item">
                    <div className="menu-bar"/>
                    <div/>
                </div>
            </div>
            <div className="cart">
                <div className="shoppingCart">
                    <img src={cart} alt="cart"/>
                </div>
            </div>
        </div>
    )
}
