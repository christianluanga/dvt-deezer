import React from "react"

const ArtistDisplay = ({name, nb_fan}) => {
  return (
    <div className="artist-details">
      <h3>{name}</h3>
      <h5>{nb_fan} fans</h5>
    </div>
  )
}

export default ArtistDisplay
