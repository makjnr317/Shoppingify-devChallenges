import React from 'react'
import "./statistics.css"

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

function ChartBox(){
	return(
		<div className="chartBox">
			<h6 className="chartHeading">Monthly Summary</h6>
		</div>
	)
}

export default function Statistics(){
	return(
		<div className="statistics">
			<TopItems/>
			<TopCategories/>
			<ChartBox/>
		</div>
	)
}