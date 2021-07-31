import React, { useState, useEffect } from 'react'
import "./foodList.css"
import axios from 'axios'
import { setViewDetails, populate , addItem, itemNumberChange, setCategories} from '../redux/actions'
import { useDispatch , useSelector} from 'react-redux'

function FoodItem({text, id, category}) {
	const dispatch = useDispatch()
	const list = useSelector(state => state.shoppingList)

	var categories, iteminList
	const handleAdd = () =>{
		iteminList = false
		categories = list.items.filter(x => x.category === category)

		if (categories.length === 0){
			dispatch(addItem(category, text, id))
			return
		}

		categories[0].food.forEach(el =>{
			if (el.foodItemId === id){
				dispatch(itemNumberChange(category, id, 1))
				iteminList = true
			}
		})
		if (!iteminList){

		dispatch(addItem(category, text, id))
		}
	}

	const handleClick = (event, id) =>{
		if (document.querySelector(`#${text.replace(/ /g, "")}`) === event.target){
			dispatch(populate(id, category))
			dispatch(setViewDetails())
		}
	}

    return (
        <div className="food_item" id={text.replace(/ /g, "")} onClick={(event) => handleClick(event,id)}>
            {text}
			<span className="material-icons add-icon" onClick={handleAdd}>add</span>
        </div>
    )
}

function FoodCategory({category,food}){
	const search = useSelector(state => state.search)
	const categoryContains = food.map(x => x.name.toLowerCase().includes(search.toLowerCase().trim()))
	
	if (categoryContains.reduce((a,b) => a || b, false)){
		return(
			<div className="category">
				<h3>{category}</h3>
				<div className="food">
					{food.map((foodItem,i)=> (categoryContains[i] && <FoodItem key={i} text={foodItem.name} id={foodItem._id} category={category}/>))}
				</div>
			</div>
		)
	}
	
	return (
		<></>
	)
}
 

export default function FoodList(){
	const dispatch = useDispatch()
	const dataWatcher = useSelector(state => state.dataWatcher)
	const [data, setData] = useState([])
	const search = useSelector(state => state.search)
	const categories = data.map(x => x.category)
	dispatch(setCategories(categories))

	useEffect(() => {
		axios.get("http://localhost:7000/api/fooditems")
		.then(res => {setData(res.data)})
	},[dataWatcher])


	var s = ((data.map(x=> x.food.map(x => x.name)).reduce((a, b)=> a + b, []))) + ''
	s = s.split(",")
	const searchValid = ((s.map(x=> x.toLowerCase().includes(search.trim().toLowerCase()))).reduce((a,b) => a || b, false))
	
	if (data === undefined){
		return (
			<div className="loadingFood">
				Loading...
			</div>
		)
	}


	if (searchValid){
		return(
			<div className="food_list">
				{data.map((category, i) => ((category.food.length > 0) && <FoodCategory key={i} category={category.category} food={category.food}/> ))}
			</div>
		)
	}

	if (!(search.trim() === "")){
		return(
			<div className="noFoodItem">
				<p>Search invalid. Add new item or make a new search</p>
			</div>
		)
	}
	
	return(
		<div className="noFoodItem">
			<p>Nothing to show. Add items to database.</p>
		</div>
	)
	
	
}