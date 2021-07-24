import React from 'react'
import "./modal.css"
import {useDispatch} from "react-redux"
import {toggleModal, clearList} from "../redux/actions"

export default function Modal(){
	const dispatch = useDispatch()

	const modalClick = (event) => {
		if (event.target === document.querySelector(".modal")){
			dispatch(toggleModal())
		}
	}

	return(
		<div className='modal'  onClick={(event) => modalClick(event)}>
			<div className='modalContent'>
				<div className="modalHeader">
					<p>Are you sure that you want to cancel this list?</p>
					<span class="material-icons" onClick={() => dispatch(toggleModal())}>close</span>
				</div>
				<div className="modalButtons">
					<div className="modalCancel" onClick={()=> dispatch(toggleModal())}>
						Cancel
					</div>
					<div className="modalApprove" onClick={() => {
						dispatch(clearList())
						dispatch(toggleModal())
					}}>
						Yes
					</div>
				</div>
			</div>
		</div>
	)
}