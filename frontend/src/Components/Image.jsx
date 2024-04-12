import React, { useState } from "react";

/**
 * Component for uploading and displaying an image.
 * 
 * This component allows users to upload an image file and displays it once uploaded.
 * 
 * @component
 * @param {Function} onFileChange - function to handle the file change event.
 * @returns {JSX.Element} The JSX representation of the image component.
 */


function Image({ onFileChange }) {
    const [file, setFile] = useState(null);

    /**
   * Handles the change event when a file is selected.
   * 
   * @param {Event} e - The file change event.
   */

    function handleChange(e) {
        const file = e.target.files[0];
        setFile(file);
        // console.log(e.target.files);
        onFileChange(file);
    }
    // Rendering the image upload input and displaying the uploaded image

    return (
        <div className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            {file && <img src={file} alt="Uploaded" />}
            <img src={file} alt="" />
        </div>
    );
}

export default Image;