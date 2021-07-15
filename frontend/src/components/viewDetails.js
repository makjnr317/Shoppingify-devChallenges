import React from 'react'
import "./viewDetails.css"
function Note({note}){
	return(
		<div>
			<h3 className="detailsHeading">note</h3>
			<p className="note">{note}</p>
		</div>
	)
}

export default function ViewDetails({url="https://www.verywellhealth.com/thmb/bPIm5bxknxQllBD3VFok_pb647s=/2077x1443/filters:no_upscale():max_bytes(150000):strip_icc()/avocadosGettyImages-961101662-5b9eda1bc9e77c0050a7fafa.jpg",name="Avocado", category="Fruits & Vegetables", note="Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice."}){
	return (
		<div className="viewFoodDetails">
			<dic className="back">
				<span class="material-icons">trending_flat</span>
				<p>back</p>
			</dic>
			<div>
				{(url !== "") && <img className="detailsPhoto" src={url} alt="food"/>}
				<div>
					<h3 className="detailsHeading">name</h3>
					<p className="name">{name}</p>
				</div>
				<div>
					<h3 className="detailsHeading">category</h3>
					<p className="category">{category}</p>
				</div>
				{(note !== "") && <Note note={note}/>}
			</div>
			<div className="buttons">
				<div className="delete">Delete</div>
				<div className="addtolist">Add To List</div>
			</div>
		</div>
	)
}