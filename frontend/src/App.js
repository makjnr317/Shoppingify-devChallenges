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
import {useSelector , useDispatch} from "react-redux"
import { Link } from 'react-router-dom'
import { historyToggle } from './redux/actions'


function SideBar(){
	const sideVIew = useSelector(state => state.sidebar)
	return(
		<div className="side_bar">
			{(sideVIew === "ShoppingList")? <ShoppingList/> :(sideVIew === "Input")? <Input/>: <ViewDetails/>}
		</div>
	)
}


function HistoryFoodCategory({category, food}){
	return(
		<div className="category">
			<h3>{category}</h3>
			<div className="food">
				{food.map((foodItem,i)=> (<FoodItemCount key={i} text={foodItem.name} count={foodItem.number}/>))}
			</div>
		</div>
	)
}

function FoodItemCount({text,count}) {
    return (
        <div className="food_itemCount">
            <p>{text}</p>
            <p className="itemsCount">{count} pcs</p>
        </div>
    )
}

function HistoryView(){
	const dispatch = useDispatch()
	const history = useSelector(state => state.history)
	return(
		<div className="historyView">
			<Link to="/history">
				<div className="back" onClick={()=> dispatch((historyToggle()))}>
					<span className="material-icons">trending_flat</span>
					<p>back</p>
				</div>
			</Link>
			<h4>{history.name}</h4>
			<div className="date">
			<span className="material-icons event_note">event_note</span>
				<p>{history.date}</p>
			</div>
			<div className="monthTabs">
			{history.list.map((category, i) => ((category.food.length > 0) && <HistoryFoodCategory key={i} category={category.category} food={category.food}/> ))}
			</div>
		</div>
	)
}


function App() {
	const modal = useSelector(state => state.modal)
	const history = useSelector(state => state.toggleHistory)

	return (
		<>
			<Router>
				<SideNav/>
				<Switch>
					<Route exact path="/">
						<Header/>
						<FoodList/>
					</Route>
					<Route path="/history">
						{(history) ? <HistoryView/>: <ShoppingHistory/>}
					</Route>
					<Route path="/statistics">
						<Statistics/>
					</Route>
				</Switch>
			</Router>
			
			<SideBar/>
			{modal && <Modal/>}
		</>
	);
}

export default App;
