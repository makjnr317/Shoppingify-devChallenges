import React from 'react'
import "./modal.css"
import {useDispatch, useSelector} from "react-redux"
import {toggleModal, clearList} from "../redux/actions"
import axios from 'axios'

export default function Modal(){
	const dispatch = useDispatch()
    var list = useSelector(state => state.shoppingList)

	const modalClick = (event) => {
		if (event.target === document.querySelector(".modal")){
			dispatch(toggleModal())
		}
	}

	const handleClick = () =>{
        list = {
            ...list,
            "status": "Cancelled"
        }

        axios({
            method: "post",
            url: "http://localhost:7000/api/history",
            data: list,
            headers: { "Content-Type": "application/json" },
        })
		.then(()=>{
			dispatch(clearList())
			dispatch(toggleModal())
		})
    }

	return(
		<div className='modal'  onClick={(event) => modalClick(event)}>
			<div className='modalContent'>
				<div className="modalHeader">
					<p>Are you sure that you want to cancel this list?</p>
					<span className="material-icons" onClick={handleClick}>close</span>
				</div>
				<div className="modalButtons">
					<div className="modalCancel" onClick={()=> dispatch(toggleModal())}>
						Cancel
					</div>
					<div className="modalApprove" onClick={handleClick}>
						Yes
					</div>
				</div>
			</div>
		</div>
	)
}