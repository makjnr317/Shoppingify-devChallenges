import React, { useState, useEffect } from 'react'
import "./foodList.css"
import axios from 'axios'
import { setViewDetails, populate } from '../redux/actions'
import { useDispatch , useSelector} from 'react-redux'

function FoodItem({text, id, category}) {
	const dispatch = useDispatch()
	
	const handleClick = (id) =>{
		dispatch(populate(id, category))
		dispatch(setViewDetails())
	}

    return (
        <div className="food_item" onClick={() => handleClick(id,category)}>
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
				{food.map((foodItem,i)=> (<FoodItem key={i} text={foodItem.name} id={foodItem._id} category={category}/>))}
			</div>
		</div>
	)
}
 

export default function FoodList(){
	const dataWatcher = useSelector(state => state.dataWatcher)
	const [data, setData] = useState([])

	useEffect(() => {
		axios.get("http://localhost:7000/api/fooditems")
		.then(res => {setData(res.data)})
	},[dataWatcher])

	return(
		<div className="food_list">
			{data.map((category, i) => (<FoodCategory key={i} category={category.category} food={category.food}/> ))}
		</div>
	)
}