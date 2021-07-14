import React from 'react'
import "./shoppingList.css"

function ShoppingListItem({count= "3"}){
    return(
        <div className="shoppingListItem">
            <p className="listItemName">Avocado</p>
            <div className="modifyCount">
                <div className="trashBox">

                </div>
                <span class="material-icons">add</span>
                <div className="SlistItemCount">
                    {count} pcs
                </div>
                <span class="material-icons">add</span>
            </div>
            <div className="SlistItemCount">
                    {count} pcs
                </div>
        </div>
    )
}

function ShoppingListCategory(){
    return(
        <div className="shoppinglistcategory">
            <h4 className="categoryheading">Fruits & Vegetables</h4>
            <div className="sListItemGrid">
                <ShoppingListItem/>
                <ShoppingListItem/>
            </div>
            
        </div>
    )
}

export default function ShoppingList(){
    return(
        <div className="shoppingList">
            <h3>Shopping List</h3>
            <div className="shoppingListGrid">
                <ShoppingListCategory/>
                <ShoppingListCategory/>
            </div>
        </div>
    )
}