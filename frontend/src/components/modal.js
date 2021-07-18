import React from 'react'
import "./modal.css"
import {useDispatch} from "react-redux"
import {toggleModal} from "../redux/actions"

export default function Modal(){
	const dispatch = useDispatch()
	return(
		<div className='modal'>
			<div className='modalContent'>
				<p>Are you sure that you want to cancel this list?</p>
				<div className="modalButtons">
					<div className="modalCancel" onClick={()=> dispatch(toggleModal())}>
						Cancel
					</div>
					<div className="modalApprove">
						Yes
					</div>
				</div>
			</div>
		</div>
	)
}