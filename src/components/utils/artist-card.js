import React from "react"
import "../../css/artist-details.css"

const ArtistCard = ({details, artist_details_class}) => {
  const {name, nb_fan, nb_album} = details
  return (
    <>
      <div className={`artist-details centered ${artist_details_class}`}>
        <h3>{name}</h3>
        <h5>Total Albums {nb_album}</h5>
        <h5>{nb_fan} fan</h5>
      </div>
    </>
  )
}
ArtistCard.defaultProps = {
  artist_details_class: ""
}
export default ArtistCard
