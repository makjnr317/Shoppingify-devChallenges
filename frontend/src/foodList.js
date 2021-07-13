import React from 'react'
import add from "./add_black_24dp.svg"
import "./food_item.css"

function FoodItem({text}) {
    return (
        <div className="food_item">
            {text}
            <img src={add} alt="add item"/>
        </div>
    )
}

function FoodCategory({category}){
	return(
		<div className="category">
			<h3>Fruits & Vegetables</h3>
			<div className="food">
				<FoodItem text="Avocado"/>
				<FoodItem text="Avocado"/>
				<FoodItem text="Avocado"/>
				<FoodItem text="Avocado"/>
				<FoodItem text="Avocado"/>
			</div>
		</div>
	)
}

export default function FoodList(){
	return(
		<div className="food_list">
			<FoodCategory/>
			<FoodCategory/>
		</div>
	)
}