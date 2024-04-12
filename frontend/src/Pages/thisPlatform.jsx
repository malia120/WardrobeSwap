import React from 'react';
import { Navbar } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";

/**
 * Page that shows information about the platform.
 *this component gives information about the WaredrobeSwap platform, its aim, technology choices, use cases, and focus on viable fashion
 *it has a navigation bar, search bar, and a selection expressing various aspects of the platform
*@components
 * @returns  This platform components.
 */

function ThisPlatform() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <div className="search-bar-holder">
          <SearchBar />
        </div>
        <div className="form-container">
          <div className="sell-heading">
            <h1>Let me tell you more about our platform...</h1>
          </div>
          <div className="container">
            <div className="about-section">
              <h3 style={{ fontSize: '2rem', color: '#DAB692' }}>Our Mission</h3>
              <p style={{ fontSize: '1.3rem', lineHeight: '1.6', color: '#333' }}>
                Read a bit more about <strong style={{ color: '#DAB692' }}>WardrobeSwap</strong>! At WardrobeSwap, we're on a mission to revolutionize the way people think about fashion. In today's eco-conscious world, sustainability is more important than ever. That's why we're dedicated to promoting sustainable fashion practices by providing a platform for users to exchange their pre-loved clothing items.
              </p>
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <h3>Choosing Node.js for Backend</h3>
                  <p>
                    When it came to deciding what to utilize for backend, I was torn between Python and Node.js. Although Python is known for its simplicity and readability, Node.js emerged as the optimal choice due to its superior performance. Node.js consistently outperforms Python in comparison tests, efficiently handling large numbers of simultaneous connections and requests with lower latency. This performance advantage makes it the optimal choice for building real-time applications.
                  </p>
                  <h3>Utilizing Use Cases</h3>
                  <p>
                    During the early delivery stage of my project, I will be creating use cases, which play a crucial role in defining function requirements and user interactions. Use cases are powerful tools for capturing function requirements for software systems, allowing me to simulate user interactions and identify potential issues early in the development process. I will use UML diagrams to visualize these use cases, providing a clear understanding of how users would interact with the website and helping me identify any potential faults.
                  </p>
                  <h3>Presenting a Functional Prototype</h3>
                  <p>
                    As the project progresses, I will present a functional prototype featuring a basic user interface and interactions with the database. This prototype will simulate the real website before it is completed, giving users a preview of its functionality. The user interface and functionality design are tightly integrated, and presenting a functional prototype early in the development process will provide valuable feedback and ensure that the final product meets user expectations.
                  </p>
                  <h3>Focus on Sustainable Fashion</h3>
                  <p>
                    With 'WardrobeSwap', I aim to create a website that promotes sustainable fashion practices by providing a platform for buying and selling used clothing. The platform focuses on reducing clothing waste and encouraging cultural exchange through online retail. Its user-friendly interface and minimalist design ensure a stress-free browsing experience, while promoting environmental sustainability and embracing diverse fashion choices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer />
    </React.Fragment>
  );
}

export default ThisPlatform;