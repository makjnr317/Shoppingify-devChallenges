import React from 'react'
import "./shoppingHistrory.css"

export function StatusBar({status}){
	const cancel = status === "cancelled"
	return(
		<div className={`status ${cancel && 'cancelled'}`} >
			Completed
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
				<span className="material-icons event_note">event_note</span>
				<p>Mon 27.8.2020</p>
				<StatusBar status="cancelled"/>
				<span className="material-icons chevron_right">chevron_right</span>
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


export default function ShoppingHistory(){
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