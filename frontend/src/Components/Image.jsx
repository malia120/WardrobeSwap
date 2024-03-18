import React, { useState } from "react";
 

function Image({ onFileChange }) {
    const [file, setFile] = useState(null);
    

    function handleChange (e) {
        const file = e.target.files[0];
        console.log(e.target.files);
        onFileChange(file);
    }
 
    return (
        <div className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} alt=""/>
        </div>
    );
}
 
export default Image;