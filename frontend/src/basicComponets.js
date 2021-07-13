import React from 'react'
import search from "./search_black_24dp.svg" 

export function Header(){
	return(
		<header>
			<h1><span>Shoppingify</span> allows you take your shopping llist wherever you go</h1>
			<div className="search">
				<img src={search} alt="search icon"/>
				<input type="text" placeholder="seach item"/>
			</div>
		</header>
	)
}

export function StatusBar({status}){
	const cancel = status === "cancelled"
	return(
		<div className={`status ${cancel && 'cancelled'}`} >
			Completed
		</div>
	)
}