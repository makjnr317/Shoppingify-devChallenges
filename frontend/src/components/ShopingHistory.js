import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./shoppingHistrory.css"
import { useSelector , useDispatch} from 'react-redux'
import { historyToggle , setHistory} from '../redux/actions'

export function StatusBar({status}){
	const cancel = status === "Cancelled"
	return(
		<div className={`status ${cancel && 'cancelled'}`} >
			{(cancel)? "Cancelled": "Completed"}
		</div>
	)
}

function HistoryTab({name,status, date, items}){
	const d = new Date(date)
	const dispatch = useDispatch()
	const days= ["Sun", "Mon", "Tue", "Wed", "Thu","Fri","Sat"]
	const newDate = days[d.getDay()] + " " + d.getDay() + "." + (parseInt(d.getMonth()) + 1) + "." + d.getFullYear()
	
	return(
		<div className="historyTab"  onClick={()=> {
			dispatch((historyToggle()))
			dispatch(setHistory(name, newDate, items))
		}}>
			<div className="tabName">
				<p>{name}</p>
			</div>
			<div>
				<span className="material-icons event_note">event_note</span>
				<p>{newDate}</p>
				<StatusBar status={status}/>
				<span className="material-icons chevron_right">chevron_right</span>
			</div>
		</div>
	)
}

function MonthHistory({month, entries}){
	return(
		<div className="monthHistory">
			<h4 className="monthHitoryHeader">{month}</h4>
			<div className="tabs">
				{entries.map((entry, i) => <HistoryTab key={i} date={entry.date} status={entry.status} name={entry.name} items={entry.items}/>)}
			</div>
		</div>
	)
}


export default function ShoppingHistory(){
    const changeHistory = useSelector(state => state.changeHistory)
	const [history, sethistory] = useState([])
	const monthNames = ["January", "February", "March", "April", "May", "June",
						"July", "August", "September", "October", "November", "December"
						];

	useEffect(() => {
		axios.get("http://localhost:7000/api/history")
		.then(res => sethistory(res.data))
		.catch(err => console.log(err))
	}, [changeHistory])

	const historyMonths = [...(new Set(history.map(x => x.date.substr(0,7))))].reverse()

	var entries, monthf
	return(
		<div className="shoppingHistory">
			<h3 className="shoppingHistoryHeader">Shopping history</h3>
			<div className="monthTabs monthTabsHistory">
				{
					historyMonths.map((month, i) =>{
						try{
							monthf = monthNames[parseInt(month.substr(5,8)) - 1] + " " + month.substr(0,4)
							entries = history.filter(entry => entry.date.substr(0,7) === month)
						}
						catch{
							console.log(null)
							return <></>
						}
						return <MonthHistory key={i} month={monthf} entries={entries.reverse()}/>
					})
						
				}
			</div>
		</div>
	)
}