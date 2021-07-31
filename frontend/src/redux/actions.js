export const setEdit = () => {return {type: "TOGGLE_EDIT"}}

export const setViewDetails = () => {return {type: "VIEW_DETAISL"}}

export const setInput = () => {return {type: "INPUT"}}

export const setShoppingList = () => {return {type: "SHOPPING_LIST"}}

export const toggleModal = () => {return {type: "TOGGLE_MODAL"}}

export const dataUpdate = () => {return {type: "WATCH_DATA"}}

export const alterName = (name) => {
    return {
            type: "ALTER_NAME",
            payload: name
}}

export const addItem = (category, name, id) => {
    return {
            type: "ADD_ITEM",
            payload: {
                "category" : category,
                "name": name,
                "foodItemID": id
            }
}}

export const itemNumberChange = (category,id,change) => {
    return {
            type: "ITEM_NUMBER_CHANGE",
            payload: {
                "category" : category,
                "foodItemID": id,
                "change": change
            }
}}

export const itemRemove = (category, id) => {
    return {
            type: "ITEM_REMOVE",
            payload: {
                "category" : category,
                "foodItemID": id,
            }
}}

export const populate = (id,category) => {
    return {
            type: "POPULATE",
            payload: {id, category}
}}

export const setSearch = (search) => {
    return {
            type: "UPDATE",
            payload: search
}}

export const clearList = () => {return {type: "CLEAR_LIST"}}

export const setCategories = (categories) => {
    return {
            type: "SET_CATEGORIES",
            payload: categories
}}


export const historyChange = () => {return {type: "CHANGE_HISTORY"}}

export const historyToggle = () => {return {type: "HISTORY_TOGGLE"}}

export const setFalse = () => {return {type: "SET_FALSE"}}

export const setHistory = (name,date,list) => {
    return {
        type: "SET_HISTORY",
        payload:{
            name,
            date,
            list
        }
    }
}


export const updateStats = () => {return {type: "UPDATE_STATS"}}