import {combineReducers} from "redux"

const edit = (state=false, action) =>{
    switch(action.type){
        case "TOGGLE_EDIT":
            return !state
        default:
            return state
    }
}

const sidebar = (state="ShoppingList", action) =>{
    switch(action.type){
        case "SHOPPING_LIST":
            return "ShoppingList"
        case "INPUT":
            return "Input"
        case "VIEW_DETAISL":
            return "ViewDetails"
        default:
            return state
    }
}

const modal = (state=false, action) =>{
    switch(action.type){
        case "TOGGLE_MODAL":
            return !state
        default:
            return state
    }
}

var initialShoppingList = {"name": "Shopping List", "items": []}

/*

{
    "name": String,
    "items" :[{
        "category" :String
        food : [{"name": String, "foodId": String}]
    }]
}*/

const shoppingList = (state=initialShoppingList,action) =>{
    switch(action.type){
        case "ALTER_NAME":
            return {
                ...state,
                "name": action.payload
            }
        case "ADD_ITEM":
            let category = action.payload["category"]
            let foodItemId = action.payload["foodItemID"]
            let name = action.payload["name"]
            let categories = state.items.map(a => a.category)
            let index = categories.indexOf(category)
            if (index > -1){
                return{
                    ...state,
                    "items": [
                            ...state.items.splice(0, index),
                            {
                                ...state.items[index],
                                "food": [...state.items[index].food, {name,foodItemId, number: 1}]
                            },
                            ...state.items.splice(index + 1)
                    ]
                }
            }

            return {
                ...state,
                "items": [...state.items, {category , 
                                            food : [{
                                                name,
                                                foodItemId, 
                                                number: 1
                        }]}]
            }
        default:
            return state
    }
}



export default combineReducers({edit, sidebar,modal,shoppingList})