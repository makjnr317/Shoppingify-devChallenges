import React, { useState, useEffect } from 'react'
import "./statistics.css"
import { ResponsiveLine } from '@nivo/line'
import axios from "axios"
import { useSelector } from 'react-redux'

function StatsRow({name, value}){
	const statsStyle ={
		width: `${value}%`
	}

	return(
		<div className="statsRow">
			<div>
				<p>{name}</p>
				<p>{value}%</p>
			</div>
			<div className="background">
				<div className="value" style={statsStyle}></div>
			</div>
		</div>
	)
}


function Stats({data,total,stats}){

	if (total){
		return(
			<div>
				<StatsRow value={Math.floor(data[stats[0]]/total * 100)} name={stats[0]}/>
				<StatsRow value={Math.floor(data[stats[1]]/total * 100)}  name={stats[1]}/>
				<StatsRow value={Math.floor(data[stats[2]]/total * 100)}  name={stats[2]}/>
			</div>
		)
	}
	
	return(
		<div className="loading">
			Loading...
		</div>
	)
}

function TopItems({data}){
	var total, stats
	try{
		stats = (Object.keys(data).sort(function(a,b){return data[a] - data[b]})).slice(Object.values(data).length - 3).reverse()
		total = Object.values(data).reduce((a,b) => a + b, 0)
	}
	catch{
		console.log(null)
	}
	
	
	return(
		<div className="topItems">
			<h4 className="statsHeader">Top Items</h4>
			<Stats data={data} total={total} stats={stats}/>
		</div>
	)
	

	
}

function TopCategories({data}){
	var total, stats
	try{
		stats = (Object.keys(data).sort(function(a,b){return data[a] - data[b]})).slice(Object.values(data).length - 3).reverse()
		total = Object.values(data).reduce((a,b) => a + b, 0)
	}
	catch{
		console.log(null)
	}
	
	return(
		<div className="topCategories">
			<h4 className="statsHeader">Top Categories</h4>
			<Stats data={data} total={total} stats={stats}/>
		</div>
	)
}

function Chart(){

    const data = [
        {
          "id": "items",
          "color": "hsl(2, 70%, 50%)",
          "data": [
            {
              "x": "January",
              "y": 100
            },
            {
              "x": "February",
              "y": 51
            },
            {
              "x": "Februar",
              "y": 51
            },
            {
              "x": "Februry",
              "y": 51
            }
          ]
        }
      ]

	if (data[0].data.length < 3){
		return(
			<div className="noChartData">
				<p>Not enough data to make graph</p>
			</div>
		)
	}
        
    return(
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 30, bottom: 50, left: 30 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 0, max: 'auto', stacked: true, reverse: false }}
          axisTop={null}
          axisRight={null}
          curve = "natural"
          axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'items',
              legendOffset: 36,
              legendPosition: 'middle'
          }}
          axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickValues: 3,
              tickRotation: 0,
              legend:null,
          }}
          pointSize={0}
        /> 
    );
}


function ChartBox(){
	return(
		<div className="chartBox">
			<h6 className="chartHeading">Monthly Summary</h6>
            <Chart/>
		</div>
	)
}

export default function Statistics(){
	const statsUpdate = useSelector(state => state.statsUpdate)
	const [data, setdata] = useState("")


	useEffect(() => {
		axios.get("http://localhost:7000/api/statistics")
		.then(res => setdata(res.data))
		.catch(err => console.log(err))
	}, [statsUpdate])

	return(
		<div className="statistics">
			<TopItems data={data.foods}/>
			<TopCategories data={data.categories}/>
            <ChartBox data={data.months}/>
		</div>
	)
}