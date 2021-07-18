import './App.css';
import SideNav from "./components/sideNav"
import Modal from "./components/modal"
import {Header} from "./components/header"
import ViewDetails from "./components/viewDetails"
import FoodList from "./components/foodList"
import Input from "./components/input"
import ShoppingList from "./components/shoppingList"
import { BrowserRouter as Router } from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import ShoppingHistory from "./components/ShopingHistory"
import Statistics from "./components/statistics"

function SideBar(){
	return(
		<div className="side_bar">
			{/*
				
			
			<ViewDetails/>
			<Input/>
			*/}

			<ShoppingList/>
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
			<div className="back">
				<span className="material-icons">trending_flat</span>
				<p>back</p>
			</div>
			<h4>Eero’s farewell party</h4>
			<div className="date">
			<span className="material-icons event_note">event_note</span>
				<p>Mon 27.8.2020</p>
			</div>
			<div className="monthTabs">
				<HistoryFoodCategory/>
				<HistoryFoodCategory/>
			</div>
		</div>
	)
}


function App() {
	return (
		<>
			{/*
			<HistoryView/>
			<ViewDetails/>
			*/}
			<Router>
				<SideNav/>
				<Switch>
					<Route exact path="/">
						<Header/>
						<FoodList/>
					</Route>
					<Route path="/history">
						{/*<ShoppingHistory/>*/}
						<HistoryView/>
					</Route>
					<Route path="/statistics">
						<Statistics/>
					</Route>
				</Switch>
			</Router>
			
			<SideBar/>
			<Modal/>
		</>
	);
}

export default App;
