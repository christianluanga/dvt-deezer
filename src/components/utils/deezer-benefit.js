import React from "react"
import "../../css/deezer-benefit.css"

const DezeerBenefit = () => {
  return (
    <div className="why-deezer-container">
      <div className="why-deezer-wrapper">
        <img
          className="phone-img"
          src="img/iphone-why-deezer-section.png"
          alt="iphone"
        />
        <div className="why-deezer-benefit">
          <h2 className="benefit-header benefit-heading">Why Deezer</h2>
          <div className="benefit-wrapper">
            <div>
              <h3 className="benefit-header">
                A world of music in your pocket.
              </h3>
              <p>
                Find new loves and old favourites from over 56 million tracks.
              </p>
            </div>
            <div>
              <h3 className="benefit-header">No WiFi? No problem.</h3>
              <p>
                With Deezer Premium, you don't need to be connected to enjoy
                your favourite tracks.
              </p>
            </div>
            <div>
              <h3 className="benefit-header">Craft your selection.</h3>
              <p>
                Create playlists from millions of tracks and take them with you
                wherever you go.
              </p>
            </div>
            <div>
              <h3 className="benefit-header">Made for you.</h3>
              <p>
                Flow gets to know what you like and what you don't. Discover
                your personal soundtrack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DezeerBenefit
