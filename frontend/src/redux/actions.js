export const setEdit = () => {return {type: "TOGGLE_EDIT"}}

export const setViewDetails = () => {return {type: "VIEW_DETAISL"}}

export const setInput = () => {return {type: "INPUT"}}

export const setShoppingList = () => {return {type: "SHOPPING_LIST"}}

export const toggleModal = () => {return {type: "TOGGLE_MODAL"}}

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
                "foodItemID": "1234567"
            }
}}
