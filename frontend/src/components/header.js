import React from 'react'
import "./header.css"
export function Header(){
	return(
		<header>
			<h1><span>Shoppingify</span> allows you take your shopping llist wherever you go</h1>
			<div className="search">
				<span class="material-icons">search</span>
				<input type="text" placeholder="seach item"/>
			</div>
		</header>
	)
}
