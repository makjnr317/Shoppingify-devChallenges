import React from 'react'
import "./header.css"
import { setSearch } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'

export function Header(){
	const search = useSelector(state => state.search)
	const dispatch = useDispatch()
	return(
		<header>
			<h1><span>Shoppingify</span> allows you take your shopping llist wherever you go</h1>
			<div className="search">
				<span className="material-icons">search</span>
				<input type="text" placeholder="search item" value={search} onChange={(event)=> dispatch(setSearch(event.target.value))}/>
			</div>
		</header>
	)
}

