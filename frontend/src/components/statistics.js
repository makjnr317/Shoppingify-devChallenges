import React from 'react'
import "./statistics.css"
import { ResponsiveLine } from '@nivo/line'

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
              "x": "March",
              "y": 98
            },
            {
              "x": "April",
              "y": 50
            },
            {
              "x": "May",
              "y": 55
            },
            {
              "x": "June",
              "y": 80
            },
            {
              "x": "July",
              "y": 21
            }
          ]
        }
      ]
        
    return(
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 10, bottom: 50, left: 27 }}
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
    
	return(
		<div className="statistics">
			<TopItems/>
			<TopCategories/>
            <ChartBox/>
		</div>
	)
}