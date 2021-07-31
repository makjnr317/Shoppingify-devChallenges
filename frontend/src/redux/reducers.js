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


const shoppingList = (state=initialShoppingList,action) =>{
    var category, name, foodItemId,categories, index, change, foods, foodIndex, foodItem
    if (action.hasOwnProperty('payload')){
        category = action.payload["category"]
        foodItemId = action.payload["foodItemID"]
        name = action.payload["name"]
        categories = state.items.map(a => a.category)
        index = categories.indexOf(category)
    }
    switch(action.type){
        case "ALTER_NAME":
            return {
                ...state,
                "name": action.payload
            }
        case "ADD_ITEM":
            if (index > -1){
                return{
                    ...state,
                    "items": [...state.items.slice(0, index), {...state.items[index], "food": [...state.items[index].food, {name,foodItemId, number: 1}]}, ...state.items.slice(index + 1)
                    ]
                }
            }

            return {
                ...state,
                "items": [...state.items, {category , food : [{name, foodItemId, number: 1}]}]
            }
        case "ITEM_NUMBER_CHANGE":
            change = action.payload["change"]
            foods = state.items[index].food.map(a => a.foodItemId)
            foodIndex = foods.indexOf(foodItemId)
            foodItem = state.items[index].food[foodIndex]

            return {
                ...state,
                "items" : [
                        ...state.items.slice(0, index), 
                        {
                            ...state.items[index], 
                            "food": [
                                    ...state.items[index].food.slice(0, foodIndex), 
                                    {name: foodItem.name, foodItemId: foodItem.foodItemId, number: foodItem.number + change}, 
                                    ...state.items[index].food.slice(foodIndex + 1)]
                        }, 
                        ...state.items.slice(index + 1)
                ]}
        case "ITEM_REMOVE":
            foods = state.items[index].food.map(a => a.foodItemId)
            foodIndex = foods.indexOf(foodItemId)
            foodItem = state.items[index].food[foodIndex]

            return {
                ...state,
                "items" : [
                        ...state.items.slice(0, index), 
                        {
                            ...state.items[index], 
                            "food": [
                                    ...state.items[index].food.slice(0, foodIndex),  
                                    ...state.items[index].food.slice(foodIndex + 1)]
                        }, 
                        ...state.items.slice(index + 1)
                ]}
        case "CLEAR_LIST":
            return {
                "name": "Shopping List",
                "items": []
            }
        default:
            return state
    }
}

const viewData = (state={},action) =>{
    switch(action.type){
        case "POPULATE":
            return action.payload
        default:
            return state
    }
}

const dataWatcher = (state=false, action) => {
    switch(action.type){
        case "WATCH_DATA":
            return !state
        default:
            return state
    }
}

const search = (state="", action) =>{
    switch(action.type){
        case "UPDATE":
            return action.payload
        default:
            return state
    }
}

const categories = (state=[], action) =>{
    switch(action.type){
        case "SET_CATEGORIES":
            return action.payload
        default:
            return state
    }
}

const changeHistory = (state=false, action) =>{
    switch(action.type){
        case "CHANGE_HISTORY":
                return !state
        default:
                return state
    }
}


const toggleHistory = (state=false, action) =>{
    switch(action.type){
        case "HISTORY_TOGGLE":
                return !state
        case "SET_FALSE":
            return false
        default:
                return state
    }
}

const history = (state={}, action) =>{
    switch(action.type){
        case "SET_HISTORY":
                return action.payload
        default:
                return state
    }
}

const statisticsController = (state=false, action) =>{
    switch(action.type){
        case "UPDATE_STATS":
            return !state
        default:
            return state
    }
}

export default combineReducers({statisticsController,categories, history,edit, toggleHistory,sidebar,modal,shoppingList, changeHistory,viewData, dataWatcher, search})