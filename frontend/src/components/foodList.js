import React, { useState, useEffect } from 'react'
import "./foodList.css"
import axios from 'axios'
import { setViewDetails } from '../redux/actions'
import { useDispatch } from 'react-redux'

function FoodItem({text, id}) {
	const dispatch = useDispatch()
    return (
        <div className="food_item" data-id={id} onClick={() => dispatch(setViewDetails())}>
            {text}
			<span className="material-icons add-icon">add</span>
        </div>
    )
}

function FoodCategory({category,food}){
	return(
		<div className="category">
			<h3>{category}</h3>
			<div className="food">
				{food.map(foodItem => (<FoodItem text={foodItem.name} id={foodItem._id}/>))}
			</div>
		</div>
	)
}



export default function FoodList(){
	const [data, setData] = useState([])

	useEffect(() => {
		axios.get("http://localhost:7000/api/fooditems")
		.then(res => {setData(res.data)})
	},[])
	console.log(data)
	return(
		<div className="food_list">
			{data.map(category => (<FoodCategory category={category.category} food={category.food}/> ))}
		</div>
	)
}