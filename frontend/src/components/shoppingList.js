import React, { useState } from 'react'
import "./shoppingList.css"
import sauce from "../images/source.svg"
import empty from "../images/undraw_shopping_app_flsj 1.svg"
import {useSelector, useDispatch} from "react-redux"
import {setEdit ,setInput, toggleModal, alterName, addItem, itemNumberChange,itemRemove} from "../redux/actions"

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
    const [name, setname] = useState("")
    const dispatch = useDispatch()

	return(
		<div className="SaveList">
			<div className={`${(empty)? "border-gray ": ""}ListNameSave`}>
				<input type="text" placeholder="Enter a name" value={name} onChange={(event) => setname(event.target.value)}/>
				<div className={`${(empty)? "button-gray ": ""}SaveListButton`} onClick={() => {dispatch(alterName(name)); setname("")}}>
					Save
				</div>
			</div>
		</div>
	)
}


function ShoppingListItem({index, name ,count, id, category}){
    const dispatch = useDispatch()
    const edit = useSelector(state => state.edit)
    var dynamicElement = `.modifyCount-${index}`
    var listItemName = `.listItemName-${index}`
    var checkbox = `.checbox-${index}`
    const _id = id

    const handleHover = () =>{ 
        document.querySelector(dynamicElement).style.display = "flex";
    }

    const handleLeave = () =>{ 
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
                {!edit && <input type="checkbox" className={`checbox-${index}`} onChange={handleToggle}/>}
                <p className={`listItemName-${index} listItemName`}>{name}</p>
            </div>
            <div>
                <div className="modifyCountPlaceholder" onMouseOver={(edit)? handleHover: undefined} onMouseLeave={handleLeave}>
                    <div className={`modifyCount-${index} modifyCount`}>
                        <div className="trashBox">
                        <span className="material-icons" onClick={()=> dispatch(itemRemove(category, id))}>delete_outline</span>
                        </div>
                        <span className="material-icons modify-count" onClick={() => {
                            dispatch(itemNumberChange(category, id, 1))
                            }}>add</span>
                        <div className="SlistItemCount">
                            {count} pcs
                        </div>
                        <span className="material-icons modify-count"  
                            onClick={() => {
                                if (count > 1){
                                    dispatch(itemNumberChange(category, id, -1))
                                }else{
                                    dispatch(itemRemove(category, id))
                                }
                            }}>
                            remove</span>
                    </div>
                </div>
                
                <div className="SlistItemCount">
                    {count} pcs
                </div>
            </div>
        </div>
    )
}

function ShoppingListCategory({category, food}){
    return(
        <div className="shoppinglistcategory">
            <h4 className="categoryheading">{category}</h4>
            <div className="sListItemGrid">
                {food.map((foodItem, i) => (<ShoppingListItem key={i} index={`${category}-${i}`} name={foodItem.name} count={foodItem.number} id={foodItem.foodItemId} category={category}/>))}
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

function NonEmptyList({name, items}){
    const dispatch = useDispatch()

    return(
        <div className="shoppingList">
            <div className="shoppingListHeader">
                <h3>{name}</h3>
                <span className="material-icons edit-icon" onClick={() => dispatch(setEdit())}>edit</span>
            </div>
            <div className="shoppingListGrid">
                {items.map((category, i) => ( (category.food.length > 0) && <ShoppingListCategory key={i} food={category.food} category={category.category}/>))}
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
    const list = useSelector(state => state.shoppingList)

    const empty = list.items.length === 0
    return(
        <>
            <AddItem/>
            {(empty)? <EmptyList/>: <NonEmptyList name={list.name} items={list.items}/>}
            {(empty)? <SaveListEdit empty={empty}/>: (edit)? <SaveListEdit empty={empty}/>: <SaveList/>}
        </>
    )
}