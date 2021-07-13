import './App.css';
import SideNav from "./sideNav"
import { Fragment } from 'react';
import sauce from "./source.svg"
import empty from "./undraw_shopping_app_flsj 1.svg"
import calender from"./event_note_black_24dp (1).svg"
import click from "./chevron_right_black_24dp.svg"
import Modal from "./modal"
import {Header, StatusBar} from "./basicComponets"
import ViewDetails from "./viewDetails"
import FoodList from "./foodList"
import Input from "./input"
import ShoppingList from "./shoppingList"

function SideBar(){
	return(
		<div className="side_bar">
			<AddItem/>
			{/*
			<EmptyList/>
			<SaveList/>
			<ViewDetails/>*/}
			<ShoppingList/>
		</div>
	)
}

function AddItem(){
	return(
		<div className="add_item">
			<div>
				<img src={sauce} alt="sauce"/>
			</div>
			<div>
				<p>Didn’t find what you need?</p>
				<div className="add_item_button">
					<span>Add Item</span>
				</div>
			</div>
		</div>
	)
}

function EmptyList(){
	return(
		<div className="empty_list">
			<div/>
			<p>No items</p>
			<figure>
				<img src={empty} alt="empty cart"/>
			</figure>
		</div>

	)
}

function SaveList(){
	return(
		<div className="SaveList">
			<div className="ListNameSave">
				<input type="text" placeholder="Enter a name"/>
				<div className="SaveListButton">
					Save
				</div>
			</div>
		</div>
	)
}


function ShoppingHistory(){
	return(
		<div className="shoppingHistory">
			<h3 className="shoppingHistoryHeader">Shopping history</h3>
			<div className="monthTabs">
				<MonthHistory/>
				<MonthHistory/>
			</div>
		</div>
	)
}


function HistoryTab(){
	return(
		<div className="historyTab">
			<div className="tabName">
				<p>Grocery List</p>
			</div>
			<div>
				<img src={calender} alt="calender"/>
				<p>Mon 27.8.2020</p>
				<StatusBar status="cancelled"/>
				<img src={click} alt="click"/>
			</div>
		</div>
	)
}

function MonthHistory(){
	return(
		<div className="monthHitory">
			<h4 className="monthHitoryHeader">August 2020</h4>
			<div className="tabs">
				<HistoryTab/>
				<HistoryTab/>
			</div>
		</div>
	)
}

function HistoryFoodCategory({category}){
	return(
		<div className="category">
			<h3>Fruits & Vegetables</h3>
			<div className="food">
				<FoodItemCount text="Avocadreg erago"/>
				<FoodItemCount text="Avocado"/>
				<FoodItemCount text="Avocado"/>
				<FoodItemCount text="Avocado"/>
				<FoodItemCount text="Avocado"/>
			</div>
		</div>
	)
}

function FoodItemCount({text}) {
    return (
        <div className="food_itemCount">
            <p>{text}</p>
            <p className="itemsCount">3 pcs</p>
        </div>
    )
}

function HistoryView(){
	return(
		<div className="historyView">
			<h4>Eero’s farewell party</h4>
			<div className="date">
				<img src={calender} alt="calender"/>
				<p>Mon 27.8.2020</p>
			</div>
			<div className="monthTabs">
				<HistoryFoodCategory/>
				<HistoryFoodCategory/>
			</div>
		</div>
	)
}


function StatsRow(){
	return(
		<div className="statsRow">
			<div>
				<p>Banana</p>
				<p>20%</p>
			</div>
			<div className="background">
				<div className="value"></div>
			</div>
		</div>
	)
}


function Stats(){
	return(
		<div>
			<StatsRow/>
			<StatsRow/>
			<StatsRow/>
		</div>
	)
}

function TopItems(){
	return(
		<div className="topItems">
			<h4 className="statsHeader">Top Items</h4>
			<Stats/>
		</div>
	)
}

function TopCategories(){
	return(
		<div className="topCategories">
			<h4 className="statsHeader">Top Categories</h4>
			<Stats/>
		</div>
	)
}

function Chart(){
	return(
		<div>
			
		</div>
	)
}

function Statistics(){
	return(
		<div className="statistics">
			<TopItems/>
			<TopCategories/>
			<Chart/>
		</div>
	)
}



function App() {
	return (
		<Fragment>
			<SideNav/>
			{/*
			<HistoryView/>

			<ShoppingHistory/>
			<Statistics/>
			<Input/>*/}
			<Header/>
			<FoodList/>
			<SideBar/>
			<Modal/>
		</Fragment>
	);
}

export default App;
