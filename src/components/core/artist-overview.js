import axios from "axios"
import React, {useEffect, useState} from "react"
import ArtistCard from "../utils/artist-card"
import "../../css/artist-overview.css"
import Error from "../utils/error"
const URL = "https://secret-ocean-49799.herokuapp.com/"

const ArtistOverview = ({id}) => {
  const [details, setDetails] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const handleArtistSearch = async () => {
      try {
        const response = await axios.get(
          `${URL}https://api.deezer.com/artist/${id}`
        )
        setDetails(response.data)
        setLoaded(true)
      } catch (error) {
        setLoaded(true)
        setError(true)
      }
    }
    handleArtistSearch()
  }, [])

  if (error) return <Error />
  return (
    <div
      className={`artist-overview ${!loaded ? "set-page-height-onload" : ""}`}
    >
      <div className="artist-overview-wrapper">
        {loaded ? (
          <>
            <a className="formatted centered" href={`/artist/details/${id}`}>
              <img
                className="artist-img"
                src={details.picture_big}
                alt="artist"
              />
            </a>
            <ArtistCard details={details} />
          </>
        ) : (
          <h2>Loading</h2>
        )}
      </div>
    </div>
  )
}

export default ArtistOverview
