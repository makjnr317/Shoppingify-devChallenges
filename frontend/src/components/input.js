import React from 'react'
import "./input.css"

export default function Input(){
    return(
        <div className="input">
            <div>
                <h6>Add new Item</h6>
                <form>
                    <div>
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter a name"/>
                    </div>
                    <div>
                        <label for="note">Note(optional)</label>
                        <textarea type="text" name="note" id="note" placeholder="Enter a note"/>
                    </div>
                    <div>
                        <label for="image">Image</label>
                        <input type="text" name="image" id="image" placeholder="Enter a url"/>
                    </div>
                    <div>
                        <label for="category">Category</label>
                        <input type="text" name="category" id="category" placeholder="Enter a category"/>
                        <div className="categoryOptions">
                            <div className="option">Fruits</div>
                            <div className="option">Cereals</div>
                            <div className="option">Cereals</div>
                            <div className="option">Vegetables</div>
                            <div className="option">Vegetables</div>
                        </div>
                    </div>
                </form>
            </div>
            
            <div className="buttons">
                <div className="cancel">
                    cancel
                </div>
                <div className="save">
                    Save
                </div>
            </div>
        </div>
    )
}