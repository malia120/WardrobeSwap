import React from 'react'
import BGvideo from '../Assets/Background.mp4'

export const Background = () => {
    return (
        <div className="Background">
            <div className="BGdim"></div>
            <video src={BGvideo} autoPlay loop muted/>
            <div className='bg-wrapper'>
            <div className="content">
          <h1>Share your Wardrobe now</h1>
          <button id="Sell-button">Sell Now</button>
          </div>
        </div>
      </div>
  );  
}