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

export const clearList = (id,category) => {return {type: "CLEAR_LIST"}}