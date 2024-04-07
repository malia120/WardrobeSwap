import React from 'react';
import {  Navbar  } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";
import  Form from "../Components/Form";

/**
 * Page that shows the Sell page of the website.
 *
 * @returns  Sell components.
 */

function Results() {
  const [data, setData] = useState([]); 

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/listing')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
    return (
      <React.Fragment> 
        <Navbar />
        <div className="App"> 
          <div className="search-bar-holder">
          <SearchBar placeholder="Search..." data={data} />
          </div>
        <div className="form-container">
            <h1>Here are your results: </h1>
        <Form />  
        </div>
      </div>
      </React.Fragment>
    );
}

export default Results;