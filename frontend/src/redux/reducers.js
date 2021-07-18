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

export default combineReducers({edit, sidebar,modal})