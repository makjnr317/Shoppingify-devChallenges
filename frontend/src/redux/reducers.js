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
    switch(action.type){
        case "ALTER_NAME":
            return {
                ...state,
                "name": action.payload
            }
        case "ADD_ITEM":
            category = action.payload["category"]
            foodItemId = action.payload["foodItemID"]
            name = action.payload["name"]
            categories = state.items.map(a => a.category)
            index = categories.indexOf(category)
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
            category = action.payload["category"]
            foodItemId = action.payload["foodItemID"]
            categories = state.items.map(a => a.category)
            index = categories.indexOf(category)
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
                                    {name: foodItem.name,foodItemId: foodItem.foodItemId, number: foodItem.number + change}, 
                                    ...state.items[index].food.slice(foodIndex + 1)]
                        }, 
                        ...state.items.slice(index + 1)
                ]}
        case "ITEM_REMOVE":
            category = action.payload["category"]
            foodItemId = action.payload["foodItemID"]
            categories = state.items.map(a => a.category)
            index = categories.indexOf(category)
            foods = state.items[index].food.map(a => a.foodItemId)
            foodIndex = foods.indexOf(foodItemId)
            foodItem = state.items[index].food[foodIndex]
            console.log(state.items[index].food)
            console.log([
                ...state.items[index].food.slice(0, foodIndex),  
                ...state.items[index].food.slice(foodIndex + 1)
            ])
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
        default:
            return state
    }
}

var data




const foodList = (state=[],action) =>{
    var data
    switch(action.type){
        case "SET_DATA":
            fetch("http://localhost:7000/api/fooditems")
                .then(res => res.json())
                .then(res => {return res})
                .catch(err => console.log(err))
            
        default:
            return state
    }
}


export default combineReducers({edit, sidebar,modal,shoppingList,foodList})