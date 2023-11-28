import React from 'react'
import BGvideo from '../Assets/Background.mp4'
import { Link } from 'react-router-dom';

export const Background = () => {
    return (
        <div className="Background">
            <div className="BGdim"></div>
            <video src={BGvideo} autoPlay loop muted/>
            <div className='bg-wrapper'>
            <div className="content">
          <h1>Share your Wardrobe now</h1>
          <Link to="/sell">
          <button id="Sell-button">Sell Now</button>
          </Link>
          </div>
        </div>
      </div>
  );  
}