import React, { useState, useEffect } from 'react'
import "./viewDetails.css"
import { useSelector, useDispatch  } from 'react-redux'
import axios from 'axios'
import { setShoppingList , dataUpdate, addItem, itemNumberChange} from '../redux/actions'

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
	const [category, setcategory] = useState("")
	const list = useSelector(state => state.shoppingList)
	var categories, iteminList

	useEffect(() => {
		if (!(viewData === {})){
			axios.get(`http://localhost:7000/api/fooditems/${viewData.id}`)
			.then(res => {
				setdata(res.data)
				setcategory(viewData.category)
			})
		}
	},[viewData])

	const del = (id) =>{
		axios.delete(`http://localhost:7000/api/fooditems/${id}`)
		.then(() =>{
			dispatch(setShoppingList())
			dispatch(dataUpdate())
		})
		.catch(err => console.log(err))
	}

	const handleAdd = (text, id) =>{
		iteminList = false
		categories = list.items.filter(x => x.category === category)

		if (categories.length === 0){
			dispatch(addItem(category, text, id))
			dispatch(setShoppingList())
			return
		}

		categories[0].food.forEach(el =>{
			if (el.foodItemId === id){
				dispatch(itemNumberChange(category, id, 1))
				dispatch(setShoppingList())
				iteminList = true
			}
		})
		if (!iteminList){
			dispatch(addItem(category, text, id))
			dispatch(setShoppingList())
		}
	}

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
					<p className="category">{category}</p>
				</div>
				{(data.note !== undefined) && <Note note={data.note}/>}
			</div>
			<div className="buttons">
				<div className="delete" onClick={() => del(viewData.id)}>Delete</div>
				<div className="addtolist" onClick={() => handleAdd(data.name,viewData.id)}>
					Add To List
				</div>
			</div>
		</div>
	)
}