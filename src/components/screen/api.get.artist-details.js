import axios from "axios"
import {urlFormatter} from "../helpers/helpers"
const URL = "https://secret-ocean-49799.herokuapp.com/"

const fetchData = async (artist) => {
  try {
    const response = await axios.get(
      `${URL}https://api.deezer.com/artist/${urlFormatter(artist, "-")}`
    )
    return response
  } catch (error) {
    const {response} = error
    return Promise.reject(response.data)
  }
}

export default fetchData
