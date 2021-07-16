import React from 'react'
import "./shoppingList.css"

function ShoppingListItem({inde, count= "3", edit=!true}){
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
                {!edit && <input type="checkbox" class={`checbox-${inde}`} onChange={handleToggle}/>}
                <p className={`listItemName-${inde} listItemName`}>Avocado</p>
            </div>
            <div>
                <div className="modifyCountPlaceholder" onMouseOver={edit && handleHover} onMouseLeave={handleLeave}>
                    <div className={`modifyCount-${inde} modifyCount`}>
                        <div className="trashBox">
                        <span class="material-icons">delete_outline</span>
                        </div>
                        <span class="material-icons modify-count">add</span>
                        <div className="SlistItemCount">
                            {count} pcs
                        </div>
                        <span class="material-icons modify-count">add</span>
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

export default function ShoppingList(){
    return(
        <div className="shoppingList">
            <div className="shoppingListHeader">
                <h3>Shopping List</h3>
                <span class="material-icons edit-icon">edit</span>
            </div>
            <div className="shoppingListGrid">
                <ShoppingListCategory index ="0"/>
                <ShoppingListCategory index ="1"/>
                <ShoppingListCategory index ="2"/>
            </div>
        </div>
    )
}