import {combineReducers} from "redux"

const edit = (state=false, action) =>{
    switch(action.type){
        case "TOGGLE_EDIT":
            return !state
        default:
            return state
    }
}

export default combineReducers({
    edit
})