export const setEdit = () => {return {type: "TOGGLE_EDIT"}}

export const setViewDetails = () => {return {type: "VIEW_DETAISL"}}

export const setInput = () => {return {type: "INPUT"}}

export const setShoppingList = () => {return {type: "SHOPPING_LIST"}}

export const toggleModal = () => {return {type: "TOGGLE_MODAL"}}

export const dataUpdate = () => {return {type: "WATCH_DATA"}}

export const alterName = () => {
    return {
            type: "ALTER_NAME",
            payload: "Birthday Party"
}}

export const addItem = () => {
    return {
            type: "ADD_ITEM",
            payload: {
                "category" : "Fruits and Veges",
                "name": "Avocado",
                "foodItemID": "12345"
            }
}}



export const itemNumberChange = () => {
    return {
            type: "ITEM_NUMBER_CHANGE",
            payload: {
                "category" : "Fruits and Veges",
                "foodItemID": "12345",
                "change": -1
            }
}}

export const itemRemove = () => {
    return {
            type: "ITEM_REMOVE",
            payload: {
                "category" : "Fruits and Veges",
                "foodItemID": "12345",
            }
}}


export const populate = (id,category) => {
    return {
            type: "POPULATE",
            payload: {id, category}
}}



