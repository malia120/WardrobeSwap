import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"; 
import "../Style/App.css";

function Form() {

    const [Text, setText] = useState("");
    const [submitted, setSubmitted] = useState(false); 
    const navigate = useNavigate();
    console.log(Text);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
    
        try {
          const response = await fetch("http://127.0.0.1:5000/api", {
            method: "POST",
            body: formData,
          });
    
          if (response.ok) {
            console.log("Data submitted successfully");
            setSubmitted(true);
          } else {
            console.error("Failed to submit data");
          }
        } catch (error) {
          console.error("Error submitting data:", error);
        }
      };

      if (submitted) {
        return (
          <div className="FormSubmit">
            <p>Thank you for submitting. Click here to return home.</p>
            <button onClick={() => navigate("/")}>Return Home</button>
          </div>
        );
      }

    
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
                  <div id="category">
                    <label>Category</label>
                    </div>
                    <select name="Category" defaultValue="">  
                    <option value="" disabled hidden>
                      Select a category
                    </option>
                    <option value="Women">Women</option>
                    <option value="Men">Men</option>
                    <option value="Children">Children</option>
                  </select>
                </div>
                <div className="formGroup">
                    <label>Price</label>
                    <input name="Price" placeholder="£0.00"/>
                </div>
                <div className="formGroup">
                    <label>Upload your image</label>
                    <input name="Image" placeholder="Upload here"/>
                </div>
                <button id="Submit-button">Submit</button>
            </div>
        </form>
        </React.Fragment>

    )

}

export default Form;