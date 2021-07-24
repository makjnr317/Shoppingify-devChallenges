import "./input.css"
import React, { useState } from 'react'
import { useDispatch} from "react-redux"
import { setShoppingList , dataUpdate} from '../redux/actions'
import { useHistory } from 'react-router-dom'


export default function Input(){
    const [name, setname] = useState("")
    const [category, setcategory] = useState("")
    const [note, setnote] = useState("")
    const [url, seturl] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()

    const handleFetch = () =>{
        let nameField = document.querySelector("#name")
        let categoryField = document.querySelector("#category")
        let invalidName = false, invalidCategory = false

        nameField.style.borderColor = "#BDBDBD"
        categoryField.style.borderColor = "#BDBDBD"

        if (name.trim() === ""){
            invalidName = true
            nameField.style.borderColor = "red"
            setname("")
        }
        if (category.trim() === ""){
            invalidCategory = true
            categoryField.style.borderColor = "red"
            setcategory("")
        }

        if (invalidName || invalidCategory){return}
    
        let data = {category , "food" :{name, note: (note)? note: undefined, image: (url)? url: undefined}}

        fetch('http://localhost:7000/api/fooditems', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(() =>{
            dispatch(setShoppingList())
            dispatch(dataUpdate())
        })
        .catch(err => console.log(err))
    }

    const viewOption = () =>{
        document.querySelector(".categoryOptions").style.visibility ="visible"
    }

    const hideOption = (event) =>{
        document.querySelector(".categoryOptions").style.visibility ="hidden"
        setcategory((event.relatedTarget)? event.relatedTarget.innerHTML : category)
    }


    return(
        <div className="input">
            <div>
                <h6>Add new Item</h6>
                <form>
                    <div>
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter a name" value={name} onChange={(event)=> setname(event.target.value)}/>
                    </div>
                    <div>
                        <label for="note">Note(optional)</label>
                        <textarea type="text" name="note" id="note" placeholder="Enter a note"  value={note} onChange={(event)=> setnote(event.target.value)}/>
                    </div>
                    <div>
                        <label for="image">Image</label>
                        <input type="text" name="image" id="image" placeholder="Enter a url"  value={url} onChange={(event)=> seturl(event.target.value)}/>
                    </div>
                    <div>
                        <label for="category">Category</label>
                        <input type="text" name="category" id="category" placeholder="Enter a category" value={category} onFocus={viewOption} onBlur={hideOption} onChange={(event)=> setcategory(event.target.value)}/>
                        <div className="categoryOptions">
                            <div className="option" tabIndex="0">Fruits</div>
                            <div className="option" tabIndex="0">Cereals</div>
                            <div className="option" tabIndex="0">Cereals</div>
                            <div className="option" tabIndex="0">Vegetables</div>
                            <div className="option" tabIndex="0">Vegetables</div>
                        </div>
                    </div>
                </form>
            </div>
            
            <div className="buttons">
                <div className="cancel" onClick={() => dispatch(setShoppingList())}>
                    cancel
                </div>
                <div className="save" onClick={handleFetch}>
                    Save
                </div>
            </div>
        </div>
    )
}