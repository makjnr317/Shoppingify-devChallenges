import React, { useState, useEffect } from 'react'
import "./viewDetails.css"
import { useSelector, useDispatch  } from 'react-redux'
import axios from 'axios'
import { setShoppingList } from '../redux/actions'

function Note({note}){
	return(
		<div>
			<h3 className="detailsHeading">note</h3>
			<p className="note">{note}</p>
		</div>
	)
}

export default function ViewDetails(){
	const dispatch = useDispatch()
	var viewData = useSelector(state => state.viewData)
	const [data, setdata] = useState({})

	useEffect(() => {
		if (!(viewData === {})){
			axios.get(`http://localhost:7000/api/fooditems/${viewData.id}`)
			.then(res => {setdata(res.data)})
		}
	},[viewData])

	return (
		<div className="viewFoodDetails">
			<div className="back" onClick={() => dispatch(setShoppingList())}>
				<span className="material-icons">trending_flat</span>
				<p>back</p>
			</div>
			<div>
				{(data.image !== undefined) && <img className="detailsPhoto" src={data.image} alt="food"/>}
				<div>
					<h3 className="detailsHeading">name</h3>
					<p className="name">{data.name ?? ""}</p>
				</div>
				<div>
					<h3 className="detailsHeading">category</h3>
					<p className="category">{viewData.category}</p>
				</div>
				{(data.note !== undefined) && <Note note={data.note}/>}
			</div>
			<div className="buttons">
				<div className="delete">Delete</div>
				<div className="addtolist">Add To List</div>
			</div>
		</div>
	)
}