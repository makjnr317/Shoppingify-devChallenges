import React from 'react'
import "./shoppingList.css"
import sauce from "../images/source.svg"
import empty from "../images/undraw_shopping_app_flsj 1.svg"
import {useSelector, useDispatch} from "react-redux"
import {setEdit ,setInput, toggleModal} from "../redux/actions"

function AddItem(){
    const dispatch = useDispatch()
	return(
		<div className="add_item">
			<div>
				<img src={sauce} alt="sauce"/>
			</div>
			<div>
				<p>Didn’t find what you need?</p>
				<div className="add_item_button" onClick={() => dispatch(setInput())}>
					<span>Add Item</span>
				</div>
			</div>
		</div>
	)
}

function SaveListEdit({empty}){
	return(
		<div className="SaveList">
			<div className={`${(empty)? "border-gray ": ""}ListNameSave`}>
				<input type="text" placeholder="Enter a name"/>
				<div className={`${(empty)? "button-gray ": ""}SaveListButton`}>
					Save
				</div>
			</div>
		</div>
	)
}


function ShoppingListItem({inde, count= "3"}){
    const edit = useSelector(state => state.edit)
    var dynamicElement = `.modifyCount-${inde}`
    var listItemName = `.listItemName-${inde}`
    var checkbox = `.checbox-${inde}`

    const handleHover = (inde) =>{ 
        document.querySelector(dynamicElement).style.display = "flex";
    }

    const handleLeave = (inde) =>{ 
        document.querySelector(dynamicElement).style.display = "none";
    }

    const handleToggle = () =>{
        if (document.querySelector(checkbox).checked){
            document.querySelector(listItemName).style.textDecoration = "line-through";
        }
        else{
            document.querySelector(listItemName).style.textDecoration = "initial";
        }
        
    }

    return(

        <div className="shoppingListItem">
            <div>
                {!edit && <input type="checkbox" className={`checbox-${inde}`} onChange={handleToggle}/>}
                <p className={`listItemName-${inde} listItemName`}>Avocado</p>
            </div>
            <div>
                <div className="modifyCountPlaceholder" onMouseOver={(edit)? handleHover: undefined} onMouseLeave={handleLeave}>
                    <div className={`modifyCount-${inde} modifyCount`}>
                        <div className="trashBox">
                        <span className="material-icons">delete_outline</span>
                        </div>
                        <span className="material-icons modify-count">add</span>
                        <div className="SlistItemCount">
                            {count} pcs
                        </div>
                        <span className="material-icons modify-count">remove</span>
                    </div>
                </div>
                
                <div className="SlistItemCount">
                    {count} pcs
                </div>
            </div>
        </div>
    )
}

function ShoppingListCategory({index}){
    return(
        <div className="shoppinglistcategory">
            <h4 className="categoryheading">Fruits & Vegetables</h4>
            <div className="sListItemGrid">
                <ShoppingListItem inde={`${index}-0`}/>
                <ShoppingListItem inde={`${index}-1`}/>
            </div>
        </div>
    )
}

function EmptyList(){
	return(
		<div className="empty_list">
			<div/>
			<p>No items</p>
			<figure>
				<img src={empty} alt="empty cart"/>
			</figure>
		</div>

	)
}

function NonEmptyList(){
    const dispatch = useDispatch()
    return(
        <div className="shoppingList">
            <div className="shoppingListHeader">
                <h3>Shopping List</h3>
                <span className="material-icons edit-icon" onClick={() => dispatch(setEdit())}>edit</span>
            </div>
            <div className="shoppingListGrid">
                <ShoppingListCategory index ="0"/>
                <ShoppingListCategory index ="1"/>
                <ShoppingListCategory index ="2"/>
            </div>
        </div>
    )
}

function SaveList(){
    const dispatch = useDispatch()
    return(
        <div className="SaveList">
			<div className="saveButtons">
				<div className="cancel"  onClick={()=> dispatch(toggleModal())}>cancel</div>
				<div className="complete">Complete</div>
			</div>
		</div>
    )
}

export default function ShoppingList(){
    const edit = useSelector(state => state.edit)

    var empty = false
    return(
        <>
            <AddItem/>
            {(empty)? <EmptyList/>: <NonEmptyList/>}
            {(edit)? <SaveListEdit empty={empty}/> : <SaveList/>}
        </>
    )
}