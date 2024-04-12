import React from 'react';
import { Navbar } from "../Components/Navbar";
import { SearchBar } from "../Components/SearchBar";

/**
 * Page that shows the About Us of the website.
 * 
 * @component
 * @returns  About us components.
 * React component to be regarded as the About Us page of the website
 * This page gives information about mission, goals, technology and commitment of WardrobeSwap, a platform encourageing viable fashion practices
 * //Usage in a React router setup:
 * <Route path="/about" component={AboutUs} />
  */

function AboutUs() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="App">
        <div className="search-bar-holder">
          <SearchBar />
        </div>
        <div className="about-container">
          <div className="about-heading">
            <h1 style={{ fontFamily: 'Roboto', fontSize: '2.5rem', color: '#59351a' }}>Here is a little more about us:</h1>
          </div>
          <div className="about-section">
            <h3 style={{ fontSize: '2rem', color: '#DAB692' }}>Our Mission</h3>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6', color: '#333' }}>
              Welcome to <strong style={{ color: '#DAB692' }}>WardrobeSwap</strong>! At WardrobeSwap, we're on a mission to revolutionize the way people think about fashion. In today's eco-conscious world, sustainability is more important than ever. That's why we're dedicated to promoting sustainable fashion practices by providing a platform for users to exchange their pre-loved clothing items.
            </p>
          </div>
          <div className="form-container">
            <div className="sell-heading">
              <h1>About Us</h1>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <h3>Why WardrobeSwap?</h3>
                  <p>
                    Did you know that textile waste is a significant contributor to environmental pollution? With millions of tons of clothing ending up in landfills every year, it's clear that we need to change the way we consume fashion. WardrobeSwap offers a solution by encouraging users to swap, buy, and sell used clothing, reducing the impact on our planet.
                  </p>
                  <h3>How It Works</h3>
                  <p>
                    Our online marketplace makes it easy for users to browse through a diverse range of clothing items from different cultures and styles. Whether you're looking to refresh your wardrobe or declutter your closet, WardrobeSwap has you covered. Simply upload pictures of the clothing items you no longer need, and browse through listings to find your next favorite outfit.
                  </p>
                  <h3>Our Commitment</h3>
                  <p>
                    At WardrobeSwap, we prioritize the safety and security of our users. Our platform is designed to ensure a seamless and hassle-free experience, with advanced features such as push notifications to keep you updated on your listings.
                  </p>
                  <h3>Our Technology</h3>
                  <p>
                    Behind the scenes, we utilize cutting-edge technology to power WardrobeSwap. With React.js as our frontend framework, we've created a user-friendly interface that makes browsing and shopping a breeze. Our backend is built for reliability and efficiency, ensuring that transactions are smooth and secure.
                  </p>
                  <h3>Join the Movement</h3>
                  <p>
                    Join us in our mission to promote sustainable fashion and reduce textile waste. Together, we can make a positive impact on the planet while still expressing our unique styles and personalities.
                  </p>
                  <p>
                    Ready to swap your wardrobe? Sign up for WardrobeSwap today!
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

export default AboutUs;