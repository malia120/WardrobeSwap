import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"; 
import "../Style/App.css";
import Image from "./Image";

/**
 * Component showing a form for listing data.
 * Uses React imports for managing form and submission.
 *
 * @returns  form components.
 */

function Form() {

    const [Text, setText] = useState("");
    const [submitted, setSubmitted] = useState(false); 
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    console.log(Text);

     /**
     * Handles submitted data by sending data to the server.
     *
     * @param {Event} e - The form submitted event.
     */

     const handleFileChange = (selectedFile) => {
      setFile(selectedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);

        if (file) {
          formData.append("Image", file);
      }
    
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

      /**
     * Shows a thank you message and a button below it to return back home
     * done after form submission is successfull.
     * 
     * @condition submitted - Shows whether the form has been submitted.
     * 
     * 
     */

      if (submitted) {
        return (
          <div className="FormSubmit">
            <p>Thank you for submitting. Click here to return home.</p>
            <button onClick={() => navigate("/")}>Return Home</button>
          </div>
        );
      }

    /**
     * shows the form for inputting data.
     *
     */
    
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
                  <label>Image</label>
                  <Image onFileChange={handleFileChange} />
                </div>
                <button id="Submit-button">Submit</button>
            </div>
        </form>
        </React.Fragment>

    )

}

export default Form;