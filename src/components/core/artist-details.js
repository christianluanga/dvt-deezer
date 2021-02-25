import React, {useEffect, useState} from "react"
import axios from "axios"
import dotenv from "dotenv"
import {urlConstructor} from "../helpers/helpers"
import {Card, Container} from "react-bootstrap"
import ArtistCard from "../utils/artist-card"
import SongDisplay from "../utils/song-display"
import "../../css/artist-details.css"
import Error from "../utils/error"
dotenv.config()
const CORS_PREFIX = "https://secret-ocean-49799.herokuapp.com/"

const ArtistDetails = ({id}) => {
  const [details, setDetails] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchAllData = async () => {
      const details = await getArtistDetails(urlConstructor(id))
      setDetails(details)
      setLoaded(true)
    }
    fetchAllData()
  }, [])

  if (error) return <Error />
  return (
    <div>
      <Container className={`my-5 ${!loaded ? "detail-display" : ""}`}>
        {loaded ? (
          <>
            <div className="artist-layout">
              <section className="artist-details-img-wrapper">
                <img
                  className="artist-img"
                  src={details[0].picture_big}
                  alt="artist"
                />
                <ArtistCard
                  details={details[0]}
                  artist_details_class="artist-details-bg"
                />
              </section>
              <section name="top-tracks" className="top-tracks">
                <h3>Top Tracks</h3>
                <ol className="song-underline">
                  {details[1].data.map((song) => (
                    <li key={song.id}>
                      <SongDisplay songDetails={song} />
                    </li>
                  ))}
                </ol>
              </section>
              <section className="related-artist" name="related-artist">
                <h3>Related Artists</h3>
                <div className="related-artist-wrapper">
                  {details[3].data.map((artist) => (
                    <div key={artist.id}>
                      <a
                        className="formatted"
                        href={`/artist/details/${artist.id}`}
                      >
                        <img
                          key={artist.id}
                          className="related-artist-img pb-1"
                          src={artist.picture_big}
                          alt="artist"
                        />
                        <h5 className={`related-artist-name`}>{artist.name}</h5>
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            <section name="albums" className="pt-2">
              <h3 className="mb-5">Artist's Albums</h3>
              <div className="top-albums">
                {details[2].data.map((album) => (
                  <Card key={album.id} className="album-card">
                    <Card.Body className="album-card-body">
                      <Card.Title>{album.title}</Card.Title>
                      <Card.Text>
                        Release Year <strong>{album.release_date}</strong>
                      </Card.Text>
                      <Card.Text>
                        Liked by <strong>{album.fans}</strong> users
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </section>
          </>
        ) : (
          <h1>Loading ...</h1>
        )}
      </Container>
    </div>
  )
}

/**@function getContentDetails
 * @param string url
 * @returns the data from the passed url
 */
const getContentDetails = async (url) => {
  try {
    const response = await axios.get(`${CORS_PREFIX + url}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getArtistDetails = (urls) => {
  return Promise.all(urls.map((item) => getContentDetails(item.url)))
}

export default ArtistDetails
