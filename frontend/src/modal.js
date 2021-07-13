import React from 'react'
import "./modal.css"

export default function Modal(){
	return(
		<div className='modal'>
			<div className='modalContent'>
				<p>Are you sure that you want to cancel this list?</p>
				<div className="modalButtons">
					<div className="modalCancel">
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