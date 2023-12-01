import React, {useState, useEffect} from "react";
import "../Style/App.css";

function Form() {

    const [Text, setText] = useState("");
    console.log(Text);

    const handleSubmit = (e) => {
        e.preventDefault()
        const data =  new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
    };
    
    return (
        <React.Fragment>
        <form onSubmit={handleSubmit}> 
            <div className="formInput">
                <div className="formGroup">
                    <label>Title</label>
                    <input name="Title" placeholder="Enter your title here" />
                </div>
                <div className="formGroup">
                    <label>Description</label>
                    <input name="Description" placeholder="Enter your description here"/>
                </div>
                <div className="formGroup">
                    <label>Category</label>
                    <input name="Category" placeholder="Select a category"/>
                </div>
                <div className="formGroup">
                    <label>Price</label>
                    <input name="Price" placeholder="£0.00"/>
                </div>
                <div className="formGroup">
                    <label>Upload your image</label>
                    <input name="Image" placeholder="Upload here"/>
                </div>
                <button>Submit</button>
            </div>
        </form>
        </React.Fragment>

    )

}

export default Form;