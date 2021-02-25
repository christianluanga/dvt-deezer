import React, {useState} from "react"
import {withRouter} from "react-router-dom"
import axios from "axios"
import {Button, Form, Spinner} from "react-bootstrap"
import DezeerBenefit from "../utils/deezer-benefit"
import "../../css/home.css"
import {urlFormatter} from "../helpers/helpers"
import fetchData from "./api.get.artist-details"

const Home = ({history}) => {
  const [artist, setArtist] = useState("")
  const [isLoading, setIsLoaded] = useState(false)
  const URL = "https://secret-ocean-49799.herokuapp.com/"

  const handleArtistSearch = async () => {
    setIsLoaded(true)
    try {
      const response = await fetchData(artist)
      const {id} = response?.data
      id
        ? history.push(`/artist/overview/${id}`)
        : history.push(`/artist-not-found`)
    } catch (error) {
      history.push(`/error-occured`)
    }
  }
  return (
    <>
      <main className="hero-section">
        <div className="home-wrapper">
          <div className="welcome-text-block">
            <h3 className="homepage-header">
              <span style={{color: "#ff0092"}}>
                You bring the <br />
                passion.
              </span>{" "}
              <br />
              <span style={{color: "#00c7f2", paddingLeft: "10px"}}>
                We bring the <br /> music.
              </span>
              <br />
            </h3>
            <Form.Group>
              <Form.Control
                size="lg"
                type="text"
                className="artist-search-input"
                placeholder="Search for your favorite artist"
                onChange={(e) => setArtist(e.target.value)}
              />
              {isLoading ? (
                <Button variant="primary" disabled className="btn-search">
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </Button>
              ) : (
                <Button onClick={handleArtistSearch} className="btn-search">
                  Search
                </Button>
              )}
            </Form.Group>
          </div>
          <div className="cover-image-block">
            <div className="cover-image"></div>
            <p id="premium-incentive-text">
              With our Premium subcription you can get accss to 56M<sup>+</sup>{" "}
              songs which guarantees something for your every mood, place or
              activity
            </p>
          </div>
        </div>
      </main>
      <footer id="why-deezer">
        <DezeerBenefit />
      </footer>
    </>
  )
}

export default withRouter(Home)
